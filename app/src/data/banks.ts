// ─── Types ────────────────────────────────────────────────────────────────────

export interface QuizQuestion {
    id: number           // unique per bank — use for wrongQuestionKeys instead of question text
    bank: string
    domain: string
    question: string
    options: [string, string, string, string]
    answer: 0 | 1 | 2 | 3
    explanation: string
}

export interface DomainConfig {
    value: string    // matches q.domain
    label: string    // display label (may differ from value)
    color: string    // CSS color string
    cls: string      // CSS class for the domain tag
}

export interface BankConfig {
    id: string           // matches q.bank
    label: string        // "AWS CLF-C02"
    icon: string         // "☁️"
    allLabel: string     // label for "all domains" option
    domains: DomainConfig[]
}

// ─── Registry ─────────────────────────────────────────────────────────────────

export const BANKS: BankConfig[] = [
    {
        id: 'aws',
        label: 'AWS CLF-C02',
        icon: '☁️',
        allLabel: 'Alle domener',
        domains: [
            { value: 'cloud',    label: 'Cloud Concepts',      color: '#7ab3ff', cls: 'd-cloud' },
            { value: 'security', label: 'Security & Compliance', color: '#3ecf8e', cls: 'd-security' },
            { value: 'tech',     label: 'Cloud Technology',    color: '#f5c842', cls: 'd-tech' },
            { value: 'billing',  label: 'Billing & Pricing',   color: '#d064ff', cls: 'd-billing' },
        ],
    },
    {
        id: 'istqb',
        label: 'ISTQB CTFL',
        icon: '🔍',
        allLabel: 'Alle kapitler',
        domains: [
            { value: 'Ch 1: Fundamentals', label: 'Ch 1: Fundamentals', color: '#4f8ef7', cls: 'd-ch1' },
            { value: 'Ch 2: SDLC',         label: 'Ch 2: SDLC',         color: '#3ecf8e', cls: 'd-ch2' },
            { value: 'Ch 3: Static',       label: 'Ch 3: Static',       color: '#c084fc', cls: 'd-ch3' },
            { value: 'Ch 4: Techniques',   label: 'Ch 4: Techniques',   color: '#f5a623', cls: 'd-ch4' },
            { value: 'Ch 5: Management',   label: 'Ch 5: Management',   color: '#f76f6f', cls: 'd-ch5' },
            { value: 'Ch 6: Tools',        label: 'Ch 6: Tools',        color: '#38bdf8', cls: 'd-ch6' },
        ],
    },
]

// ─── Lookup helpers ───────────────────────────────────────────────────────────

export const BANK_MAP: Record<string, BankConfig> =
    Object.fromEntries(BANKS.map(b => [b.id, b]))

/** Flat domain lookup keyed by domain value — replaces domain.ts */
export const DOMAIN_META: Record<string, DomainConfig> =
    Object.fromEntries(BANKS.flatMap(b => b.domains.map(d => [d.value, d])))
