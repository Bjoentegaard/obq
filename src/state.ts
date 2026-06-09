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
const STATE_SCHEMA_VERSION = 2

export interface StorageAdapter {
    load: () => unknown
    save: (payload: unknown) => void
    clear?: () => void
}

interface PersistedStateV2 {
    schemaVersion: 2
    data: AppState
}

let storageAdapter: StorageAdapter = {
    load: () => {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? JSON.parse(raw) : null
    },
    save: (payload: unknown) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
    },
    clear: () => {
        localStorage.removeItem(STORAGE_KEY)
    },
}

function defaultState(): AppState {
    return {scores: {}, quizHistory: [], quizSets: [], quizSetHistory: {}}
}

export function setStorageAdapter(adapter: StorageAdapter): void {
    storageAdapter = adapter
}

export function loadState(): AppState {
    try {
        const raw = storageAdapter.load()
        const migrated = migratePersistedState(raw)
        return migrated ?? defaultState()
    } catch {
        return defaultState()
    }
}

export function saveState(state: AppState) {
    const payload: PersistedStateV2 = {
        schemaVersion: STATE_SCHEMA_VERSION as 2,
        data: state,
    }
    storageAdapter.save(payload)
}

export function clearState(): void {
    storageAdapter.clear?.()
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

function migratePersistedState(raw: unknown): AppState | null {
    if (!raw || typeof raw !== 'object') return null

    const obj = raw as Record<string, unknown>

    // Current format
    if (obj['schemaVersion'] === 2 && typeof obj['data'] === 'object' && obj['data'] !== null) {
        return sanitizeAppState(obj['data'] as Record<string, unknown>)
    }

    // Legacy format (pre-versioned): AppState stored directly
    return sanitizeAppState(obj)
}

function sanitizeAppState(raw: Record<string, unknown>): AppState {
    const scores = (raw['scores'] ?? {}) as Record<string, boolean>
    const quizHistory = (raw['quizHistory'] ?? []) as QuizResult[]
    const quizSets = (raw['quizSets'] ?? []) as QuizSet[]
    const quizSetHistory = (raw['quizSetHistory'] ?? {}) as Record<string, QuizSetProgress[]>

    return {scores, quizHistory, quizSets, quizSetHistory}
}
