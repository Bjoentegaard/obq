
export type Domain = 'cloud' | 'security' | 'tech' | 'billing'


export const DOMAIN_META: Record<Domain, { label: string; color: string; cls: string }> = {
    cloud: {label: 'Cloud Concepts', color: '#7ab3ff', cls: 'd-cloud'},
    security: {label: 'Security', color: '#3ecf8e', cls: 'd-security'},
    tech: {label: 'Technology', color: '#f5c842', cls: 'd-tech'},
    billing: {label: 'Billing & Pricing', color: '#d064ff', cls: 'd-billing'},
}