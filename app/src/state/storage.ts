import type {AppState, QuizResult, QuizSetProgress} from './app-state'
import {defaultState} from './app-state'
import type {QuizSet} from '../data/quizset'

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

export function saveState(state: AppState): void {
    const payload: PersistedStateV2 = {
        schemaVersion: STATE_SCHEMA_VERSION as 2,
        data: state,
    }
    storageAdapter.save(payload)
}

export function clearState(): void {
    storageAdapter.clear?.()
}

function migratePersistedState(raw: unknown): AppState | null {
    if (!raw || typeof raw !== 'object') return null
    const obj = raw as Record<string, unknown>

    if (obj['schemaVersion'] === 2 && typeof obj['data'] === 'object' && obj['data'] !== null) {
        return sanitizeAppState(obj['data'] as Record<string, unknown>)
    }

    return sanitizeAppState(obj)
}

function sanitizeAppState(raw: Record<string, unknown>): AppState {
    const quizHistory = (raw['quizHistory'] ?? []) as QuizResult[]
    const quizSets = (raw['quizSets'] ?? []) as QuizSet[]
    const quizSetHistory = (raw['quizSetHistory'] ?? {}) as Record<string, QuizSetProgress[]>
    const wrongQuestionKeys = (raw['wrongQuestionKeys'] ?? []) as string[]
    return {quizHistory, quizSets, quizSetHistory, wrongQuestionKeys}
}