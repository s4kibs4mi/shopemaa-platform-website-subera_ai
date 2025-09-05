import Link from "next/link";

export default function CrossSellEngineFeature() {
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
                            style={{color: "var(--brand-secondary)", letterSpacing: "-.01em"}}
                        >
                            Cross-Sell Engine<br/>Increase Attach Rate, Naturally
                        </h1>
                        <p
                            className="lead mb-4"
                            style={{maxWidth: 520, color: "rgba(var(--brand-secondary-rgb), .9)"}}
                        >
                            Recommend complementary products that complete the purchase—cables
                            for laptops, sauces for meals, or add-ons for subscriptions.
                            <br/>
                            <span className="fw-semibold" style={{color: "var(--brand-secondary)"}}>
                Relevant, compatibility-aware suggestions that feel helpful.
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
                            Proven across{" "}
                            <span className="fw-semibold" style={{color: "var(--brand-primary)"}}>
                Retail
              </span>
                            ,{" "}
                            <span className="fw-semibold" style={{color: "var(--brand-primary)"}}>
                Restaurants
              </span>{" "}
                            &{" "}
                            <span className="fw-semibold" style={{color: "var(--brand-primary)"}}>
                Digital
              </span>
                            .
                        </div>
                    </div>

                    <div className="flex-grow-0 d-flex justify-content-center">
                        <img
                            src="/img/mockups/cross-sell-engine.png"
                            alt="Cross-Sell Engine Demo"
                            className="rounded-4 shadow-soft"
                            style={{width: "min(340px, 80vw)", background: "#fff"}}
                        />
                    </div>
                </div>
            </section>

            {/* BENEFITS / VALUE PROPS */}
            <section className="container-xl py-6">
                <div className="row gy-5">
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>🎯</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Complement That Converts</h3>
                            <div className="text-muted">
                                Surface accessories and add-ons with the highest likelihood to convert—right where
                                shoppers decide.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>🔌</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Compatibility-Aware</h3>
                            <div className="text-muted">
                                Respect product compatibility, allergens, inventory, and margin rules—no mismatched
                                suggestions.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>📈</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Higher Attach Rate</h3>
                            <div className="text-muted">
                                Lift add-to-cart on complements and grow revenue per order, measured with A/B testing &
                                attribution.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-white py-5 border-top border-bottom">
                <div className="container-xl">
                    <h2 className="h2 fw-bold text-center mb-5 text-brand">How Cross-Sell Engine Works</h2>
                    <div className="row gx-5 gy-4 align-items-center">
                        {[
                            {
                                step: 1,
                                title: "Understand Context",
                                desc: "Analyze the active product, cart, and shopper intent."
                            },
                            {
                                step: 2,
                                title: "Find Complements",
                                desc: "Blend embeddings + co-occurrence with your business rules."
                            },
                            {
                                step: 3,
                                title: "Place Smartly",
                                desc: "Render in PDP, cart, or checkout with instant load (<200ms)."
                            },
                            {
                                step: 4,
                                title: "Measure & Improve",
                                desc: "Track CTR/attach rate and auto-optimize placements."
                            },
                        ].map((s) => (
                            <div className="col-12 col-md-3 text-center" key={s.step}>
                                <div
                                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                    style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
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

            {/* DEMO / WIDGET PREVIEW */}
            <section className="container-xl py-7">
                <div className="row gy-5 align-items-center">
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <img
                            src="/img/mockups/cross-sell-cart.png"
                            alt="Cross-Sell in Cart"
                            className="rounded-3 shadow-soft"
                            style={{width: "min(650px, 60vw)", background: "#fff"}}
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <div
                            className="rounded-4 shadow-soft border"
                            style={{background: "var(--brand-secondary-accent)", padding: "2rem 1.5rem"}}
                        >
                            <div className="h5 fw-bold mb-2 text-brand">Common Cross-Sells</div>
                            <ul className="list-unstyled mb-0" style={{fontSize: "1.06rem"}}>
                                <li className="mb-2">• Phone → case, screen protector, charger (retail)</li>
                                <li className="mb-2">• Burger → fries, drink, dips (restaurants)</li>
                                <li className="mb-2">• Pasta → sauce, cheese, salad (grocery)</li>
                                <li className="mb-2">• App plan → addon modules, extra seats (digital)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF / TESTIMONIALS */}
            <section className="bg-white border-top py-6">
                <div className="container-xl">
                    <h3 className="h4 fw-bold text-center mb-5 text-brand">What Merchants Say</h3>
                    <div className="row gx-5 gy-4 justify-content-center">
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “Attach rate jumped 19% after enabling cross-sell on PDP and cart. The compatibility
                                    filters are clutch.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Volt Mobile</div>
                                <div className="text-muted small">Amsterdam, NL</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “Side + drink combos boosted our average ticket immediately—no dev lift needed.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">UrbanBite</div>
                                <div className="text-muted small">Dhaka, BD</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-xl py-7 text-center">
                <h2 className="display-6 fw-bold mb-3 text-brand">Ready to Raise Your Attach Rate?</h2>
                <p
                    className="lead mb-4"
                    style={{maxWidth: 520, margin: "0 auto", color: "rgba(var(--brand-secondary-rgb), .9)"}}
                >
                    Start free and see how Subera AI’s Cross-Sell Engine turns every product into a curated experience.
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
