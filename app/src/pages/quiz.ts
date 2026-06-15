import {type QuizQuestion} from '../data/quiz'
import {type QuizSet} from '../data/quizset'
import {DOMAIN_META} from '../data/domain.ts'
import {type AppState, type QuizResult, type QuizSetProgress, recordQuizSetResult} from '../state'

// ─── Types ────────────────────────────────────────────────────────────────────

interface QuizSession {
    questions: QuizQuestion[]
    index: number
    correct: number
    setId?: string
}

// ─── Controller ───────────────────────────────────────────────────────────────

export function createQuizController(
    initialState: AppState,
    allQuestions: QuizQuestion[],
    onStateChange: (s: AppState) => void,
    navigate: (page: string) => void
) {
    let state = initialState
    let quizSession: QuizSession | null = null

    function update(newState: AppState): void {
        state = newState
        onStateChange(state)
    }

    // ── Setup UI ─────────────────────────────────────────────────────────────

    function buildQuizSetup(): string {
        const history = buildHistoryHTML(state.quizHistory)
        return `
      <div class="page-inner" id="quiz-setup">
        <p class="section-head">Kursbank</p>
        <div class="bank-tabs">
          <button class="bank-tab active" data-bank="aws">☁️ AWS CLF-C02</button>
          <button class="bank-tab" data-bank="istqb">🔍 ISTQB CTFL</button>
        </div>

        <p class="section-head" style="margin-top:1.25rem">Filtrer</p>
        <div class="quiz-controls">
          <select class="quiz-select" id="q-domain">
            <option value="all">Alle domener</option>
            <option value="cloud">Cloud Concepts</option>
            <option value="security">Security &amp; Compliance</option>
            <option value="tech">Cloud Technology</option>
            <option value="billing">Billing &amp; Pricing</option>
          </select>
          <select class="quiz-select" id="q-count">
            <option value="10">10 spørsmål</option>
            <option value="20" selected>20 spørsmål</option>
            <option value="25">25 spørsmål</option>
            <option value="all">Alle</option>
          </select>
          <button class="start-btn" id="btn-start-quiz">Start quiz</button>
        </div>

        <p class="section-head">Tidligere resultater</p>
        ${history}
      </div>`
    }

    function buildHistoryHTML(qh: QuizResult[]): string {
        if (!qh.length) return '<p class="empty-state">Ingen quiz fullført ennå.</p>'
        return '<div class="history-list">' + [...qh].reverse().slice(0, 8).map(r => {
            const pass = r.percentage >= 65
            const date = new Date(r.timestamp).toLocaleDateString('no-NO', {day: '2-digit', month: 'short'})
            return `
        <div class="history-item">
          <span class="h-score ${pass ? 'pass' : 'fail'}">${r.percentage}%</span>
          <div class="h-bar"><div class="h-bar-fill ${pass ? 'h-fill-pass' : 'h-fill-fail'}" style="width:${r.percentage}%"></div></div>
          <span style="font-size:12px;color:var(--text3)">${r.correct}/${r.total}</span>
          <span class="h-date">${date}</span>
        </div>`
        }).join('') + '</div>'
    }

    // ── Start quiz ───────────────────────────────────────────────────────────

    function startQuiz(): void {
        const bankTab = document.querySelector<HTMLButtonElement>('.bank-tab.active')
        const bank = bankTab?.dataset['bank'] ?? 'aws'
        const domain = (document.getElementById('q-domain') as HTMLSelectElement).value
        const countVal = (document.getElementById('q-count') as HTMLSelectElement).value

        let pool = allQuestions.filter(q => q.bank === bank)
        if (domain !== 'all') pool = pool.filter(q => q.domain === domain)

        // Shuffle
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]]
        }

        const count = countVal === 'all' ? pool.length : Math.min(parseInt(countVal), pool.length)
        pool = pool.slice(0, count)

        quizSession = {questions: pool, index: 0, correct: 0}
        renderQuizQuestion()
    }

    function startQuizFromSet(set: QuizSet): void {
        let pool = [...set.questions]
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]]
        }
        quizSession = {questions: pool as QuizQuestion[], index: 0, correct: 0, setId: set.id}
        renderQuizQuestion()
    }

    // ── Render question ───────────────────────────────────────────────────────

    function renderQuizQuestion(): void {
        if (!quizSession) return
        const {questions, index} = quizSession
        const q = questions[index]
        const pct = Math.round((index / questions.length) * 100)
        const m = DOMAIN_META[q.domain]

        const main = document.getElementById('main-content')!
        main.innerHTML = `
      <div class="page-inner">
        <div class="quiz-header">
          <div class="quiz-meta">Spørsmål <span>${index + 1}</span> av <span>${questions.length}</span></div>
          <button class="quit-btn" id="btn-quit-quiz">Avslutt</button>
        </div>
        <div class="q-progress-wrap">
          <div class="q-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="question-card">
          <div class="q-domain-tag ${m?.cls ?? ''}" style="color:${m?.color ?? 'var(--accent)'}">
            ${m?.label ?? q.domain}
          </div>
          <div class="q-text">${q.question}</div>
          <div class="options">
            ${q.options.map((opt, i) => `
              <button class="option-btn" data-index="${i}">
                <span class="opt-letter">${'ABCD'[i]}</span>
                <span>${opt}</span>
              </button>`).join('')}
          </div>
          <div class="feedback-row" id="q-feedback"></div>
        </div>
        <button class="q-next-btn" id="btn-q-next" style="display:none">Neste spørsmål →</button>
      </div>`

        document.getElementById('btn-quit-quiz')!.onclick = () => navigate('quiz')
        document.getElementById('btn-q-next')!.onclick = () => advanceQuiz()
        document.querySelectorAll<HTMLButtonElement>('.option-btn').forEach(btn => {
            btn.onclick = () => answerQuiz(parseInt(btn.dataset['index']!))
        })
    }

    // ── Answer ────────────────────────────────────────────────────────────────

    function answerQuiz(chosen: number): void {
        if (!quizSession) return
        const q = quizSession.questions[quizSession.index]
        const correct = q.answer
        const isRight = chosen === correct

        if (isRight) quizSession.correct++

        document.querySelectorAll<HTMLButtonElement>('.option-btn').forEach((btn, i) => {
            btn.disabled = true
            if (i === correct) btn.classList.add('correct')
            else if (i === chosen && !isRight) btn.classList.add('wrong')
        })

        const fb = document.getElementById('q-feedback')!
        fb.textContent = q.explanation ?? ''
        fb.className = `feedback-row show ${isRight ? 'correct-fb' : 'wrong-fb'}`

        const nxt = document.getElementById('btn-q-next')!
        nxt.style.display = 'flex'
        nxt.textContent = quizSession.index < quizSession.questions.length - 1
            ? 'Neste spørsmål →'
            : 'Se resultat →'
    }

    function advanceQuiz(): void {
        if (!quizSession) return
        quizSession.index++
        if (quizSession.index >= quizSession.questions.length) finishQuiz()
        else renderQuizQuestion()
    }

    // ── Finish ────────────────────────────────────────────────────────────────

    function finishQuiz(): void {
        if (!quizSession) return
        const {correct, questions, setId} = quizSession
        const total = questions.length
        const percentage = Math.round((correct / total) * 100)
        const pass = percentage >= 65

        if (setId) {
            const progress: QuizSetProgress = {correct, total, percentage, timestamp: Date.now()}
            update(recordQuizSetResult(state, setId, progress))
        } else {
            const result: QuizResult = {timestamp: Date.now(), correct, total, percentage}
            update({...state, quizHistory: [...state.quizHistory, result]})
        }

        const main = document.getElementById('main-content')!
        main.innerHTML = `
      <div class="page-inner">
        <div class="result-hero">
          <div class="result-score-big ${pass ? 'pass' : 'fail'}">${percentage}%</div>
          <div class="result-label">${pass ? `Bestått · ${correct} av ${total} riktige` : `Ikke bestått · Grense er 65% (${Math.ceil(total * 0.65)}/${total})`}</div>
          <div class="result-stats">
            <div class="r-stat"><div class="r-stat-num">${correct}</div><div class="r-stat-lbl">Riktige</div></div>
            <div class="r-stat"><div class="r-stat-num">${total - correct}</div><div class="r-stat-lbl">Feil</div></div>
            <div class="r-stat"><div class="r-stat-num">${total}</div><div class="r-stat-lbl">Totalt</div></div>
          </div>
          <button class="retry-btn" id="btn-retry">↺ Ta quiz igjen</button>
        </div>
      </div>`

        document.getElementById('btn-retry')!.onclick = () => navigate('quiz')
    }

    // ── Bank tab event binding (called after render) ───────────────────────────

    function bindBankTabs(): void {
        const tabs = document.querySelectorAll<HTMLButtonElement>('.bank-tab')
        const domainSelect = document.getElementById('q-domain') as HTMLSelectElement | null
        if (!tabs.length || !domainSelect) return

        tabs.forEach(tab => {
            tab.onclick = () => {
                tabs.forEach(t => t.classList.remove('active'))
                tab.classList.add('active')
                const bank = tab.dataset['bank']

                // Swap filter options
                if (bank === 'aws') {
                    domainSelect.innerHTML = `
                      <option value="all">Alle domener</option>
                      <option value="cloud">Cloud Concepts</option>
                      <option value="security">Security &amp; Compliance</option>
                      <option value="tech">Cloud Technology</option>
                      <option value="billing">Billing &amp; Pricing</option>`
                } else {
                    domainSelect.innerHTML = `
                      <option value="all">Alle practice exams</option>
                      <option value="Practice 1">Practice 1</option>
                      <option value="Practice 2">Practice 2</option>
                      <option value="Practice 3">Practice 3</option>
                      <option value="Practice 4">Practice 4</option>
                      <option value="Practice 5">Practice 5</option>
                      <option value="Practice 6">Practice 6</option>`
                }
            }
        })
    }

    return {
        buildQuizSetup,
        startQuiz,
        startQuizFromSet,
        bindBankTabs,
        syncState: (s: AppState) => { state = s }
    }
}
