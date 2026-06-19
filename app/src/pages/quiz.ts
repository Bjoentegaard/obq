import {type QuizQuestion} from '../data/quiz'
import {type QuizSet} from '../data/quizset'
import {DOMAIN_META} from '../data/domain.ts'
import {type AppState, type QuizResult, type QuizSetProgress, recordQuizSetResult} from '../state'

// ─── Types ────────────────────────────────────────────────────────────────────

interface QuizSession {
    questions: QuizQuestion[]
    index: number
    correct: number
    chosen: number[]
    bank?: string
    domain?: string
    setId?: string
    wrongQuiz?: true
}

interface QuizResultSnapshot {
    correct: number
    total: number
    percentage: number
    pass: boolean
    questions: QuizQuestion[]
    chosen: number[]
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
    let lastResult: QuizResultSnapshot | null = null

    function update(newState: AppState): void {
        state = newState
        onStateChange(state)
    }

    // ── Setup UI ─────────────────────────────────────────────────────────────

    function buildQuizSetup(preselectedBank?: string): string {
        const bank = preselectedBank ?? 'aws'
        const history = buildHistoryHTML(state.quizHistory)
        const domainOptions = buildDomainOptions(bank)
        const wrongByBank: {bank: string; label: string; count: number}[] = [
            {bank: 'aws',   label: '☁️ AWS CLF-C02'},
            {bank: 'istqb', label: '🔍 ISTQB CTFL'},
        ].map(b => ({
            ...b,
            count: state.wrongQuestionKeys.filter(k => k.startsWith(`${b.bank}::`)).length,
        })).filter(b => b.count > 0)

        const wrongBtns = wrongByBank.length > 0
            ? `<div class="wrong-retry-group">${wrongByBank.map(b =>
                `<button class="wrong-retry-btn" data-wrong-bank="${b.bank}">📌 ${b.label} feil (${b.count})</button>`
              ).join('')}</div>`
            : ''

        return `
      <div class="page-inner" id="quiz-setup">
        ${wrongBtns}
        <p class="section-head">Kursbank</p>
        <div class="bank-tabs">
          <button class="bank-tab ${bank === 'aws' ? 'active' : ''}" data-bank="aws">☁️ AWS CLF-C02</button>
          <button class="bank-tab ${bank === 'istqb' ? 'active' : ''}" data-bank="istqb">🔍 ISTQB CTFL</button>
        </div>

        <p class="section-head" style="margin-top:1.25rem">Filtrer</p>
        <div class="quiz-controls">
          <select class="quiz-select" id="q-domain">${domainOptions}</select>
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

    function buildDomainOptions(bank: string): string {
        if (bank === 'aws') {
            return `<option value="all">Alle domener</option>
               <option value="cloud">Cloud Concepts</option>
               <option value="security">Security &amp; Compliance</option>
               <option value="tech">Cloud Technology</option>
               <option value="billing">Billing &amp; Pricing</option>`
        }
        const domains = [...new Set(allQuestions.filter(q => q.bank === bank).map(q => q.domain))]
        const allLabel = bank === 'istqb' ? 'Alle practice exams' : 'Alle domener'
        return `<option value="all">${allLabel}</option>` +
            domains.map(d => `<option value="${d}">${d}</option>`).join('')
    }

    function buildHistoryHTML(qh: QuizResult[]): string {
        if (!qh.length) return '<p class="empty-state">Ingen quiz fullført ennå.</p>'
        return '<div class="history-list">' + [...qh].reverse().slice(0, 10).map(r => {
            const pass = r.percentage >= 65
            const date = new Date(r.timestamp).toLocaleDateString('no-NO', {day: '2-digit', month: 'short'})
            const bankLabel = r.bank ? `<span class="h-bank">${r.bank.toUpperCase()}</span>` : ''
            const domainLabel = r.domain ? `<span class="h-domain">${r.domain}</span>` : ''
            const modeTag = r.mode === 'wrong' ? `<span class="h-mode-wrong">📌 Feil-quiz</span>` : ''
            return `
        <div class="history-item">
          <div class="h-meta">${bankLabel}${domainLabel}${modeTag}</div>
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

        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]]
        }

        const count = countVal === 'all' ? pool.length : Math.min(parseInt(countVal), pool.length)
        pool = pool.slice(0, count)

        const domainFilter = domain !== 'all' ? domain : undefined
        quizSession = {questions: pool, index: 0, correct: 0, chosen: [], bank, domain: domainFilter}
        lastResult = null
        renderQuizQuestion()
    }

    function startQuizFromSet(set: QuizSet): void {
        let pool = [...set.questions]
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]]
        }
        // Detect a common bank across all questions (if any)
        const banks = [...new Set(pool.map(q => q.bank).filter(Boolean))]
        const bank = banks.length === 1 ? banks[0] : undefined

        quizSession = {questions: pool as QuizQuestion[], index: 0, correct: 0, chosen: [], bank, setId: set.id}
        lastResult = null
        renderQuizQuestion()
    }

    function startWrongQuiz(filterBank: string): void {
        const wrongSet = new Set(state.wrongQuestionKeys)
        let pool = allQuestions.filter(q =>
            q.bank === filterBank && wrongSet.has(`${q.bank}::${q.question}`)
        )
        if (!pool.length) return
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]]
        }
        quizSession = {questions: pool, index: 0, correct: 0, chosen: [], bank: filterBank, wrongQuiz: true}
        lastResult = null
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
        quizSession.chosen.push(chosen)

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

    // ── Finish: save once, render freely ─────────────────────────────────────

    function finishQuiz(): void {
        if (!quizSession) return
        const {correct, questions, setId, bank, domain, chosen} = quizSession
        const total = questions.length
        const percentage = Math.round((correct / total) * 100)
        const pass = percentage >= 65

        // Save result exactly once
        if (!lastResult) {
            // Update wrong-question tracking
            const wrongSet = new Set(state.wrongQuestionKeys)
            questions.forEach((q, i) => {
                const key = `${q.bank ?? 'unknown'}::${q.question}`
                if (chosen[i] === q.answer) wrongSet.delete(key)
                else wrongSet.add(key)
            })
            const baseState = {...state, wrongQuestionKeys: [...wrongSet]}

            if (setId) {
                const progress: QuizSetProgress = {correct, total, percentage, timestamp: Date.now()}
                update(recordQuizSetResult(baseState, setId, progress))
            } else {
                const mode = quizSession?.wrongQuiz ? 'wrong' as const : undefined
                const result: QuizResult = {timestamp: Date.now(), correct, total, percentage, bank, domain, mode}
                update({...baseState, quizHistory: [...baseState.quizHistory, result]})
            }
            lastResult = {correct, total, percentage, pass, questions, chosen}
        }

        renderResult(lastResult)
    }

    function renderResult(r: QuizResultSnapshot): void {
        const main = document.getElementById('main-content')!
        main.innerHTML = `
      <div class="page-inner">
        <div class="result-hero">
          <div class="result-score-big ${r.pass ? 'pass' : 'fail'}">${r.percentage}%</div>
          <div class="result-label">${r.pass
            ? `Bestått · ${r.correct} av ${r.total} riktige`
            : `Ikke bestått · Grense er 65% (${Math.ceil(r.total * 0.65)}/${r.total})`}</div>
          <div class="result-stats">
            <div class="r-stat"><div class="r-stat-num">${r.correct}</div><div class="r-stat-lbl">Riktige</div></div>
            <div class="r-stat"><div class="r-stat-num">${r.total - r.correct}</div><div class="r-stat-lbl">Feil</div></div>
            <div class="r-stat"><div class="r-stat-num">${r.total}</div><div class="r-stat-lbl">Totalt</div></div>
          </div>
          <div class="result-actions">
            <button class="retry-btn" id="btn-retry">↺ Ta quiz igjen</button>
            <button class="review-btn" id="btn-review">📋 Gå gjennom svar</button>
            ${quizSession && state.wrongQuestionKeys.filter(k => k.startsWith(`${quizSession!.bank}::`)).length > 0
                ? `<button class="wrong-retry-btn" id="btn-result-wrong" data-wrong-bank="${quizSession!.bank}">📌 Ta feil-oppgavene (${state.wrongQuestionKeys.filter(k => k.startsWith(`${quizSession!.bank}::`)).length})</button>`
                : ''}
          </div>
        </div>
      </div>`

        document.getElementById('btn-retry')!.onclick = () => navigate('quiz')
        document.getElementById('btn-review')!.onclick = () => renderReview(r.questions, r.chosen)
        const resultWrongBtn = document.getElementById('btn-result-wrong') as HTMLButtonElement | null
        resultWrongBtn?.addEventListener('click', () => startWrongQuiz(resultWrongBtn.dataset['wrongBank']!))
    }

    // ── Review ────────────────────────────────────────────────────────────────

    function renderReview(questions: QuizQuestion[], chosen: number[]): void {
        const items = questions.map((q, i) => {
            const userAnswer = chosen[i] ?? -1
            const correct = q.answer
            const isRight = userAnswer === correct
            const m = DOMAIN_META[q.domain]

            const opts = q.options.map((opt, oi) => {
                let cls = 'review-opt'
                if (oi === correct) cls += ' review-correct'
                if (oi === userAnswer && !isRight) cls += ' review-wrong'
                const icon = oi === correct ? '✓' : oi === userAnswer && !isRight ? '✗' : ''
                return `<div class="${cls}">
                    <span class="opt-letter">${'ABCD'[oi]}</span>
                    <span>${opt}</span>
                    ${icon ? `<span class="review-icon">${icon}</span>` : ''}
                </div>`
            }).join('')

            return `
            <div class="review-item ${isRight ? 'review-item-pass' : 'review-item-fail'}">
              <div class="review-item-header">
                <span class="review-q-num">Spørsmål ${i + 1}</span>
                <span class="q-domain-tag ${m?.cls ?? ''}" style="color:${m?.color ?? 'var(--accent)'}">${m?.label ?? q.domain}</span>
                <span class="review-result-badge ${isRight ? 'pass' : 'fail'}">${isRight ? '✓ Riktig' : '✗ Feil'}</span>
              </div>
              <div class="review-q-text">${q.question}</div>
              <div class="review-opts">${opts}</div>
              ${q.explanation ? `<div class="review-explanation">${q.explanation}</div>` : ''}
            </div>`
        }).join('')

        const main = document.getElementById('main-content')!
        main.innerHTML = `
      <div class="page-inner">
        <div class="review-header">
          <button class="quit-btn" id="btn-back-result">← Tilbake til resultat</button>
          <h2 class="review-title">Svargjennomgang</h2>
        </div>
        <div class="review-list">${items}</div>
        <button class="retry-btn" style="margin-top:1.5rem" id="btn-retry-from-review">↺ Ta quiz igjen</button>
      </div>`

        document.getElementById('btn-back-result')!.onclick = () => lastResult && renderResult(lastResult)
        document.getElementById('btn-retry-from-review')!.onclick = () => navigate('quiz')
    }

    // ── Bank tab event binding ────────────────────────────────────────────────

    function bindBankTabs(_preselected?: string): void {
        const tabs = document.querySelectorAll<HTMLButtonElement>('.bank-tab')
        const domainSelect = document.getElementById('q-domain') as HTMLSelectElement | null
        if (!tabs.length || !domainSelect) return

        tabs.forEach(tab => {
            tab.onclick = () => {
                tabs.forEach(t => t.classList.remove('active'))
                tab.classList.add('active')
                const bank = tab.dataset['bank'] ?? 'aws'
                domainSelect.innerHTML = buildDomainOptions(bank)
            }
        })
    }

    return {
        buildQuizSetup,
        startQuiz,
        startQuizFromSet,
        startWrongQuiz,
        bindBankTabs,
        syncState: (s: AppState) => { state = s },
    }
}
