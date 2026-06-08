import type {Flashcard} from "./data/flashcards.ts";
import type {QuizSet} from "./data/quizset.ts";

export interface QuizResult {
    timestamp: number
    correct: number
    total: number
    percentage: number
}

export interface QuizSetProgress {
    correct: number
    total: number
    percentage: number
    timestamp: number
}

export interface AppState {
    scores: Record<string, boolean>
    quizHistory: QuizResult[]
    quizSets: QuizSet[]
    quizSetHistory: Record<string, QuizSetProgress[]>
}

const STORAGE_KEY = 'obq_state_v1'

function defaultState(): AppState {
    return {scores: {}, quizHistory: [], quizSets: [], quizSetHistory: {}}
}

export function loadState(): AppState {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? (JSON.parse(raw) as AppState) : defaultState()
    } catch {
        return defaultState()
    }
}

export function saveState(state: AppState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function getKnownCount(state: AppState): number {
    return Object.values(state.scores).filter(v => v === true).length
}

export function getUnknownCount(state: AppState): number {
    return Object.values(state.scores).filter(v => v === false).length
}

export function getDomainProgress(state: AppState, cards: Flashcard[], domain: Flashcard['domain']): number {
    const domainCards = cards.filter(card => card.domain === domain)
    const known = domainCards.filter(c => state.scores[c.question] === true).length
    return domainCards.length > 0 ? Math.round((known / domainCards.length) * 100) : 0
}

export function addQuizSet(state: AppState, set: QuizSet): AppState {
    const filtered = state.quizSets.filter(s => s.id !== set.id)
    return {...state, quizSets: [...filtered, set]}
}

export function removeQuizSet(state: AppState, id: string): AppState {
    const quizSets = state.quizSets.filter(s => s.id !== id)
    const quizSetHistory = {...state.quizSetHistory}
    delete quizSetHistory[id]
    return {...state, quizSets, quizSetHistory}
}

export function recordQuizSetResult(
    state: AppState,
    id: string,
    result: QuizSetProgress
): AppState {
    const existing = state.quizSetHistory[id] ?? []
    return {
        ...state,
        quizSetHistory: {
            ...state.quizSetHistory,
            [id]: [...existing, result],
        },
    }
}