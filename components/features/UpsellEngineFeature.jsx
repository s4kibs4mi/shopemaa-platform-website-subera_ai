import Link from "next/link";

export default function UpsellEngineFeature() {
    return (
        <main className="bg-white">
            {/* HERO SECTION */}
            <section
                className="py-5 py-md-7"
                style={{
                    background:
                        "linear-gradient(120deg, var(--brand-secondary-accent) 60%, #fff 100%)",
                    borderBottom: "1px solid rgba(var(--brand-secondary-rgb), 0.12)",
                }}
            >
                <div
                    className="container-xl d-flex flex-column flex-md-row align-items-center justify-content-between gap-5">
                    <div className="flex-grow-1 text-center text-md-start">
            <span
                className="badge rounded-pill mb-2"
                style={{
                    background: "var(--brand-secondary)",
                    color: "#fff",
                    fontSize: "1rem",
                }}
            >
              Feature
            </span>
                        <h1
                            className="display-4 fw-bold mb-3"
                            style={{
                                color: "var(--brand-secondary)",
                                letterSpacing: "-.01em",
                            }}
                        >
                            Upsell Engine<br/>Turn Browsers into Buyers
                        </h1>
                        <p
                            className="lead mb-4"
                            style={{
                                maxWidth: 480,
                                color: "rgba(var(--brand-secondary-rgb), .9)",
                            }}
                        >
                            Show smarter, higher-value alternatives that increase average order
                            value—without hurting the customer experience.
                            <br/>
                            <span
                                className="fw-semibold"
                                style={{color: "var(--brand-secondary)"}}
                            >
                AI-driven upsells that feel natural, not pushy.
              </span>
                        </p>
                        <div
                            className="d-flex flex-column flex-sm-row gap-3 mb-3 justify-content-center justify-content-md-start">
                            <a
                                href="/signup"
                                className="btn btn-primary px-5 py-3 fw-bold cta-btn"
                                style={{borderRadius: 32, fontSize: "1.15rem"}}
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
                            Used by leading merchants in{" "}
                            <span
                                className="fw-semibold"
                                style={{color: "var(--brand-primary)"}}
                            >
                Retail
              </span>
                            ,{" "}
                            <span
                                className="fw-semibold"
                                style={{color: "var(--brand-primary)"}}
                            >
                Restaurants
              </span>
                            , and more.
                        </div>
                    </div>

                    <div className="flex-grow-0 d-flex justify-content-center">
                        <img
                            src="/img/mockups/upsell-engine.png"
                            alt="Upsell Engine Demo"
                            className="rounded-4 shadow-soft"
                            style={{width: "min(340px, 80vw)", background: "#fff"}}
                        />
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="container-xl py-6">
                <div className="row gy-5">
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>🛒</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Boost AOV Instantly</h3>
                            <div className="text-muted">
                                Suggest premium items, upgrades, or larger packs at checkout to
                                lift average order value by 10–20%.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>🤖</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">AI Precision</h3>
                            <div className="text-muted">
                                Upsells are context-aware—based on cart, preferences, and
                                purchase history for maximum relevance.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>📈</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Data-Driven Results</h3>
                            <div className="text-muted">
                                Track which upsells convert best, run A/B tests, and optimize
                                automatically for revenue growth.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-white py-5 border-top border-bottom">
                <div className="container-xl">
                    <h2 className="h2 fw-bold text-center mb-5 text-brand">
                        How Upsell Engine Works
                    </h2>
                    <div className="row gx-5 gy-4 align-items-center">
                        {[
                            {step: 1, title: "Analyze", desc: "AI scans cart, product, and shopper data."},
                            {step: 2, title: "Match", desc: "Finds premium or upgraded alternatives."},
                            {step: 3, title: "Suggest", desc: "Displays upsells at PDP, cart, and checkout."},
                            {step: 4, title: "Convert", desc: "Monitors uplift and optimizes in real time."},
                        ].map((s) => (
                            <div className="col-12 col-md-3 text-center" key={s.step}>
                                <div
                                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                    style={{
                                        width: 64,
                                        height: 64,
                                        background: "var(--brand-secondary)",
                                    }}
                                >
                                    <span className="text-white display-5 fw-bold">{s.step}</span>
                                </div>
                                <div className="fw-bold mb-1">{s.title}</div>
                                <div className="text-muted">{s.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DEMO */}
            <section className="container-xl py-7">
                <div className="row gy-5 align-items-center">
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <img
                            src="/img/mockups/upsell-cart.png"
                            alt="Upsell Engine in Cart"
                            className="rounded-3 shadow-soft"
                            style={{width: "min(650px, 60vw)", background: "#fff"}}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <div
                            className="rounded-4 shadow-soft border"
                            style={{
                                background: "var(--brand-secondary-accent)",
                                padding: "2rem 1.5rem",
                            }}
                        >
                            <div className="h5 fw-bold mb-2 text-brand">Examples of Upsells</div>
                            <ul className="list-unstyled mb-0" style={{fontSize: "1.06rem"}}>
                                <li className="mb-2">• Upgrade to premium model (retail)</li>
                                <li className="mb-2">• Add dessert or side dish (restaurants)</li>
                                <li className="mb-2">• Larger family pack (grocery)</li>
                                <li className="mb-2">• Subscription upgrade (digital products)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="bg-white border-top py-6">
                <div className="container-xl">
                    <h3 className="h4 fw-bold text-center mb-5 text-brand">
                        What Our Customers Say
                    </h3>
                    <div className="row gx-5 gy-4 justify-content-center">
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “Upsell Engine helped us increase accessory sales by 22% in the
                                    first 6 weeks. Customers love the smart suggestions.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">TechX Retail</div>
                                <div className="text-muted small">Berlin, DE</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “Our average basket size jumped by 15% once we introduced
                                    desserts and drinks as upsells through Subera.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Bistro Nova</div>
                                <div className="text-muted small">Paris, FR</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-xl py-7 text-center">
                <h2 className="display-6 fw-bold mb-3 text-brand">
                    Ready to Lift Your Average Order Value?
                </h2>
                <p
                    className="lead mb-4"
                    style={{
                        maxWidth: 480,
                        margin: "0 auto",
                        color: "rgba(var(--brand-secondary-rgb), .9)",
                    }}
                >
                    Start free and see why Subera AI’s Upsell Engine is trusted to turn
                    everyday orders into bigger baskets.
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
