import Link from "next/link";

export default function IntegrationsApiSolution() {
    return (
        <main className="bg-white">
            {/* HERO */}
            <section
                className="py-5 py-md-7"
                style={{
                    background: "linear-gradient(120deg, var(--brand-secondary-accent) 65%, #fff 100%)",
                    borderBottom: "1px solid rgba(var(--brand-secondary-rgb), 0.12)",
                }}
            >
                <div
                    className="container-xl d-flex flex-column flex-md-row align-items-center justify-content-between gap-5">
                    <div className="flex-grow-1 text-center text-md-start">
            <span
                className="badge rounded-pill mb-2"
                style={{background: "var(--brand-secondary)", color: "#fff", fontSize: "1rem"}}
            >
              Solution
            </span>
                        <h1
                            className="display-4 fw-bold mb-3"
                            style={{color: "var(--brand-secondary)", letterSpacing: "-.01em"}}
                        >
                            Integrations & API
                        </h1>
                        <p className="lead mb-4" style={{maxWidth: 520, color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                            Connect SpoonSync with your POS, payments, CRM, and websites. Automate orders, sync menus,
                            and ship
                            custom workflows with our secure REST API and webhooks.
                        </p>
                        <div
                            className="d-flex flex-column flex-sm-row gap-3 mb-3 justify-content-center justify-content-md-start">
                            <a
                                href="/signup"
                                className="btn btn-primary px-5 py-3 fw-bold cta-btn"
                                style={{borderRadius: 32, fontSize: "1.15rem"}}
                            >
                                Get API Access
                            </a>
                            <a
                                href="/contact"
                                className="btn btn-outline-primary px-5 py-3 fw-bold cta-btn-outline"
                                style={{borderRadius: 32, fontSize: "1.15rem"}}
                            >
                                Talk to Engineering
                            </a>
                        </div>
                        <div className="text-muted small mt-1">
                            Built for developers, agencies, and multi‑location groups.
                        </div>
                    </div>

                    <div className="flex-grow-0 d-flex justify-content-center">
                        <img
                            src="/spoonsync/integrations-hero.png"
                            alt="SpoonSync API & Integrations"
                            className="rounded-4 shadow-soft"
                            style={{width: "min(360px, 82vw)", background: "#fff"}}
                        />
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="container-xl py-6">
                <div className="row gy-5">
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>🔌</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">REST API for Menus & Orders</h3>
                            <div className="text-muted">
                                Programmatically create menus, manage items, push price changes, and sync table or
                                online orders with
                                your systems.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>🔁</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Webhooks & Automations</h3>
                            <div className="text-muted">
                                Receive real‑time events for order status, reservations, and KDS updates. Trigger
                                workflows in your CRM
                                or back office instantly.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>🛠️</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Developer‑Friendly</h3>
                            <div className="text-muted">
                                Clean docs, predictable endpoints, sandbox keys, and SDK patterns—so you can build fast
                                and scale
                                safely.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-white py-5 border-top border-bottom">
                <div className="container-xl">
                    <h2 className="h2 fw-bold text-center mb-5 text-brand">How It Works</h2>
                    <div className="row gx-5 gy-4 align-items-center">
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
                            >
                                <span className="text-white display-5 fw-bold">1</span>
                            </div>
                            <div className="fw-bold mb-1">Get Your API Key</div>
                            <div className="text-muted">Sign up and generate sandbox/production credentials from your
                                dashboard.
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
                            >
                                <span className="text-white display-5 fw-bold">2</span>
                            </div>
                            <div className="fw-bold mb-1">Connect & Build</div>
                            <div className="text-muted">Use REST + webhooks to sync menus, orders, tables, and
                                reservations.
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
                            >
                                <span className="text-white display-5 fw-bold">3</span>
                            </div>
                            <div className="fw-bold mb-1">Plug Into Your Stack</div>
                            <div className="text-muted">POS, payments, CRM, CMS, or data warehouse—keep everything in
                                sync.
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
                            >
                                <span className="text-white display-5 fw-bold">4</span>
                            </div>
                            <div className="fw-bold mb-1">Monitor & Scale</div>
                            <div className="text-muted">Track usage, throttle safely, and secure endpoints with roles
                                and scopes.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEMO UI MOCKUP */}
            <section className="container-xl py-7">
                <div className="row gy-5 align-items-center">
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <img
                            src="/spoonsync/integrations-dashboard.png"
                            alt="SpoonSync integrations dashboard"
                            className="rounded-3 shadow-soft"
                            style={{width: "min(340px, 60vw)", background: "#fff"}}
                        />
                        <div className="fw-semibold mt-2 text-brand">Connect SpoonSync to your stack in minutes</div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div
                            className="rounded-4 shadow-soft border"
                            style={{background: "var(--brand-secondary-accent)", padding: "2rem 1.5rem"}}
                        >
                            <div className="h5 fw-bold mb-2 text-brand">Popular Integrations</div>
                            <ul className="list-unstyled mb-0" style={{fontSize: "1.06rem"}}>
                                <li className="mb-2">• POS & payments (category/branch sync, order export)</li>
                                <li className="mb-2">• Websites & CMS (menus, hours, reservations widgets)</li>
                                <li className="mb-2">• CRM & marketing (guest profiles, loyalty, campaigns)</li>
                                <li className="mb-2">• Data & BI (scheduled exports, warehouse pipelines)</li>
                                <li className="mb-2">• Custom apps via REST + webhooks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="bg-white border-top py-6">
                <div className="container-xl">
                    <h3 className="h4 fw-bold text-center mb-5 text-brand">Loved by Developers & Ops Teams</h3>
                    <div className="row gx-5 gy-4 justify-content-center">
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “POS sync and webhooks were live in a day. Clean docs and predictable responses.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Arif Hasan</div>
                                <div className="text-muted small">Product Engineer</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “We automated menu updates across branches. Big win for our weekly promos.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Noorder Agency</div>
                                <div className="text-muted small">Amsterdam, NL</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-xl py-7 text-center">
                <h2 className="display-6 fw-bold mb-3 text-brand">Ready to Build, Integrate, and Scale?</h2>
                <p
                    className="lead mb-4"
                    style={{maxWidth: 560, margin: "0 auto", color: "rgba(var(--brand-secondary-rgb), .9)"}}
                >
                    Get started with SpoonSync’s developer‑friendly API and unlock automation across menus, orders,
                    tables,
                    reservations, and analytics.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <a
                        href="/signup"
                        className="btn btn-primary px-5 py-3 fw-bold cta-btn"
                        style={{borderRadius: 32, fontSize: "1.12rem"}}
                    >
                        Get API Access
                    </a>
                    <a
                        href="/contact"
                        className="btn btn-outline-primary px-5 py-3 fw-bold cta-btn-outline"
                        style={{borderRadius: 32, fontSize: "1.12rem"}}
                    >
                        Talk to Engineering
                    </a>
                </div>
            </section>
        </main>
    );
}
