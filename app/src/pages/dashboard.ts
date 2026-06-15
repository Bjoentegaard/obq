import {flashcards} from "../data/flashcards.ts";
import { DOMAIN_META } from '../data/domain.ts'
import {type AppState, getDomainProgress, getKnownCount, getUnknownCount} from "../state";

export function buildDash(state: AppState): string {
    const known = getKnownCount(state)
    const unsure = getUnknownCount(state)
    const qh = state.quizHistory
    const best = qh.length ? Math.max(...qh.map(r => r.percentage)) : null

    const awsDomains = ['cloud', 'security', 'tech', 'billing']
    const domainBars = awsDomains.map(d => {
        const pct = getDomainProgress(state, flashcards, d as 'cloud' | 'security' | 'tech' | 'billing')
        const m = DOMAIN_META[d]
        return `
        <div class="domain-row">
          <span class="domain-name">${m.label}</span>
          <div class="bar-track">
            <div class="bar-fill" style="width:${pct}%;background:${m.color}"></div>
          </div>
          <span class="domain-pct">${pct}%</span>
        </div>`
    }).join('')

    const historyRows = qh.length
        ? [...qh].reverse().slice(0, 8).map(r => {
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
        }).join('')
        : '<p class="empty-state">Ingen quiz fullført ennå.</p>'

    return `
      <div class="page-inner">
        <p class="section-head">Din fremgang</p>
        <div class="dash-grid">
          <div class="stat-card"><div class="stat-label">Lærte kort</div><div class="stat-val green">${known}</div></div>
          <div class="stat-card"><div class="stat-label">Usikre kort</div><div class="stat-val red">${unsure}</div></div>
          <div class="stat-card"><div class="stat-label">Quiz tatt</div><div class="stat-val">${qh.length}</div></div>
          <div class="stat-card"><div class="stat-label">Beste quiz</div><div class="stat-val amber">${best !== null ? best + '%' : '—'}</div></div>
        </div>
        <p class="section-head">Fremgang per domene</p>
        <div class="domain-progress">${domainBars}</div>
        <p class="section-head">Quiz-historikk</p>
        <div class="history-list">${historyRows}</div>
      </div>`
}