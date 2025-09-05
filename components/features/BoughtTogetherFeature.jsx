import Link from "next/link";

export default function BoughtTogetherFeature() {
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
                            Bought-Together<br/>Pairs That Sell Themselves
                        </h1>
                        <p
                            className="lead mb-4"
                            style={{
                                maxWidth: 520,
                                color: "rgba(var(--brand-secondary-rgb), .9)",
                            }}
                        >
                            Surface products customers naturally purchase together—shoes +
                            socks, phones + cases, rice + lentils—based on real buying data.
                            <br/>
                            <span
                                className="fw-semibold"
                                style={{color: "var(--brand-secondary)"}}
                            >
                Smarter suggestions. Higher attach rates.
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
                            Proven to lift order size in{" "}
                            <span className="fw-semibold" style={{color: "var(--brand-primary)"}}>
                Fashion
              </span>
                            ,{" "}
                            <span className="fw-semibold" style={{color: "var(--brand-primary)"}}>
                Grocery
              </span>{" "}
                            &{" "}
                            <span className="fw-semibold" style={{color: "var(--brand-primary)"}}>
                Electronics
              </span>
                            .
                        </div>
                    </div>

                    <div className="flex-grow-0 d-flex justify-content-center">
                        <img
                            src="/img/mockups/bought-together.png"
                            alt="Bought Together widget demo"
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
                            <div
                                className="mb-2"
                                style={{fontSize: 36, color: "var(--brand-primary)"}}
                            >
                                🤝
                            </div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Data-Driven Pairs</h3>
                            <div className="text-muted">
                                Use real purchase history to suggest items most often bought
                                together—no guesswork required.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div
                                className="mb-2"
                                style={{fontSize: 36, color: "var(--brand-primary)"}}
                            >
                                ⚡️
                            </div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Instant Attach-Rate Lift</h3>
                            <div className="text-muted">
                                From accessories to staples, buyers see natural add-ons and
                                checkout with more in the cart.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div
                                className="mb-2"
                                style={{fontSize: 36, color: "var(--brand-primary)"}}
                            >
                                🔍
                            </div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Context-Aware</h3>
                            <div className="text-muted">
                                AI ensures relevance: rice pairs with curry, not soda. Phone
                                cases with the right model, not random accessories.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-white py-5 border-top border-bottom">
                <div className="container-xl">
                    <h2 className="h2 fw-bold text-center mb-5 text-brand">
                        How Bought-Together Works
                    </h2>
                    <div className="row gx-5 gy-4 align-items-center">
                        {[
                            {
                                step: 1,
                                title: "Mine Transactions",
                                desc: "AI analyzes baskets to find natural pairs and triplets.",
                            },
                            {
                                step: 2,
                                title: "Score & Rank",
                                desc: "Only high-confidence, high-frequency combos are surfaced.",
                            },
                            {
                                step: 3,
                                title: "Render Anywhere",
                                desc: "Show pairs on product detail pages, carts, or emails.",
                            },
                            {
                                step: 4,
                                title: "Measure Uplift",
                                desc: "Track attach rates, AOV lift, and incremental margin.",
                            },
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

            {/* DEMO / WIDGET PREVIEW */}
            <section className="container-xl py-7">
                <div className="row gy-5 align-items-center">
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <img
                            src="/img/mockups/bought-together-cart.png"
                            alt="Bought together cart widget"
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
                            <div className="h5 fw-bold mb-2 text-brand">
                                Common Pairs Across Verticals
                            </div>
                            <ul className="list-unstyled mb-0" style={{fontSize: "1.06rem"}}>
                                <li className="mb-2">• Fashion: shoes + socks, jeans + belts</li>
                                <li className="mb-2">• Grocery: rice + lentils, pasta + sauce</li>
                                <li className="mb-2">• Electronics: phone + case, laptop + sleeve</li>
                                <li className="mb-2">• Restaurants: burger + fries, curry + naan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF / TESTIMONIALS */}
            <section className="bg-white border-top py-6">
                <div className="container-xl">
                    <h3 className="h4 fw-bold text-center mb-5 text-brand">
                        Customers Notice the Difference
                    </h3>
                    <div className="row gx-5 gy-4 justify-content-center">
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div
                                    className="mb-3"
                                    style={{fontSize: 24, color: "var(--brand-primary)"}}
                                >
                                    ★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “Bought-Together pairs were so natural that customers clicked
                                    without thinking. AOV up 12%.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">FreshMart Grocery</div>
                                <div className="text-muted small">Amsterdam, NL</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div
                                    className="mb-3"
                                    style={{fontSize: 24, color: "var(--brand-primary)"}}
                                >
                                    ★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “Phone + case upsells are seamless now. Attach rates jumped
                                    instantly.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">TechHouse</div>
                                <div className="text-muted small">Dhaka, BD</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-xl py-7 text-center">
                <h2 className="display-6 fw-bold mb-3 text-brand">
                    Ready to Boost Attach Rates?
                </h2>
                <p
                    className="lead mb-4"
                    style={{
                        maxWidth: 520,
                        margin: "0 auto",
                        color: "rgba(var(--brand-secondary-rgb), .9)",
                    }}
                >
                    Start free and see how Bought-Together suggestions turn single-item
                    carts into complete orders.
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
