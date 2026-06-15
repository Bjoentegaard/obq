# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev

```bash
# Local dev (inside app/)
cd app && npm run dev       # Vite dev server on localhost:5173

# Production build — run on Mac (NOT in Linux ARM64 sandbox)
cd app && npm run build     # Outputs to app/dist/

# Typecheck only (works in sandbox)
cd app && npx tsc --noEmit
```

> **Sandbox limitation**: Vite 8 uses rolldown, which requires a native binding not available on Linux ARM64. TypeScript compiles fine in the sandbox, but `npm run build` must run on the user's Mac. GitHub Actions (x86_64) handles the production build automatically on push to `main`.

## Architecture

```
obq/
├── index.html           # Portal — two cards: Kurshub (→ app/) + Kokebok (→ kokebok/)
├── app/                 # Vite + TypeScript SPA (the main quiz/course app)
│   └── src/
│       ├── main.ts          # Entry: loads state, merges question banks, calls renderApp()
│       ├── app.ts           # Shell, routing (Page = 'kurs'|'quiz'|'sets'), tab nav
│       ├── data/
│       │   ├── quiz.ts      # QuizQuestion interface + AWS CLF-C02 questions (25)
│       │   ├── istqb.ts     # ISTQB CTFL v4.0.1 questions (92, Practice 1-6)
│       │   ├── courses.ts   # Course metadata (Course interface, courses array)
│       │   ├── domain.ts    # Domain type (string), DOMAIN_META for tag colors/labels
│       │   └── quizset.ts   # QuizSet type for custom user quiz sets
│       ├── pages/
│       │   ├── courses.ts   # Kurs tab: course cards with progress badge, links + quiz
│       │   ├── quiz.ts      # Quiz setup, question render, answer, result + review screens
│       │   └── sets.ts      # Custom quiz sets CRUD + play
│       ├── state/
│       │   ├── app-state.ts # AppState, QuizResult (includes bank?), QuizSetProgress
│       │   └── storage.ts   # localStorage key: obq_state_v1 (schema v2)
│       └── styles/
│           └── main.css     # All app CSS; design tokens in :root
├── courses/             # Static HTML course overviews
│   ├── _template.html   # Template for new courses — copy this
│   ├── course.css       # Shared styles for all course overviews
│   ├── aws-clf/         # AWS CLF-C02 course overview
│   └── istqb/           # ISTQB CTFL course overview + exam.html
└── kokebok/             # mdBook source (separate repo: Bjoentegaard/aws-kokebok)
```

## Design System Tokens

```css
--bg: #0c0e14   --bg2: #13161f   --bg3: #1a1e2a   --bg4: #222636
--border: rgba(255,255,255,0.07)
--text: #e2e4ed   --text2: #7e849a   --text3: #454b60
--accent: #4f8ef7   --green: #3ecf8e
--amber: #f5a623   --red: #f76f6f
```

Fonts: IBM Plex Sans (body) + IBM Plex Mono (code/labels) via Google Fonts.

## Quiz Question Format

```ts
interface QuizQuestion {
    bank: string                    // e.g. 'aws', 'istqb' — open string, no union restriction
    domain: string                  // e.g. 'cloud', 'Practice 1'
    question: string
    options: [string, string, string, string]
    answer: 0 | 1 | 2 | 3          // index of correct option (A=0, B=1, C=2, D=3)
    explanation?: string
}
```

All questions from all banks are merged in `main.ts`:
```ts
const allQuestions = [...quizQuestions, ...istqbQuestions]
```

## Quiz Result Format

```ts
interface QuizResult {
    timestamp: number
    correct: number
    total: number
    percentage: number
    bank?: string   // which bank was quizzed — used for per-course progress on Kurs tab
}
```

## Key Features

- **Quiz review screen**: After completing a quiz, "Gå gjennom svar" shows all questions with correct/wrong highlighting and explanations.
- **Progress badge on course cards**: Kurs tab shows average score and last attempt date per course, pulled from `state.quizHistory` filtered by `bank`.
- **Dynamic domain options**: Quiz setup auto-generates domain filter options from available questions for the selected bank — no hardcoding needed for new banks.
- **Quiz history bank labels**: History items show the bank (e.g. "AWS", "ISTQB") they belong to.

## Adding a New Course

### 1. Add questions file

Create `app/src/data/<slug>.ts` with questions using the `QuizQuestion` interface. Set `bank` to a new string value (e.g. `'pmi'`).

### 2. Register the bank type in quiz.ts (AWS only hardcoded)

In `app/src/pages/quiz.ts`, add domain options for the new bank in `buildDomainOptions()`. For banks other than `'aws'`, domain options are **auto-generated** from available questions — no additional code needed.

In `app/src/data/domain.ts`, optionally add `DOMAIN_META` entries for the new domains (for tag colors/labels in quiz).

### 3. Register in courses.ts

Add an entry to `app/src/data/courses.ts`:
```ts
{
    id: 'pmi-pmp',
    title: 'PMI PMP',
    subtitle: 'Project Management Professional',
    icon: '📋',
    description: 'Short description in Norwegian.',
    tags: ['Project', 'Agile', 'Leadership'],
    color: '#f5a623',
    overviewUrl: '/courses/pmi-pmp/',
    quizBank: 'pmi',          // string — no type change needed
    questionCount: 30,
}
```

### 4. Import questions in main.ts

```ts
import { pmiQuestions } from './data/pmi'
const allQuestions = [...quizQuestions, ...istqbQuestions, ...pmiQuestions]
```

### 5. Add bank tab to quiz UI

In `app/src/pages/quiz.ts`, add a tab button for the new bank in `buildQuizSetup()`:
```ts
<button class="bank-tab" data-bank="pmi">📋 PMI PMP</button>
```

### 6. Create static course overview

Copy `courses/_template.html` to `courses/<slug>/index.html`. The template uses tab navigation via `show(id, btn)`, and components: `.card`, `.overview-grid`, `.grid-2`, `.inset`, `.flow`, `table`, `details`, `.click-grid`, `.info-block`, `.tip`. Link `../course.css` for shared styles.

## Deployment

GitHub Actions (`deploy.yml`) builds and deploys on push to `main`:
1. Builds Vite app (`app/dist/`)
2. Builds mdBook from `Bjoentegaard/aws-kokebok`
3. Assembles `dist/`: portal at root, app at `/app/`, kokebok at `/kokebok/`, courses at `/courses/`
4. Deploys to GitHub Pages

The old `deploy-pages.yml` is disabled (trigger changed to `workflow_dispatch`).

## Dead Code / Cleanup Notes

- `app/src/pages/dashboard.ts` — deleted (was the old Dash tab with flashcard progress; replaced by Kurs tab)
- `app/src/state/app-state.ts` — `getDomainProgress()` and related flashcard functions removed since flashcards are gone
- `app/src/data/quiz.ts` — `bank` field is now `string` (not `'aws' | 'istqb'` union) to avoid needing type changes for each new course
