// ─── AWS Concepts page: Well-Architected Framework + Pricing models ───────────

interface WafPillar {
    id: string
    icon: string
    name: string
    eng: string
    colorClass: string
    pillClass: string
    body: string
    services: string[]
    tip: string
}

interface PriceModel {
    id: string
    title: string
    sub: string
    badge: string
    badgeClass: string
    costPct: number
    flexPct: number
    costLabel: string
    flexLabel: string
    body: string
    bestFor: string
    avoid: string
}

const WAF_PILLARS: WafPillar[] = [
    {
        id: 'op',
        icon: '⚙️',
        name: 'Operational Excellence',
        eng: 'Operational Excellence',
        colorClass: 'wc-op',
        pillClass: 'pill-op',
        body: 'Drifte og overvåke systemer for å levere forretningsverdi, og kontinuerlig forbedre prosesser og prosedyrer.',
        services: ['CloudWatch', 'CloudTrail', 'AWS Config', 'Systems Manager', 'X-Ray'],
        tip: '<strong>Eksamentips:</strong> Spørsmål bruker ofte ordene "automate", "runbook" og "playbook". Kjernen er: automatiser repeterende oppgaver, overvåk alt, lær av feil.',
    },
    {
        id: 'sec',
        icon: '🔒',
        name: 'Sikkerhet',
        eng: 'Security',
        colorClass: 'wc-sec',
        pillClass: 'pill-sec',
        body: 'Beskytte informasjon, systemer og ressurser via risikovurderinger og begrensningsstrategier.',
        services: ['IAM', 'KMS', 'Shield', 'WAF', 'GuardDuty', 'Inspector', 'Macie'],
        tip: '<strong>Eksamentips:</strong> "Least privilege" er nøkkelordet. IAM-roller > IAM-brukere. Krypter data in-transit (TLS) og at-rest (KMS). Shared Responsibility Model er kjernestoff.',
    },
    {
        id: 'rel',
        icon: '🔄',
        name: 'Pålitelighet',
        eng: 'Reliability',
        colorClass: 'wc-rel',
        pillClass: 'pill-rel',
        body: 'Sikre at en arbeidsmengde utfører den tiltenkte funksjonen riktig og konsekvent — inkludert evnen til å gjenopprette fra svikt.',
        services: ['Route 53', 'ELB', 'Auto Scaling', 'S3', 'RDS Multi-AZ', 'Backup'],
        tip: '<strong>Eksamentips:</strong> Multi-AZ = tilgjengelighet. Multi-Region = disaster recovery. RTO (gjenopprettingstid) og RPO (datatap-toleranse) er begreper som dukker opp.',
    },
    {
        id: 'per',
        icon: '⚡',
        name: 'Ytelse',
        eng: 'Performance Efficiency',
        colorClass: 'wc-per',
        pillClass: 'pill-per',
        body: 'Bruke IT og dataressurser effektivt — velge riktig ressurstype, størrelse og overvåke ytelse.',
        services: ['EC2 (riktig instanstype)', 'Lambda', 'ElastiCache', 'CloudFront', 'RDS Read Replicas'],
        tip: '<strong>Eksamentips:</strong> Caching er alltid svaret på ytelsesproblemer her: CloudFront for statisk innhold, ElastiCache for databasespørringer.',
    },
    {
        id: 'cos',
        icon: '💰',
        name: 'Kostnadsoptimalisering',
        eng: 'Cost Optimization',
        colorClass: 'wc-cos',
        pillClass: 'pill-cos',
        body: 'Unngå unødvendige kostnader — forstå og kontrollere hvor pengene går, og velge den mest kostnadseffektive løsningen.',
        services: ['Cost Explorer', 'Budgets', 'Trusted Advisor', 'S3 Intelligent-Tiering', 'Spot Instances'],
        tip: '<strong>Eksamentips:</strong> Right-sizing (riktig størrelse), slette ubrukte ressurser, Reserved Instances for forutsigbar last. Cost Explorer viser historikk, Budgets setter varsler.',
    },
    {
        id: 'sus',
        icon: '🌱',
        name: 'Bærekraft',
        eng: 'Sustainability',
        colorClass: 'wc-sus',
        pillClass: 'pill-sus',
        body: 'Minimere miljøpåvirkningen av å kjøre skyarbeidsbelastninger — redusere energiforbruk og forbedre effektivitet.',
        services: ['Graviton (ARM-prosessorer)', 'Serverless (Lambda)', 'Auto Scaling', 'S3 Intelligent-Tiering'],
        tip: '<strong>Eksamentips:</strong> Graviton-prosessorer er AWS sin grønne prosessor — bedre pris og lavere energiforbruk. Serverless og managed services betyr at AWS kan optimere infrastrukturen for deg.',
    },
]

