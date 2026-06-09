// ─── SVG icons ─────────────────────────────────────────────────────────────

export function icon(path: string): string {
    return `<svg viewBox="0 0 24 24" class="icon" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`
}

export function iconGrid(): string {
    return icon('<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>')
}

export function iconCard(): string {
    return icon('<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>')
}

export function iconQuestion(): string {
    return icon('<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>')
}

export function iconImport(): string {
    return icon('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>')
}

export function iconLeft(): string {
    return icon('<polyline points="15 18 9 12 15 6"/>')
}

export function iconRight(): string {
    return icon('<polyline points="9 18 15 12 9 6"/>')
}

export function iconCheck(): string {
    return icon('<polyline points="20 6 9 17 4 12"/>')
}

export function iconX(): string {
    return icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>')
}

export function iconShuffle(): string {
    return icon('<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>')
}