import type {QuizSet} from '../data/quizset'

export interface QuizResult {
    timestamp: number
    correct: number
    total: number
    percentage: number
    bank?: string
    mode?: 'wrong'    // set when the quiz was a retry-wrong-questions session
}

export interface QuizSetProgress {
    correct: number
    total: number
    percentage: number
    timestamp: number
}

export interface AppState {
    quizHistory: QuizResult[]
    quizSets: QuizSet[]
    quizSetHistory: Record<string, QuizSetProgress[]>
    wrongQuestionKeys: string[]   // `${bank}::${question}` for each unanswered question
}

export function defaultState(): AppState {
    return {quizHistory: [], quizSets: [], quizSetHistory: {}, wrongQuestionKeys: []}
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

export function recordQuizSetResult(state: AppState, id: string, result: QuizSetProgress): AppState {
    const existing = state.quizSetHistory[id] ?? []
    return {
        ...state,
        quizSetHistory: {
            ...state.quizSetHistory,
            [id]: [...existing, result],
        },
    }
}
