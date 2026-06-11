import {iconCheck, iconLeft, iconRight, iconShuffle, iconX} from "../styles/icon.ts";
import {type Domain, DOMAIN_META} from "../data/domain.ts";
import {type Flashcard} from "../data/flashcards.ts";
import type {AppState} from "../state";

export function createFlashcardController(
    initialState: AppState,
    flashcards: Flashcard[],
    onStateChange: (s: AppState) => void
) {
    let state = initialState
    let fcDeck = [...flashcards]
    let fcIndex = 0
    let fcFlipped = false
    let fcFilter: Domain | 'all' | 'wrong' = 'all'

    function update(newState: AppState) {
        state = newState;
        onStateChange(state)
    }

    function updateProgress(): void {
        const known = Object.values(state.scores).filter(v => v === true).length
        const unsure = Object.values(state.scores).filter(v => v === false).length
        const pct = Math.round((known / flashcards.length) * 100)
        document.getElementById('fc-score-know')!.textContent = `Kan: ${known}`
        document.getElementById('fc-score-unsure')!.textContent = `Usikker: ${unsure}`
        document.getElementById('fc-score-pct')!.textContent = pct > 0 ? `${pct}% av alle` : ''
        document.getElementById('fc-progress-bar')!.style.width = `${pct}%`
    }

    function renderCard() {
        const card = fcDeck[fcIndex]
        if (!card) return

        fcFlipped = false
        const cardEl = document.getElementById('fc-card')!
        cardEl.classList.remove('flipped')

        document.getElementById('fc-side')!.textContent = 'Spørsmål — klikk for å snu'
        document.getElementById('fc-text')!.textContent = card.question
        document.getElementById('fc-text')!.className = 'fc-q'

        const m = DOMAIN_META[card.domain]
        const domainEl = document.getElementById('fc-domain')!
        domainEl.textContent = m.label
        domainEl.className = `domain-pill ${m.cls}`

        document.getElementById('fc-counter')!.textContent = `${fcIndex + 1} / ${fcDeck.length}`
        document.getElementById('fc-btn-know')!.style.display = 'none'
        document.getElementById('fc-btn-unsure')!.style.display = 'none'

        const s = state.scores[card.question]
        const statusEl = document.getElementById('fc-status')!
        statusEl.className = 'card-status' + (s === true ? ' know' : s === false ? ' unsure' : '')

        ;(document.getElementById('fc-btn-prev') as HTMLButtonElement).disabled = fcIndex === 0
        ;(document.getElementById('fc-btn-next') as HTMLButtonElement).disabled = fcIndex === fcDeck.length - 1

        updateProgress()
    }

    function flipCard(): void {
        if (!fcDeck.length) return
        fcFlipped = !fcFlipped
        const card = fcDeck[fcIndex]
        document.getElementById('fc-card')!.classList.toggle('flipped', fcFlipped)

        if (fcFlipped) {
            document.getElementById('fc-side')!.textContent = 'Svar'
            document.getElementById('fc-text')!.textContent = card.answer
            document.getElementById('fc-text')!.className = 'fc-a'
            document.getElementById('fc-btn-know')!.style.display = 'inline-flex'
            document.getElementById('fc-btn-unsure')!.style.display = 'inline-flex'
        } else {
            document.getElementById('fc-side')!.textContent = 'Spørsmål — klikk for å snu'
            document.getElementById('fc-text')!.textContent = card.question
            document.getElementById('fc-text')!.className = 'fc-q'
            document.getElementById('fc-btn-know')!.style.display = 'none'
            document.getElementById('fc-btn-unsure')!.style.display = 'none'
        }
    }

    function markCard(known: boolean): void {
        const card = fcDeck[fcIndex]
        update({...state, scores: {...state.scores, [card.question]: known}})

        const wrongCount = flashcards.filter(c => state.scores[c.question] === false).length
        const wb = document.getElementById('wrong-btn')!
        wb.style.display = wrongCount > 0 ? 'inline-block' : 'none'
        wb.textContent = `Øv på feil (${wrongCount})`

        if (fcIndex < fcDeck.length - 1) {
            fcIndex++
            renderCard()
        } else {
            updateProgress()
        }
    }

    function setFilter(filter: typeof fcFilter): void {
        fcFilter = filter
        if (filter === 'all') fcDeck = [...flashcards]
        else if (filter === 'wrong') fcDeck = flashcards.filter(c => state.scores[c.question] === false)
        else fcDeck = flashcards.filter(c => c.domain === filter)
        fcIndex = 0
        renderCard()
    }

    function prev(): void {
        fcIndex = Math.max(0, fcIndex - 1)
        renderCard()
    }

    function next(): void {
        fcIndex = Math.min(fcDeck.length - 1, fcIndex + 1)
        renderCard()
    }

    function shuffle(): void {
        for (let i = fcDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [fcDeck[i], fcDeck[j]] = [fcDeck[j], fcDeck[i]]
        }
        fcIndex = 0
        renderCard()
    }

    return {
        renderCard, flipCard, markCard, setFilter, prev, next, shuffle,
        syncState: (s: AppState) => { state = s }
    }
}


export function buildFlashcards(): string {
    return `
      <div class="page-inner">
        <div class="filters">
          <button class="fc-filter active" data-filter="all">Alle</button>
          <button class="fc-filter" data-filter="cloud">Cloud Concepts</button>
          <button class="fc-filter" data-filter="security">Security</button>
          <button class="fc-filter" data-filter="tech">Technology</button>
          <button class="fc-filter" data-filter="billing">Billing</button>
          <button class="fc-filter" id="wrong-btn" data-filter="wrong" style="display:none">Øv på feil</button>
          <span id="fc-counter"></span>
        </div>
        <div class="card-wrap">
          <div class="fc-card" id="fc-card" tabindex="0" role="button">
            <div class="card-status" id="fc-status"></div>
            <div class="fc-side" id="fc-side">Spørsmål — klikk for å snu</div>
            <div id="fc-text" class="fc-q"></div>
            <span class="domain-pill" id="fc-domain"></span>
          </div>
        </div>
        <div class="result-row">
          <button class="result-btn btn-unsure" id="fc-btn-unsure" style="display:none">
            ${iconX()} Husket ikke
          </button>
          <button class="result-btn btn-know" id="fc-btn-know" style="display:none">
            ${iconCheck()} Kan det
          </button>
        </div>
        <div class="nav-row">
          <button class="nav-btn" id="fc-btn-prev">
            ${iconLeft()} Forrige
          </button>
          <div class="nav-center">
            <button class="nav-btn" id="fc-btn-shuffle">${iconShuffle()} Stokk</button>
            <button class="nav-btn" id="fc-btn-reset-filter">Nullstill filter</button>
          </div>
          <button class="nav-btn" id="fc-btn-next">Neste ${iconRight()}</button>
        </div>
        <div class="progress-wrap"><div id="fc-progress-bar"></div></div>
        <div class="score-row">
          <span id="fc-score-know">Kan: 0</span>
          <span id="fc-score-pct"></span>
          <span id="fc-score-unsure">Usikker: 0</span>
        </div>
        <p class="hint">
          <kbd>Space</kbd> snu &nbsp;·&nbsp;
          <kbd>←</kbd><kbd>→</kbd> naviger &nbsp;·&nbsp;
          <kbd>1</kbd> kan det &nbsp;·&nbsp;
          <kbd>2</kbd> husket ikke
        </p>
      </div>`
}


