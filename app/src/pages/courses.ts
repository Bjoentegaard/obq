import { courses } from '../data/courses'
import type { QuizResult } from '../state'

export function buildCoursesPage(
    onStartQuiz: (bank: string) => void,
    quizHistory: QuizResult[] = []
): { html: string; bind: () => void } {

    function getBankStats(bank: string): { avgScore: number | null; lastDate: string | null; attempts: number } {
        const results = quizHistory.filter(r => r.bank === bank)
        if (!results.length) return { avgScore: null, lastDate: null, attempts: 0 }
        const avg = Math.round(results.reduce((s, r) => s + r.percentage, 0) / results.length)
        const last = Math.max(...results.map(r => r.timestamp))
        const lastDate = new Date(last).toLocaleDateString('no-NO', { day: '2-digit', month: 'short' })
        return { avgScore: avg, lastDate, attempts: results.length }
    }

    function buildProgressBadge(bank: string): string {
        const { avgScore, lastDate, attempts } = getBankStats(bank)
        if (avgScore === null) return '<div class="cc-progress cc-progress-empty">Ikke startet</div>'
        const pass = avgScore >= 65
        return `<div class="cc-progress">
            <span class="cc-progress-score ${pass ? 'pass' : 'fail'}">${avgScore}%</span>
            <span class="cc-progress-meta">${attempts} forsøk · sist ${lastDate}</span>
        </div>`
    }

    const html = `
    <div class="page-inner">
      <p class="section-head">Kurs</p>
      <div class="course-grid">
        ${courses.map(c => `
          <div class="course-card" data-color="${c.color}">
            <div class="cc-top" style="background:${c.color}20;border-bottom:1px solid ${c.color}30">
              <span class="cc-icon">${c.icon}</span>
              <div>
                <div class="cc-title">${c.title}</div>
                <div class="cc-sub">${c.subtitle}</div>
              </div>
              <div class="cc-count">${c.questionCount} spørsmål</div>
            </div>
            <div class="cc-body">
              <p class="cc-desc">${c.description}</p>
              ${buildProgressBadge(c.quizBank)}
              <div class="cc-tags">
                ${c.tags.map(t => `<span class="cc-tag">${t}</span>`).join('')}
              </div>
              <div class="cc-actions">
                <a class="cc-btn-outline" href="${c.overviewUrl}">Gjennomgang →</a>
                <button class="cc-btn-quiz" data-bank="${c.quizBank}">Start quiz</button>
              </div>
            </div>
          </div>`).join('')}
      </div>

      <p class="section-head" style="margin-top:2rem">Legg til kurs</p>
      <div class="add-course-hint">
        Nye kurs legges til i <code>app/src/data/courses.ts</code> + en mappe under <code>courses/</code>.
      </div>
    </div>`

    function bind() {
        document.querySelectorAll<HTMLButtonElement>('.cc-btn-quiz').forEach(btn => {
            btn.onclick = () => {
                const bank = btn.dataset['bank'] as string
                onStartQuiz(bank)
            }
        })
    }

    return { html, bind }
}
