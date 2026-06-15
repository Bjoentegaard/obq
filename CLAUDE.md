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
├── index.html               # Portal: two cards → app/ and kokebok/
├── app/                     # Vite + TypeScript SPA
│   └── src/
│       ├── main.ts          # Entry: merges question banks, calls renderApp()
│       ├── app.ts           # Shell + routing (Page = 'kurs'|'quiz'|'sets')
│       ├── data/
│       │   ├── quiz.ts      # QuizQuestion interface + AWS CLF-C02 questions (25)
│       │   ├── istqb.ts     # ISTQB CTFL v4.0.1 questions (92, Practice 1–6)
│       │   ├── courses.ts   # Course[] metadata array
│       │   ├── domain.ts    # DOMAIN_META: tag colors/labels per domain string
│       │   └── quizset.ts   # QuizSet type for custom user quiz sets
│       ├── pages/
│       │   ├── courses.ts   # Kurs tab — course cards with progress badge
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
    bank?: string                    // used to filter per-course progress on Kurs tab
}

interface AppState {
    quizHistory: QuizResult[]
    quizSets: QuizSet[]
    quizSetHistory: Record<string, QuizSetProgress[]>
}

interface Course {
    id: string
    title: string
    subtitle: string
    icon: string
    description: string
    tags: string[]
    color: string                    // accent color for card top border
    overviewUrl: string              // always relative: '../courses/<slug>/'
    quizBank: string                 // matches QuizQuestion.bank
    questionCount: number
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

Static HTML pages at `courses/<slug>/index.html`, linked from course cards via `overviewUrl`. Use `../course.css` for shared styles. **`overviewUrl` must be relative** (`../courses/<slug>/`) — the app is served from `/app/` so absolute paths break.

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
4. **Metadata** — add a `Course` entry to `data/courses.ts` (see interface above; remember relative `overviewUrl`)
5. **Overview page** — copy `courses/_template.html` to `courses/<slug>/index.html`, fill in content using components from the library above

## Deployment

Push to `main` → GitHub Actions (`deploy.yml`) builds everything and deploys to GitHub Pages:
- Vite app → `dist/app/`
- mdBook (from `Bjoentegaard/aws-kokebok`) → `dist/kokebok/`
- Portal + courses → `dist/`
