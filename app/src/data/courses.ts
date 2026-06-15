export interface Course {
    id: string
    title: string
    subtitle: string
    icon: string
    description: string
    tags: string[]
    color: string           // accent color for card top border
    overviewUrl: string     // link to static HTML course overview
    quizBank: string
    questionCount: number
}

export const courses: Course[] = [
    {
        id: 'aws-clf-c02',
        title: 'AWS CLF-C02',
        subtitle: 'Cloud Practitioner',
        icon: '☁️',
        description: 'Fundamentals of AWS cloud: arkitektur, sikkerhet, teknologi og prismodeller.',
        tags: ['Cloud', 'Security', 'Billing'],
        color: '#4f8ef7',
        overviewUrl: '/courses/aws-clf/',
        quizBank: 'aws',
        questionCount: 25,
    },
    {
        id: 'istqb-ctfl',
        title: 'ISTQB CTFL',
        subtitle: 'Foundation Level v4.0.1',
        icon: '🔍',
        description: 'Grunnleggende testing: prosesser, teknikker, statisk testing og testledelse.',
        tags: ['Testing', 'SDLC', 'Quality'],
        color: '#3ecf8e',
        overviewUrl: '/courses/istqb/',
        quizBank: 'istqb',
        questionCount: 92,
    },
]
