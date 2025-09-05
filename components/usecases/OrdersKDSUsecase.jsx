import Link from "next/link";

export default function OrdersKDSUsecase() {
    return (
        <main className="bg-white">
            {/* HERO SECTION */}
            <section
                className="py-5 py-md-7"
                style={{
                    background: "linear-gradient(120deg, var(--brand-secondary-accent) 60%, #fff 100%)",
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
              Use Case
            </span>
                        <h1
                            className="display-4 fw-bold mb-3"
                            style={{color: "var(--brand-secondary)", letterSpacing: "-.01em"}}
                        >
                            Orders & KDS<br/>for Faster Service
                        </h1>
                        <p className="lead mb-4" style={{maxWidth: 520, color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                            Route every order to the right station, cut ticket times, and keep front‑of‑house and
                            kitchen in sync—
                            all from a unified workflow.
                            <br/>
                            <span className="fw-semibold" style={{color: "var(--brand-secondary)"}}>
                Clear statuses: New → Preparing → Ready → Served.
              </span>
                        </p>
                        <div
                            className="d-flex flex-column flex-sm-row gap-3 mb-3 justify-content-center justify-content-md-start">
                            <a
                                href="/signup"
                                className="btn btn-primary px-5 py-3 fw-bold cta-btn"
                                style={{borderRadius: 32, fontSize: "1.15rem", letterSpacing: ".01em"}}
                            >
                                Get Started Free
                            </a>
                            <a
                                href="/contact"
                                className="btn btn-outline-primary px-5 py-3 fw-bold cta-btn-outline"
                                style={{borderRadius: 32, fontSize: "1.15rem"}}
                            >
                                Contact Sales
                            </a>
                        </div>
                        <div className="text-muted small mt-1">
                            Trusted by modern restaurants in{" "}
                            <span className="fw-semibold" style={{color: "var(--brand-primary)"}}>Dhaka</span>,{" "}
                            <span className="fw-semibold" style={{color: "var(--brand-primary)"}}>Amsterdam</span>, and
                            beyond.
                        </div>
                    </div>

                    <div className="flex-grow-0 d-flex justify-content-center">
                        <img
                            src="/img/mockups/orders_kds-mockup.png"
                            alt="SpoonSync Orders & KDS Demo"
                            className="rounded-4 shadow-soft"
                            style={{width: "min(360px, 82vw)", background: "#fff"}}
                        />
                    </div>
                </div>
            </section>

            {/* BENEFITS / VALUE PROPS */}
            <section className="container-xl py-6">
                <div className="row gy-5">
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>⚡️</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Faster Ticket Times</h3>
                            <div className="text-muted">
                                Orders route instantly to the right screen—bar, hot, cold, dessert—so teams start
                                cooking sooner.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>✅</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Zero Missed Orders</h3>
                            <div className="text-muted">
                                Color‑coded states, audible alerts, and auto‑escalation help catch delays before they
                                become issues.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>🧑‍🍳</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Kitchen‑Friendly UI</h3>
                            <div className="text-muted">
                                Big fonts, dark/light modes, bump with a tap, and item‑level timers built for busy
                                back‑of‑house.
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
                            <div className="fw-bold mb-1">Set Up Stations</div>
                            <div className="text-muted">Create hot, cold, bar, pastry—map categories to stations in
                                minutes.
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
                            >
                                <span className="text-white display-5 fw-bold">2</span>
                            </div>
                            <div className="fw-bold mb-1">Capture Orders</div>
                            <div className="text-muted">QR, waiter tablet, or POS—every ticket lands where it should,
                                instantly.
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
                            >
                                <span className="text-white display-5 fw-bold">3</span>
                            </div>
                            <div className="fw-bold mb-1">Cook & Bump</div>
                            <div className="text-muted">Item‑level timers, KDS tickets, and bump actions keep production
                                flowing.
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
                            >
                                <span className="text-white display-5 fw-bold">4</span>
                            </div>
                            <div className="fw-bold mb-1">Ready & Serve</div>
                            <div className="text-muted">Mark Ready for pickup or service; FOH gets notified
                                immediately.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEMO / SCREENS */}
            <section className="container-xl py-7">
                <div className="row gy-5 align-items-center">
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <img
                            src="/img/mockups/kds-screen-mockup.png"
                            alt="Kitchen Display System example"
                            className="rounded-3 shadow-soft"
                            style={{width: "min(650px, 60vw)", background: "#fff"}}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <div
                            className="rounded-4 shadow-soft border"
                            style={{background: "var(--brand-secondary-accent)", padding: "2rem 1.5rem"}}
                        >
                            <div className="h5 fw-bold mb-2 text-brand">What staff see</div>
                            <ul className="list-unstyled mb-0" style={{fontSize: "1.06rem"}}>
                                <li className="mb-2">• Station‑routed tickets with item modifiers</li>
                                <li className="mb-2">• Timers, rush flags, and order aging</li>
                                <li className="mb-2">• Bump/recall and Ready/Served statuses</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF / TESTIMONIALS */}
            <section className="bg-white border-top py-6">
                <div className="container-xl">
                    <h3 className="h4 fw-bold text-center mb-5 text-brand">Loved by Busy Kitchens</h3>
                    <div className="row gx-5 gy-4 justify-content-center">
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “Ticket times dropped by 20% after switching to SpoonSync’s KDS. Routing and bumping
                                    are seamless.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Corner Table</div>
                                <div className="text-muted small">Dhaka, Bangladesh</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “Bar and kitchen finally run in sync. The Ready → Served flow keeps FOH on top of
                                    every order.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Harbor Grill</div>
                                <div className="text-muted small">Haarlem, Netherlands</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-xl py-7 text-center">
                <h2 className="display-6 fw-bold mb-3 text-brand">Ready to Speed Up Your Line?</h2>
                <p className="lead mb-4"
                   style={{maxWidth: 520, margin: "0 auto", color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                    Start free and see how SpoonSync keeps orders flowing and teams aligned—without new hardware.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <a
                        href="/signup"
                        className="btn btn-primary px-5 py-3 fw-bold cta-btn"
                        style={{borderRadius: 32, fontSize: "1.12rem"}}
                    >
                        Get Started Free
                    </a>
                    <a
                        href="/contact"
                        className="btn btn-outline-primary px-5 py-3 fw-bold cta-btn-outline"
                        style={{borderRadius: 32, fontSize: "1.12rem"}}
                    >
                        Contact Sales
                    </a>
                </div>
            </section>
        </main>
    );
}