const PRICE_MODELS: PriceModel[] = [
    {
        id: 'od',
        title: 'On-Demand',
        sub: 'Betal per sekund/time, ingen binding',
        badge: 'Fleksibel',
        badgeClass: 'badge-flex',
        costPct: 100,
        flexPct: 100,
        costLabel: 'Høyest pris per enhet',
        flexLabel: 'Maks fleksibilitet',
        body: 'Start og stopp når du vil. Ingen oppfrontkostnad. Passer for uforutsigbar last eller testing.',
        bestFor: 'Utvikling/test, uforutsigbar last, kortvarige workloads',
        avoid: 'Stabil produksjonslast du kjøre >1 år → bruk Reserved i stedet',
    },
    {
        id: 'ri',
        title: 'Reserved Instances / Savings Plans',
        sub: '1 eller 3 år binding, opptil 72% rabatt',
        badge: 'Spar mest',
        badgeClass: 'badge-save',
        costPct: 35,
        flexPct: 40,
        costLabel: 'Lavest pris (med binding)',
        flexLabel: 'Lav fleksibilitet',
        body: 'Forplikt deg til en instanstype/region i 1-3 år. Savings Plans er mer fleksible (gjelder på tvers av instanstyper).',
        bestFor: 'Forutsigbar, stabil last (databaser, webservere i prod)',
        avoid: 'Usikker last — du betaler uansett om du bruker det eller ikke',
    },
    {
        id: 'spot',
        title: 'Spot Instances',
        sub: 'Ubrukt kapasitet, opptil 90% rabatt',
        badge: 'Billigst',
        badgeClass: 'badge-cheap',
        costPct: 15,
        flexPct: 60,
        costLabel: 'Billigst mulig',
        flexLabel: 'Kan avbrytes',
        body: 'AWS kan si opp instansen med 2 minutters varsel. Perfekt for arbeid som tåler avbrudd.',
        bestFor: 'Batch-jobber, ML-trening, rendering, CI/CD-pipelines',
        avoid: 'Kritiske produksjonssystemer eller databaser med tilstand',
    },
    {
        id: 'ded',
        title: 'Dedicated Hosts',
        sub: 'Fysisk dedikert server, du betaler for hele maskinen',
        badge: 'Compliance',
        badgeClass: 'badge-comp',
        costPct: 120,
        flexPct: 20,
        costLabel: 'Dyreste alternativ',
        flexLabel: 'Compliance/lisensiering',
        body: 'Du leier en hel fysisk server. Nødvendig for visse lisensmodeller (Windows Server, SQL Server per-socket) og strenge compliance-krav.',
        bestFor: 'BYOL (Bring Your Own License), regulerte bransjer (finans, helse)',
        avoid: 'Vanlige workloads — du betaler for hele maskinen uansett utnyttelse',
    },
]

