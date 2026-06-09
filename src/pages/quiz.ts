
import {type Domain, DOMAIN_META} from "../data/domain.ts";
import {type QuizQuestion} from "../data/quiz.ts";
import {type QuizSet} from "../data/quizset.ts";
import {type AppState, type QuizResult, type QuizSetProgress, recordQuizSetResult} from "../state";

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
    quizQuestions: QuizQuestion[],
    onStateChange: (s: AppState) => void,
    navigate: (page: string) => void
) {
    let state = initialState
    let quizSession: QuizSession | null = null

    function update(newState: AppState): void {
        state = newState
        onStateChange(state)
    }

    function buildQuizSetup(): string {
        const history = buildHistoryHTML(state.quizHistory)
        return `
      <div class="page-inner" id="quiz-setup">
        <p class="section-head">Konfigurer quiz</p>
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
            const pass = r.percentage >= 70
            const date = new Date(r.timestamp).toLocaleDateString('no-NO', {day: '2-digit', month: 'short'})
            return `
        <div class="history-item">
          <span class="h-score ${pass ? 'pass' : 'fail'}">${r.percentage}%</span>
          <div class="h-bar">
            <div class="h-bar-fill ${pass ? 'h-fill-pass' : 'h-fill-fail'}" style="width:${r.percentage}%"></div>
          </div>
          <span style="font-size:12px;color:var(--text3)">${r.correct}/${r.total}</span>
          <span class="h-date">${date}</span>
        </div>`
        }).join('') + '</div>'
    }

    function startQuiz(): void {
        const domain = (document.getElementById('q-domain') as HTMLSelectElement).value as Domain | 'all'
        const count = parseInt((document.getElementById('q-count') as HTMLSelectElement).value)

        let pool = domain === 'all' ? [...quizQuestions] : quizQuestions.filter(q => q.domain === domain)
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]]
        }
        pool = pool.slice(0, Math.min(count, pool.length))

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

    function renderQuizQuestion(): void {
        if (!quizSession) return
        const {questions, index} = quizSession
        const q = questions[index]
        const pct = Math.round((index / questions.length) * 100)
        const m = DOMAIN_META[q.domain as Domain]

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
          <div class="q-domain-tag ${m?.cls ?? ''}">${m?.label ?? ''}</div>
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

    function finishQuiz(): void {
        if (!quizSession) return
        const {correct, questions, setId} = quizSession
        const total = questions.length
        const percentage = Math.round((correct / total) * 100)
        const pass = percentage >= 70

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
          <div class="result-label">${pass ? `Bestått · ${correct} av ${total} riktige` : 'Ikke bestått · Grense er 70%'}</div>
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

    return {
        buildQuizSetup,
        startQuiz,
        startQuizFromSet,
        syncState: (s: AppState) => { state = s }
    }
}
