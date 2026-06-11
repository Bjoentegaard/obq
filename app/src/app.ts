import {type AppState} from './state'
import type {QuizQuestion} from './data/quiz'
import {iconGrid, iconImport, iconQuestion} from "./styles/icon.ts";
import {buildDash} from "./pages/dashboard.ts";
import {createQuizController} from "./pages/quiz.ts";
import {createSetsController} from "./pages/sets.ts";

// ─── Types ───────────────────────────────────────────────────────────────────

type Page = 'dash' | 'quiz' | 'sets'

interface AppOptions {
    mountEl: HTMLElement
    state: AppState
    quizQuestions: QuizQuestion[]
    onStateChange: (state: AppState) => void
}

// ─── Main render ──────────────────────────────────────────────────────────────

export function renderApp(opts: AppOptions): void {
    const {mountEl, quizQuestions} = opts
    let {state} = opts
    let currentPage: Page = 'dash'

    const quiz = createQuizController(state, quizQuestions, onControllerStateChange, navigate)
    const sets = createSetsController(state, onControllerStateChange, navigate, (set) => quiz.startQuizFromSet(set))

    function onControllerStateChange(newState: AppState): void {
        state = newState
        opts.onStateChange(state)
    }

    function update(newState: AppState): void {
        state = newState
        opts.onStateChange(state)
        quiz.syncState(state)
        sets.syncState(state)
    }

    function navigate(page: string): void {
        currentPage = page as Page
        renderPage()
    }

    mountEl.innerHTML = buildShell()
    navigate('dash')

    // ─── Shell ───────────────────────────────────────────────────────────────────

    function buildShell(): string {
        return `
      <nav class="topbar">
        <span class="brand">OBQ</span>
        <div class="tabs">
          <button class="tab-btn" data-page="dash">
            ${iconGrid()} Oversikt
          </button>
          <button class="tab-btn" data-page="quiz">
            ${iconQuestion()} Quiz
          </button>
          <button class="tab-btn" data-page="sets">
            ${iconImport()} Quiz-sett
          </button>
        </div>
        <button class="reset-all" id="btn-reset">Nullstill alt</button>
      </nav>
      <main id="main-content"></main>
    `
    }

    // ─── Routing ─────────────────────────────────────────────────────────────────

    function renderPage(): void {
        mountEl.querySelectorAll<HTMLButtonElement>('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset['page'] === currentPage)
        })

        const main = mountEl.querySelector<HTMLElement>('#main-content')!

        if (currentPage === 'dash') main.innerHTML = buildDash(state)
        else if (currentPage === 'quiz') main.innerHTML = quiz.buildQuizSetup()
        else if (currentPage === 'sets') { main.innerHTML = sets.buildSetsPage(); sets.bindEvents() }

        bindShellEvents()
    }

    // ─── Event binding ────────────────────────────────────────────────────────────

    function bindShellEvents(): void {
        document.getElementById('btn-reset')?.addEventListener('click', () => {
            if (confirm('Nullstille ALL fremgang? Dette kan ikke angres.')) {
                update({scores: {}, quizHistory: [], quizSets: [], quizSetHistory: {}})
                navigate('dash')
            }
        })

        mountEl.querySelectorAll<HTMLButtonElement>('.tab-btn').forEach(btn => {
            btn.onclick = () => navigate(btn.dataset['page'] as Page)
        })

        if (currentPage === 'quiz') {
            document.getElementById('btn-start-quiz')?.addEventListener('click', () => quiz.startQuiz())
        }
    }
}
