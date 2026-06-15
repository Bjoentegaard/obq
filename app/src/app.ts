import type {AppState} from './state'
import type {QuizQuestion} from './data/quiz'
import {iconImport, iconQuestion} from "./styles/icon.ts";
import {createQuizController} from "./pages/quiz.ts";
import {createSetsController} from "./pages/sets.ts";

// ─── Types ───────────────────────────────────────────────────────────────────

type Page = 'quiz' | 'sets'

interface AppOptions {
    mountEl: HTMLElement
    state: AppState
    allQuestions: QuizQuestion[]
    onStateChange: (state: AppState) => void
}

// ─── Main render ──────────────────────────────────────────────────────────────

export function renderApp(opts: AppOptions): void {
    const {mountEl, allQuestions} = opts
    let {state} = opts
    let currentPage: Page = 'quiz'

    const quiz = createQuizController(state, allQuestions, onControllerStateChange, navigate)
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

    function navigate(page: string, params?: { bank?: string }): void {
        currentPage = page as Page
        renderPage(params)
    }

    mountEl.innerHTML = buildShell()
    navigate('quiz')

    // ─── Shell ───────────────────────────────────────────────────────────────────

    function buildShell(): string {
        return `
      <nav class="topbar">
        <a href="../" class="topbar-back">← OBQ</a>
        <div class="tabs">
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

    function renderPage(params?: { bank?: string }): void {
        mountEl.querySelectorAll<HTMLButtonElement>('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset['page'] === currentPage)
        })

        const main = mountEl.querySelector<HTMLElement>('#main-content')!

        if (currentPage === 'quiz') {
            main.innerHTML = quiz.buildQuizSetup(params?.bank)
            quiz.bindBankTabs(params?.bank)
        } else if (currentPage === 'sets') {
            main.innerHTML = sets.buildSetsPage()
            sets.bindEvents()
        }

        bindShellEvents()
    }

    // ─── Event binding ────────────────────────────────────────────────────────────

    function bindShellEvents(): void {
        document.getElementById('btn-reset')?.addEventListener('click', () => {
            if (confirm('Nullstille ALL fremgang? Dette kan ikke angres.')) {
                update({quizHistory: [], quizSets: [], quizSetHistory: {}})
                navigate('quiz')
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
