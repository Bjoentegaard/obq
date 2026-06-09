# OBQ

OBQ is a lightweight study app made for AWS Cloud Practitioner (CLF-C02), built with TypeScript and Vite.
The app runs fully in the browser and stores progress locally.

## Features

- Flashcards with domain-based filtering
- Quiz mode with score tracking and history
- Dashboard with domain progress
- Import custom quiz sets from JSON files
- Progress stored in `localStorage`

## Tech Stack

- TypeScript
- Vite
- Vanilla HTML/CSS/TS (no frontend framework)

## Getting Started

Requirements:
- Node.js 22+ (same version used in the deploy workflow)

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Quiz Set Import

Import from the **Quiz Sets** tab in the app.

The file must be a JSON object with the fields `id`, `title`, and `questions`.
Each question must have 4 options (`options`) and the correct answer as an index (`answer`: `0-3`).

Example:

```json
{
  "id": "aws-clf-c02",
  "title": "AWS Cloud Practitioner",
  "description": "CLF-C02 eksamensforberedelse",
  "questions": [
    {
      "question": "Hvilken tjeneste logger alle API-kall i AWS?",
      "options": ["CloudWatch", "CloudTrail", "GuardDuty", "Config"],
      "answer": 1,
      "explanation": "CloudTrail logs all API calls with who, what, when, and where.",
      "domain": "security"
    }
  ]
}
```

## Deploy

The project includes a GitHub Actions workflow for automatic deployment to GitHub Pages on push to `main`.

## Roadmap

- [x] Flashcards
- [x] Quiz
- [x] Dashboard
- [x] JSON import
  - [ ] More descriptive examples
- [ ] Move away from `localStorage`