export function buildConcepts(): string {
    const pillarCards = WAF_PILLARS.map(p => `
        <div class="waf-card ${p.colorClass}" data-pillar="${p.id}">
          <div class="wc-icon">${p.icon}</div>
          <div class="wc-name">${p.name}</div>
          <div class="wc-eng">${p.eng}</div>
        </div>`).join('')

    const priceCards = PRICE_MODELS.map(m => `
        <div class="price-card" data-price="${m.id}">
          <div class="pc-title">${m.title}</div>
          <div class="pc-sub">${m.sub}</div>
          <span class="pc-badge ${m.badgeClass}">${m.badge}</span>
          <div class="bar-wrap" style="margin-top:.65rem">
            <div class="bar-fill" style="width:${m.costPct}%;background:var(--accent)"></div>
          </div>
          <div class="bar-label">Kostnad: ${m.costLabel}</div>
          <div class="bar-wrap" style="margin-top:.4rem">
            <div class="bar-fill" style="width:${m.flexPct}%;background:var(--green)"></div>
          </div>
          <div class="bar-label">Fleksibilitet: ${m.flexLabel}</div>
        </div>`).join('')

    return `
      <div class="page-inner">
        <p class="section-head">AWS konsepter · CLF-C02</p>

        <p style="font-size:13px;color:var(--text2);margin-bottom:1.25rem;line-height:1.7">
          Klikk et kort for å se detaljer, tjenester og eksamentips.
        </p>

        <p style="font-size:11px;font-family:var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--text3);margin-bottom:.6rem">
          Well-Architected Framework — de 6 søylene
        </p>

        <div class="waf-grid" id="waf-grid">${pillarCards}</div>

        <div class="concepts-detail" id="waf-detail">
          <p class="concepts-placeholder">← Klikk en søyle for å se detaljer</p>
        </div>

        <hr class="concepts-divider">

        <p style="font-size:11px;font-family:var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--text3);margin-bottom:.6rem">
          AWS Prismodeller
        </p>

        <div class="price-grid" id="price-grid">${priceCards}</div>

        <div class="concepts-detail" id="price-detail" style="margin-top:10px">
          <p class="concepts-placeholder">← Klikk en prismodell for å se detaljer</p>
        </div>

        <hr class="concepts-divider">

        <p style="font-size:11px;font-family:var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--text3);margin-bottom:.75rem">
          Faktorer som påvirker AWS-pris
        </p>

        <div class="factor-grid">
          <div class="factor-card">
            <div class="factor-title">Beregning</div>
            <div class="factor-body">EC2 faktureres per sekund (min 1 min). Lambda per antall kall + GB-sekunder.</div>
          </div>
          <div class="factor-card">
            <div class="factor-title">Lagring</div>
            <div class="factor-body">S3: per GB lagret + per forespørsel. EBS: per GB provisionert per måned.</div>
          </div>
          <div class="factor-card">
            <div class="factor-title">Datatrafikk</div>
            <div class="factor-body">Innkommende data er gratis. Utgående til internett koster per GB (første 100 GB/mnd gratis).</div>
          </div>
        </div>

        <div class="exam-tip" style="margin-top:1rem">
          <strong>Huskeregel for eksamen:</strong> Forutsigbar og langsiktig → Reserved/Savings Plans.
          Uforutsigbar og kortvarig → On-Demand. Tåler avbrudd og vil spare maks → Spot.
          Compliance + lisensiering → Dedicated Hosts.
        </div>
      </div>`
}

export function bindConceptsEvents(): void {
    // WAF pillars
    document.querySelectorAll<HTMLElement>('#waf-grid .waf-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset['pillar']!
            const pillar = WAF_PILLARS.find(p => p.id === id)!
            document.querySelectorAll('#waf-grid .waf-card').forEach(c => c.classList.remove('active'))
            card.classList.add('active')
            const detail = document.getElementById('waf-detail')!
            const pillHtml = pillar.services.map(s => `<span class="pill ${pillar.pillClass}">${s}</span>`).join('')
            detail.innerHTML = `
              <div class="dp-title">${pillar.icon} ${pillar.name}</div>
              <div class="dp-body">${pillar.body}</div>
              <div class="dp-label">Nøkkeltjenester</div>
              <div class="pill-row">${pillHtml}</div>
              <div class="exam-tip">${pillar.tip}</div>`
        })
    })

    // Pricing models
    document.querySelectorAll<HTMLElement>('#price-grid .price-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset['price']!
            const model = PRICE_MODELS.find(m => m.id === id)!
            document.querySelectorAll('#price-grid .price-card').forEach(c => c.classList.remove('active'))
            card.classList.add('active')
            const detail = document.getElementById('price-detail')!
            detail.innerHTML = `
              <div class="dp-title">${model.title}</div>
              <div class="dp-body">${model.body}</div>
              <div class="dp-label">Passer best for</div>
              <div class="dp-body"><b>✓</b> ${model.bestFor}</div>
              <div class="dp-label">Unngå når</div>
              <div class="dp-body"><b>✗</b> ${model.avoid}</div>`
        })
    })
}
