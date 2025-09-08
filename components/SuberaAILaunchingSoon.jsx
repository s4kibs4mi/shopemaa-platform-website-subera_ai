import React, {useId, useState} from "react";

// Data
const usecases = [
    {name: "Smart Search", hint: "Hybrid lexical + vector search for PDP & site search."},
    {name: "Similar Items", hint: "Alternatives by semantics, visuals, and metadata."},
    {name: "Upsell", hint: "Premium alternates tuned to margin, inventory, and context."},
    {name: "Cross-Sell", hint: "Complementary picks for PDP and cart to raise AOV."},
    {name: "Complete Package", hint: "Build bundles (X,Y,Z for A) with price and stock rules."},
    {name: "Allergen/Diet", hint: "Restaurant-grade inclusion/exclusion for safe menus."},
    {name: "Real-time Signals", hint: "Session & clickstream ranking that adapts instantly."},
    {name: "Governance", hint: "Multi-tenant isolation, SSO, and audit trails."},
];

const solutions = [
    {name: "Hybrid Retrieval", hint: "BM25 + embeddings + filters for trustable relevance."},
    {name: "Rules Engine", hint: "Merchandising, allergens, brand exclusions, and promos."},
    {name: "Signals Layer", hint: "Inventory, CTR, dwell, and seasonality feed ranking."},
    {name: "Bundling Engine", hint: "Define packages, dynamic pricing, and availability checks."},
    {name: "SDK & Widgets", hint: "Drop-in components for PDP, cart, and collection pages."},
    {name: "A/B & Analytics", hint: "Experiment hooks and dashboards for lift and win-rate."},
];

