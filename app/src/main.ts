import './styles/main.css'
import { loadState, saveState } from './state'
import { quizQuestions } from './data/quiz'
import { istqbQuestions } from './data/istqb'
import { renderApp } from './app'

const state = loadState()
const allQuestions = [...quizQuestions, ...istqbQuestions]

renderApp({
    mountEl: document.getElementById('app')!,
    state,
    quizQuestions: allQuestions,
    onStateChange: (newState) => saveState(newState),
})
