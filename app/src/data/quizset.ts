export interface QuizSet {
    id: string          // unik streng, f.eks. "aws-clf-c02"
    title: string       // vises i UI
    description?: string
    questions: QuizSetQuestion[]
}

export interface QuizSetQuestion {
    question: string
    options: [string, string, string, string]
    answer: 0 | 1 | 2 | 3
    explanation?: string
    domain?: string
    bank?: string
}

/* e.g.
{
  "id": "aws-clf-c02",
  "title": "AWS Cloud Practitioner",
  "description": "CLF-C02 eksamensforberedelse",
  "questions": [
    {
      "question": "Hvilken tjeneste logger alle API-kall i AWS?",
      "options": ["CloudWatch", "CloudTrail", "GuardDuty", "Config"],
      "answer": 1,
      "explanation": "CloudTrail logger alle API-kall med hvem, hva, når og hvor.",
      "domain": "security"
    }
  ]
}
 */