export default function SuberaLaunchingSoon({year}) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const displayYear = year ?? new Date().getFullYear();

    return (
        <main>
            {/* HEADER */}
            <header className="navbar-wrapper py-2">
                <div className="container-xl d-flex align-items-center justify-content-between">
          <span className="d-flex align-items-center gap-2">
            <strong className="text-brand-main">Subera AI</strong>
          </span>

                    <nav className="d-none d-lg-flex gap-3 align-items-center">
                        <a href="#features" className="nav-link fw-bold text-brand">Features</a>
                        <a href="#usecases" className="nav-link fw-bold text-brand">Use cases</a>
                        <a href="#solutions" className="nav-link fw-bold text-brand">Solutions</a>
                        <a href="#faq" className="nav-link fw-bold text-brand">FAQ</a>
                    </nav>

                    <button aria-label="Open menu" className="btn d-lg-none" onClick={() => setDrawerOpen(true)}>
                        <span className="hamburger-icon">☰</span>
                    </button>
                </div>
            </header>

            {/* MOBILE DRAWER (overlay hidden when closed) */}
            <div
                className={`navbar-mobile-drawer ${drawerOpen ? 'open' : ''}`}
                onClick={() => setDrawerOpen(false)}
                style={{opacity: drawerOpen ? 1 : 0, pointerEvents: drawerOpen ? 'auto' : 'none'}}
                aria-hidden={!drawerOpen}>
                <nav onClick={(e) => e.stopPropagation()}>
                    <div className="d-flex align-items-center justify-content-between p-3">
                        <strong className="text-brand-main">Subera AI</strong>
                        <button className="btn" onClick={() => setDrawerOpen(false)} aria-label="Close menu">✕</button>
                    </div>
                    <div className="d-flex flex-column px-3 gap-2">
                        <a className="nav-link" href="#features" onClick={() => setDrawerOpen(false)}>Features</a>
                        <a className="nav-link" href="#usecases" onClick={() => setDrawerOpen(false)}>Use cases</a>
                        <a className="nav-link" href="#solutions" onClick={() => setDrawerOpen(false)}>Solutions</a>
                        <a className="nav-link" href="#faq" onClick={() => setDrawerOpen(false)}>FAQ</a>
                    </div>
                </nav>
            </div>

            {/* HERO */}
            <section className="bg-accent section-spacing">
                <div className="container-xl d-flex flex-column flex-lg-row align-items-center gap-4">
                    {/* Left */}
                    <div className="flex-fill text-center text-lg-start">
                        <div className="d-inline-flex align-items-center gap-2 mb-2">
                            <small className="text-brand fw-bold text-uppercase">Launching soon</small>
                        </div>

                        <h1 className="display-2 fw-bolder text-brand-main mb-3" style={{letterSpacing: "-2px"}}>
                            AI Commerce<br/>that Converts.
                        </h1>

                        <p className="fs-2 hero-lead mb-5" style={{maxWidth: 640}}>
              <span className="fw-semibold text-brand">
                Search, Similar, Upsell, Cross-sell, and Complete-the-Package — powered by
                hybrid retrieval, rules, and real-time signals.
              </span>
                            <br/>
                            <span>Simple to integrate. Brand-ready. Low latency.</span>
                        </p>

                        <div
                            className="d-flex flex-column flex-md-row gap-4 justify-content-center justify-content-lg-start">
                            <a href="mailto:hello@subera.ai" className="btn btn-lg cta-btn-outline px-5 py-3">Contact
                                Sales</a>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex-fill d-flex justify-content-center mt-5 mt-lg-0">
                        <div className="card-modern shadow-soft p-4 hero-side-img w-100">
                            <p className="text-uppercase text-muted fw-700 mb-2">Preview</p>
                            <div className="border rounded-4 p-3 text-center">
                                <BrandChart/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section id="features" className="section-spacing bg-white">
                <div className="container-xl">
                    <h2 className="section-title">Built for scale, brand, and speed</h2>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4">
                            <CardFeature title="Hybrid Retrieval"
                                         body="Lexical + embeddings + filters for reliable relevance."
                                         icon={<IconSearch/>}/>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <CardFeature title="Real-time signals"
                                         body="Inventory, CTR, and session context tune ranking." icon={<IconPulse/>}/>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <CardFeature title="Governance"
                                         body="Multi-tenant isolation, SSO, audit trails from day one."
                                         icon={<IconShield/>}/>
                        </div>
                    </div>
                </div>
            </section>

            {/* USE CASES */}
            <section id="usecases" className="bg-accent section-spacing">
                <div className="container-xl">
                    <h2 className="section-title">Use cases</h2>
                    <div className="row g-3">
                        {usecases.map((u) => (
                            <div key={u.name} className="col-12 col-md-6 col-lg-4">
                                <div className="card-modern shadow-soft p-4 h-100 d-flex align-items-start gap-3">
                                    <BadgeIcon><IconBolt/></BadgeIcon>
                                    <div>
                                        <h3 className="h5 fw-800 mb-1 text-brand">{u.name}</h3>
                                        <p className="mb-0 text-muted">{u.hint}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTIONS */}
            <section id="solutions" className="section-spacing bg-white">
                <div className="container-xl">
                    <h2 className="section-title">Solutions</h2>
                    <div className="row g-3">
                        {solutions.map((s) => (
                            <div key={s.name} className="col-12 col-md-6 col-lg-4">
                                <div className="card-modern shadow-soft p-4 h-100 d-flex align-items-start gap-3">
                                    <BadgeIcon><IconWand/></BadgeIcon>
                                    <div>
                                        <h3 className="h5 fw-800 mb-1 text-brand">{s.name}</h3>
                                        <p className="mb-0 text-muted">{s.hint}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="bg-accent section-spacing">
                <div className="container-xl">
                    <h2 className="section-title">FAQ</h2>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4"><FAQ q="When are you launching?">We’re inviting teams in
                            waves and will announce the public launch soon.</FAQ></div>
                        <div className="col-md-6 col-lg-4"><FAQ q="Is there a free plan?">Yes — start free and upgrade
                            as you scale traffic and teams.</FAQ></div>
                        <div className="col-md-6 col-lg-4"><FAQ q="Does it work with Shopify/Stripe?">Yes. Native flows,
                            webhooks, and a clean API/SDK for automation.</FAQ></div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-4 bg-white">
                <div className="container-xl d-flex flex-wrap align-items-center justify-content-between">
                    <small className="text-muted">© <span suppressHydrationWarning>{displayYear}</span> Subera
                        AI</small>
                    <div className="d-flex gap-4">
                        <a className="text-decoration-none text-brand fw-700" href="#features">Features</a>
                        <a className="text-decoration-none text-brand fw-700" href="#usecases">Use cases</a>
                        <a className="text-decoration-none text-brand fw-700" href="#solutions">Solutions</a>
                        <a className="text-decoration-none text-brand fw-700" href="#faq">FAQ</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}

/* ---------------------------- UI helpers ---------------------------- */
function CardFeature({title, body, icon}) {
    return (
        <div className="card-modern shadow-soft p-4 h-100">
            <div className="d-flex align-items-start gap-3">
                <BadgeIcon>{icon}</BadgeIcon>
                <div>
                    <h3 className="h5 fw-800 mb-1 text-brand">{title}</h3>
                    <p className="mb-0 text-muted">{body}</p>
                </div>
            </div>
        </div>
    );
}

function FAQ({q, children}) {
    return (
        <div className="card-modern shadow-soft p-4 h-100">
            <details>
                <summary className="fw-800 text-brand">{q}</summary>
                <p className="mb-0 mt-2 text-muted">{children}</p>
            </details>
        </div>
    );
}

function BadgeIcon({children}) {
    return (
        <span className="bg-card-tint rounded-3 d-inline-flex align-items-center justify-content-center"
              style={{width: 44, height: 44}}>
      {children}
    </span>
    );
}

/* ------------------------------ Icons ------------------------------ */
function IconSearch() {
    return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="11" cy="11" r="7"/>
            <path d="M21 21l-3.4-3.4"/>
        </svg>
    );
}

function IconPulse() {
    return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M3 12h4l2 6 4-12 2 6h4"/>
        </svg>
    );
}

function IconBundle() {
    return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="3" y="7" width="18" height="10" rx="2"/>
            <path d="M3 12h18M8 7V5M16 7V5"/>
        </svg>
    );
}

function IconShield() {
    return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z"/>
        </svg>
    );
}

function IconWand() {
    return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M2 22 22 2"/>
            <path d="m15 4-1 2-2 1 2 1 1 2 1-2 2-1-2-1-1-2z"/>
        </svg>
    );
}

