import {type QuizSet} from "../data/quizset.ts";
import {parseQuizSetFile} from "../importer.ts";
import {iconImport} from "../styles/icon.ts";
import {addQuizSet, type AppState, removeQuizSet} from "../state";

// ─── Controller ───────────────────────────────────────────────────────────────

export function createSetsController(
    initialState: AppState,
    onStateChange: (s: AppState) => void,
    navigate: (page: string) => void,
    onStartQuizFromSet: (set: QuizSet) => void
) {
    let state = initialState

    function update(newState: AppState): void {
        state = newState
        onStateChange(state)
    }

    function buildSetsPage(): string {
        const sets = state.quizSets

        const setCards = sets.length
            ? sets.map(s => {
                const history = state.quizSetHistory[s.id] ?? []
                const best = history.length ? Math.max(...history.map(r => r.percentage)) : null
                return `
          <div class="set-card">
            <div class="set-card-info">
              <div class="set-title">${s.title}</div>
              <div class="set-meta">
                ${s.questions.length} spørsmål
                ${best !== null ? `· Beste: <span class="${best >= 70 ? 'pass' : 'fail'}">${best}%</span>` : ''}
              </div>
              ${s.description ? `<div class="set-desc">${s.description}</div>` : ''}
            </div>
            <div class="set-card-actions">
              <button class="start-btn" data-set-id="${s.id}">Start quiz</button>
              <button class="remove-btn" data-remove-id="${s.id}">Slett</button>
            </div>
          </div>`
            }).join('')
            : '<p class="empty-state">Ingen quiz-sett importert ennå.</p>'

        return `
    <div class="page-inner">
      <p class="section-head">Importer quiz-sett</p>
      <label class="import-drop" id="import-drop">
        <input type="file" accept=".json" id="file-input" style="display:none">
        <div class="import-drop-inner">
          ${iconImport()}
          <span>Slipp en .json-fil her, eller klikk for å velge</span>
          <span class="import-hint">Format: { id, title, questions: [{ question, options, answer }] }</span>
        </div>
      </label>
      <div id="import-feedback"></div>

      <p class="section-head" style="margin-top:1.75rem">Lagrede sett</p>
      <div class="sets-list">${setCards}</div>
    </div>`
    }

    function bindEvents(): void {
        const fileInput = document.getElementById('file-input') as HTMLInputElement
        const drop = document.getElementById('import-drop')!
        const feedback = document.getElementById('import-feedback')!

        drop.onclick = () => fileInput.click()
        drop.ondragover = (e) => { e.preventDefault(); drop.classList.add('dragover') }
        drop.ondragleave = () => drop.classList.remove('dragover')
        drop.ondrop = (e) => {
            e.preventDefault()
            drop.classList.remove('dragover')
            const file = e.dataTransfer?.files[0]
            if (file) handleImport(file, feedback)
        }
        fileInput.onchange = () => {
            const file = fileInput.files?.[0]
            if (file) handleImport(file, feedback)
        }

        document.querySelectorAll<HTMLButtonElement>('[data-set-id]').forEach(btn => {
            btn.onclick = () => {
                const set = state.quizSets.find(s => s.id === btn.dataset['setId']!)
                if (set) onStartQuizFromSet(set)
            }
        })

        document.querySelectorAll<HTMLButtonElement>('[data-remove-id]').forEach(btn => {
            btn.onclick = () => {
                const id = btn.dataset['removeId']!
                if (confirm(`Slette "${state.quizSets.find(s => s.id === id)?.title}"?`)) {
                    update(removeQuizSet(state, id))
                    navigate('sets')
                }
            }
        })
    }

    async function handleImport(file: File, feedbackEl: HTMLElement): Promise<void> {
        try {
            const set = await parseQuizSetFile(file)
            update(addQuizSet(state, set))
            feedbackEl.innerHTML = `<p class="import-success">✓ "${set.title}" importert med ${set.questions.length} spørsmål</p>`
            navigate('sets')
        } catch (err) {
            feedbackEl.innerHTML = `<p class="import-error">✗ ${(err as Error).message}</p>`
        }
    }

    return {
        buildSetsPage,
        bindEvents,
        syncState: (s: AppState) => { state = s }
    }
}
