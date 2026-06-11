import {type AppState} from './state'
import type {Flashcard} from './data/flashcards'
import type {QuizQuestion} from './data/quiz'
import {iconCard, iconGrid, iconImport, iconQuestion} from "./styles/icon.ts";
import {buildDash} from "./pages/dashboard.ts";
import {buildFlashcards, createFlashcardController} from "./pages/flashcards.ts";
import {createQuizController} from "./pages/quiz.ts";
import {createSetsController} from "./pages/sets.ts";
import {buildConcepts, bindConceptsEvents} from "./pages/concepts.ts";

// ─── Types ───────────────────────────────────────────────────────────────────

type Page = 'dash' | 'fc' | 'quiz' | 'sets' | 'concepts'

interface AppOptions {
    mountEl: HTMLElement
    state: AppState
    flashcards: Flashcard[]
    quizQuestions: QuizQuestion[]
    onStateChange: (state: AppState) => void
}

// ─── Main render ──────────────────────────────────────────────────────────────

export function renderApp(opts: AppOptions): void {
    const {mountEl, flashcards, quizQuestions} = opts
    let {state} = opts
    let currentPage: Page = 'dash'

    // navigate is hoisted (function declaration), safe to pass before definition
    const fc = createFlashcardController(state, flashcards, onControllerStateChange)
    const quiz = createQuizController(state, quizQuestions, onControllerStateChange, navigate)
    const sets = createSetsController(state, onControllerStateChange, navigate, (set) => quiz.startQuizFromSet(set))

    function onControllerStateChange(newState: AppState): void {
        state = newState
        opts.onStateChange(state)
    }

    function update(newState: AppState): void {
        state = newState
        opts.onStateChange(state)
        fc.syncState(state)
        quiz.syncState(state)
        sets.syncState(state)
    }

    function navigate(page: string): void {
        currentPage = page as Page
        renderPage()
    }

    mountEl.innerHTML = buildShell()
    bindKeyboard()
    navigate('dash')

    // ─── Shell ───────────────────────────────────────────────────────────────────

    function buildShell(): string {
        return `
      <nav class="topbar">
        <span class="brand">OBQ <span>CLF-C02</span></span>
        <div class="tabs">
          <button class="tab-btn" data-page="dash">
            ${iconGrid()} Oversikt
          </button>
          <button class="tab-btn" data-page="fc">
            ${iconCard()} Flashcards
          </button>
          <button class="tab-btn" data-page="quiz">
            ${iconQuestion()} Quiz
          </button>
          <button class="tab-btn" data-page="sets">
            ${iconImport()} Quiz-sett
          </button>
          <button class="tab-btn" data-page="concepts">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            Konsepter
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
        else if (currentPage === 'fc') { main.innerHTML = buildFlashcards(); fc.renderCard() }
        else if (currentPage === 'quiz') main.innerHTML = quiz.buildQuizSetup()
        else if (currentPage === 'sets') { main.innerHTML = sets.buildSetsPage(); sets.bindEvents() }
        else if (currentPage === 'concepts') { main.innerHTML = buildConcepts(); bindConceptsEvents() }

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

        if (currentPage === 'fc') {
            document.getElementById('fc-card')!.onclick = () => fc.flipCard()
            document.getElementById('fc-btn-prev')!.onclick = () => fc.prev()
            document.getElementById('fc-btn-next')!.onclick = () => fc.next()
            document.getElementById('fc-btn-know')!.onclick = () => fc.markCard(true)
            document.getElementById('fc-btn-unsure')!.onclick = () => fc.markCard(false)
            document.getElementById('fc-btn-shuffle')!.onclick = () => fc.shuffle()
            document.getElementById('fc-btn-reset-filter')!.onclick = () => fc.setFilter('all')
            document.querySelectorAll<HTMLButtonElement>('.fc-filter').forEach(btn => {
                btn.onclick = () => {
                    document.querySelectorAll('.fc-filter').forEach(b => b.classList.remove('active'))
                    btn.classList.add('active')
                    fc.setFilter(btn.dataset['filter'] as any)
                }
            })
        }

        if (currentPage === 'quiz') {
            document.getElementById('btn-start-quiz')?.addEventListener('click', () => quiz.startQuiz())
        }
    }

    function bindKeyboard(): void {
        document.addEventListener('keydown', (e: KeyboardEvent) => {
            if (currentPage !== 'fc') return
            if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); fc.flipCard() }
            else if (e.key === 'ArrowRight') fc.next()
            else if (e.key === 'ArrowLeft') fc.prev()
            else if (e.key === '1') fc.markCard(true)
            else if (e.key === '2') fc.markCard(false)
        })
    }
}
