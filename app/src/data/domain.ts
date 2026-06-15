
export type Domain = string

export const DOMAIN_META: Record<string, { label: string; color: string; cls: string }> = {
    // AWS CLF-C02
    cloud:    { label: 'Cloud Concepts',  color: '#7ab3ff', cls: 'd-cloud' },
    security: { label: 'Security',        color: '#3ecf8e', cls: 'd-security' },
    tech:     { label: 'Technology',      color: '#f5c842', cls: 'd-tech' },
    billing:  { label: 'Billing & Pricing', color: '#d064ff', cls: 'd-billing' },
    // ISTQB CTFL
    'Practice 1': { label: 'Practice 1', color: '#4f8ef7', cls: 'd-p1' },
    'Practice 2': { label: 'Practice 2', color: '#3ecf8e', cls: 'd-p2' },
    'Practice 3': { label: 'Practice 3', color: '#c084fc', cls: 'd-p3' },
    'Practice 4': { label: 'Practice 4', color: '#f5a623', cls: 'd-p4' },
    'Practice 5': { label: 'Practice 5', color: '#f76f6f', cls: 'd-p5' },
    'Practice 6': { label: 'Practice 6', color: '#38bdf8', cls: 'd-p6' },
}