function IconBolt() {
    return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="m13 2-8 14h7l-1 6 8-14h-7l1-6z"/>
        </svg>
    );
}

/* --------------------------- Brand Chart --------------------------- */
function BrandChart() {
    const rid = useId();
    const gradId = `sa-grad-${String(rid).replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
        <svg viewBox="0 0 360 240" width="100%" height="100%" aria-hidden>
            <defs>
                <linearGradient id={gradId} x1="0" x2="1">
                    <stop offset="0%" stopColor="#FFB74D"/>
                    <stop offset="100%" stopColor="#5C1D10"/>
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="360" height="240" rx="14" fill="#fff"/>
            <rect x="10" y="10" width="340" height="220" rx="12" fill="none" stroke="#eee"/>
            <path d="M36 200H324" stroke="#e5e7eb"/>
            <path d="M36 60v140" stroke="#e5e7eb"/>
            {[60, 110, 150, 130, 180].map((h, i) => (
                <rect key={i} x={56 + i * 56} y={200 - h} width="28" height={h} rx="6" fill={`url(#${gradId})`}
                      opacity={0.9}/>
            ))}
            <path d="M48 180 C 120 120, 220 160, 312 100" fill="none" stroke="#5C1D10" strokeWidth="3" opacity=".6"/>
        </svg>
    );
}
