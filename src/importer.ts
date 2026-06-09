import type {QuizSet} from "./data/quizset.ts";

export class ImportError extends Error {
}

export function parseQuizSetFile(file: File): Promise<QuizSet> {
    return new Promise((resolve, reject) => {
        if (!file.name.endsWith(".json")) {
            reject(new ImportError("File must be a valid .json-file."))
            return
        }

        const reader = new FileReader()

        reader.onload = (e) => {
            try {
                const raw = JSON.parse(e.target!.result as string)
                const validated = validateQuizSet(raw)
                resolve(validated)
            } catch (err) {
                reject(err instanceof ImportError ? err : new ImportError("Unable to parse QuizSet."))
            }
        }

        reader.onerror = () => reject(new ImportError("Unable to parse QuizSet."))
        reader.readAsText(file)

    })

    function validateQuizSet(raw: unknown): QuizSet {
        if (typeof raw !== 'object' || raw === null)
            throw new ImportError('Filen er ikke et gyldig objekt')

        const obj = raw as Record<string, unknown>

        if (typeof obj['id'] !== 'string' || !obj['id'])
            throw new ImportError('Mangler felt: id (string)')

        if (typeof obj['title'] !== 'string' || !obj['title'])
            throw new ImportError('Mangler felt: title (string)')

        if (!Array.isArray(obj['questions']) || obj['questions'].length === 0)
            throw new ImportError('Mangler spørsmål (questions må være en ikke-tom array)')

        const questions = obj['questions'].map((q: unknown, i: number) => {
            if (typeof q !== 'object' || q === null)
                throw new ImportError(`Spørsmål ${i + 1}: ugyldig format`)

            const qobj = q as Record<string, unknown>

            if (typeof qobj['question'] !== 'string')
                throw new ImportError(`Spørsmål ${i + 1}: mangler felt "question"`)

            if (!Array.isArray(qobj['options']) || qobj['options'].length !== 4)
                throw new ImportError(`Spørsmål ${i + 1}: "options" må være en array med nøyaktig 4 elementer`)

            if (![0, 1, 2, 3].includes(qobj['answer'] as number))
                throw new ImportError(`Spørsmål ${i + 1}: "answer" må være 0, 1, 2 eller 3`)

            return {
                question: qobj['question'] as string,
                options: qobj['options'] as [string, string, string, string],
                answer: qobj['answer'] as 0 | 1 | 2 | 3,
                explanation: typeof qobj['explanation'] === 'string' ? qobj['explanation'] : undefined,
                domain: typeof qobj['domain'] === 'string' ? qobj['domain'] : undefined,
            }
        })

        return {
            id: obj['id'] as string,
            title: obj['title'] as string,
            description: typeof obj['description'] === 'string' ? obj['description'] : undefined,
            questions,
        }
    }
}