import './styles/main.css'
import { loadState, saveState } from './state'
import { allQuestions } from './data/questions'
import { renderApp } from './app'

const state = loadState()
renderApp({
    mountEl: document.getElementById('app')!,
    state,
    allQuestions,
    onStateChange: (newState) => saveState(newState),
})
