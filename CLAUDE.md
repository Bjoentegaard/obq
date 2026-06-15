# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev

```bash
cd app && npm run dev        # Vite dev server — localhost:5173
cd app && npx tsc --noEmit  # Typecheck (works in sandbox)
cd app && npm run build      # Production build → app/dist/ — must run on Mac, not Linux ARM64
```

> Vite 8 uses rolldown which has no Linux ARM64 binding. GitHub Actions (x86_64) handles production builds on push to `main`.

## Architecture

```
obq/
├── index.html               # Portal: Quiz + Kokebok cards, then course overview cards per course
├── app/                     # Vite + TypeScript SPA
│   └── src/
│       ├── main.ts          # Entry: merges question banks, calls renderApp()
│       ├── app.ts           # Shell + routing (Page = 'quiz'|'sets'), ← OBQ back link
│       ├── data/
│       │   ├── quiz.ts      # QuizQuestion interface + AWS CLF-C02 questions (25)
│       │   ├── istqb.ts     # ISTQB CTFL v4.0.1 questions (92, Practice 1–6)
│       │   ├── domain.ts    # DOMAIN_META: tag colors/labels per domain string
│       │   └── quizset.ts   # QuizSet + QuizSetQuestion types
│       ├── pages/
│       │   ├── quiz.ts      # Quiz setup → question → answer → result → review
│       │   └── sets.ts      # Custom quiz sets CRUD + play
│       ├── state/
│       │   ├── app-state.ts # AppState, QuizResult, QuizSetProgress
│       │   └── storage.ts   # localStorage key: obq_state_v1 (schema v2)
│       └── styles/main.css  # All app CSS; design tokens in :root
├── courses/                 # Static HTML course overviews (standalone pages)
│   ├── course.css           # Shared stylesheet for all course overviews
│   ├── _template.html       # Starting point — copy for each new course
│   ├── aws-clf/index.html   # AWS CLF-C02 overview
│   └── istqb/
│       ├── index.html       # ISTQB CTFL overview
│       └── exam.html        # Standalone practice exam (not part of the Vite app)
└── kokebok/                 # mdBook (external repo: Bjoentegaard/aws-kokebok)
```

## Data Model

```ts
interface QuizQuestion {
    bank: string                     // 'aws' | 'istqb' | any future bank
    domain: string                   // 'cloud' | 'Practice 1' | etc.
    question: string
    options: [string, string, string, string]
    answer: 0 | 1 | 2 | 3           // A=0 B=1 C=2 D=3
    explanation?: string
}

interface QuizResult {
    timestamp: number
    correct: number
    total: number
    percentage: number
    bank?: string                    // used for history bank label in quiz setup
}

interface AppState {
    quizHistory: QuizResult[]
    quizSets: QuizSet[]
    quizSetHistory: Record<string, QuizSetProgress[]>
}

interface QuizSetQuestion {
    question: string
    options: [string, string, string, string]
    answer: 0 | 1 | 2 | 3
    explanation?: string
    domain?: string
    bank?: string                    // optional; if all questions share same bank, recorded in history
}
```

All question banks are merged in `main.ts`:
```ts
const allQuestions = [...quizQuestions, ...istqbQuestions]
```

## Design System

Both the app (`app/src/styles/main.css`) and course overviews (`courses/course.css`) share the same tokens:

```css
--bg: #0c0e14   --bg2: #13161f   --bg3: #1a1e2a   --bg4: #222636
--border: rgba(255,255,255,0.07)
--text: #e2e4ed   --text2: #7e849a   --text3: #454b60
--accent: #4f8ef7   --green: #3ecf8e   --amber: #f5a623   --red: #f76f6f
```

Fonts: IBM Plex Sans (body) + IBM Plex Mono (code/labels) via Google Fonts.

## Course Overview Pages

Static HTML pages at `courses/<slug>/index.html`, linked from `index.html` course cards. Use `../course.css` for shared styles. Course cards in `index.html` are hardcoded HTML — add a new card there when adding a new course.

### Tab navigation (copy as-is from `_template.html`)

```html
<button class="tab-btn active" onclick="show('oversikt', this)">Oversikt</button>
<button class="tab-btn" onclick="show('teknikker', this)">Teknikker</button>
```
```js
function show(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
```

Each tab is a `<div id="<id>" class="section">`. First tab gets `class="section active"`. Topbar back link: `<a href="../../" class="topbar-back">← OBQ</a>`.

### Component library (`course.css`)

| Component | Usage |
|---|---|
| `.card` | Content card — dark bg, rounded corners |
| `.overview-grid` | 3-col gradient cards (chapters/modules) |
| `.grid-2` / `.grid-3` | Responsive 2- or 3-column layout |
| `.inset` | Darker block inside a card |
| `.principle` + `.principle-num` | Numbered principles/rules |
| `.flow` + `.flow-step` | Horizontal step chain with arrows |
| `table` | Styled comparison table |
| `details` / `summary` / `.details-body` | Accordion |
| `.click-grid` + `.click-card` + `.detail-panel` | Interactive card → detail panel |
| `.info-block.green/.red/.amber/.accent` | Colored info/risk blocks |
| `.tip` | Amber exam tip box |
| `.tags` + `.tag.green/.amber/.red/.purple` | Tag pills |
| `ul.plain` | List with → markers |
| `.label` | Small uppercase mono label |
| `.ch-header` + `.ch-icon` | Chapter header with icon circle |

`.flow-step` color variants: default (accent), `.green`, `.amber`, `.red`, `.purple`.

## Adding a New Course

1. **Questions** — create `app/src/data/<slug>.ts` with `QuizQuestion[]`, `bank: '<slug>'`
2. **Merge** — import and spread into `allQuestions` in `main.ts`
3. **Bank tab** — add `<button class="bank-tab" data-bank="<slug>">` in `buildQuizSetup()` in `pages/quiz.ts`. Domain options for non-`aws` banks are auto-generated from questions — no extra code needed. Optionally add entries to `DOMAIN_META` in `domain.ts` for custom tag colors.
4. **Overview page** — copy `courses/_template.html` to `courses/<slug>/index.html`, fill in content
5. **Portal card** — add a course card to `index.html` in the `.course-grid` section (copy existing card pattern)

## Deployment

Push to `main` → GitHub Actions (`deploy.yml`) builds everything and deploys to GitHub Pages:
- Vite app → `dist/app/`
- mdBook (from `Bjoentegaard/aws-kokebok`) → `dist/kokebok/`
- Portal + courses → `dist/`
