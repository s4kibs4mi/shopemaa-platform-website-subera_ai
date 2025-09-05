import Link from "next/link";

export default function AiRecommendationsFeature() {
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
                            AI Recommendations<br/>that Drive Revenue
                        </h1>
                        <p
                            className="lead mb-4"
                            style={{
                                maxWidth: 480,
                                color: "rgba(var(--brand-secondary-rgb), .9)",
                            }}
                        >
                            Subera AI delivers personalized upsells, cross-sells, and bundles
                            in real time—maximizing average order value (AOV) and lifetime
                            value (LTV).
                            <br/>
                            <span
                                className="fw-semibold"
                                style={{color: "var(--brand-secondary)"}}
                            >
                Smarter recommendations. Bigger baskets.
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
                            Trusted by forward-thinking merchants in{" "}
                            <span
                                className="fw-semibold"
                                style={{color: "var(--brand-primary)"}}
                            >
                Dhaka
              </span>
                            ,{" "}
                            <span
                                className="fw-semibold"
                                style={{color: "var(--brand-primary)"}}
                            >
                Amsterdam
              </span>
                            , and beyond.
                        </div>
                    </div>

                    <div className="flex-grow-0 d-flex justify-content-center">
                        <img
                            src="/img/mockups/ai-recommendations.png"
                            alt="Subera AI Recommendations Demo"
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
                            <div
                                className="mb-2"
                                style={{fontSize: 36, color: "var(--brand-primary)"}}
                            >
                                🔍
                            </div>
                            <h3 className="h4 fw-bold mb-2 text-brand">
                                Context-Aware Suggestions
                            </h3>
                            <div className="text-muted">
                                AI analyzes cart, product, and customer data to surface
                                hyper-relevant items—no guesswork.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div
                                className="mb-2"
                                style={{fontSize: 36, color: "var(--brand-primary)"}}
                            >
                                ⚡
                            </div>
                            <h3 className="h4 fw-bold mb-2 text-brand">
                                Real-Time Performance
                            </h3>
                            <div className="text-muted">
                                Sub-200ms latency means recommendations load instantly at every
                                touchpoint—PDP, cart, or checkout.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div
                                className="mb-2"
                                style={{fontSize: 36, color: "var(--brand-primary)"}}
                            >
                                📈
                            </div>
                            <h3 className="h4 fw-bold mb-2 text-brand">
                                Measurable Uplift
                            </h3>
                            <div className="text-muted">
                                Track CTR, AOV, and conversion impact. Run A/B tests to prove
                                ROI and optimize strategies.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-white py-5 border-top border-bottom">
                <div className="container-xl">
                    <h2 className="h2 fw-bold text-center mb-5 text-brand">
                        How It Works
                    </h2>
                    <div className="row gx-5 gy-4 align-items-center">
                        {[
                            {
                                step: 1,
                                title: "Embed Subera",
                                desc: "Install via Shopify, Stripe, or JS SDK in minutes.",
                            },
                            {
                                step: 2,
                                title: "Train AI",
                                desc: "Ingest catalog & order data to power recommendations.",
                            },
                            {
                                step: 3,
                                title: "Serve in Real Time",
                                desc: "Recommendations appear instantly on PDP, cart & checkout.",
                            },
                            {
                                step: 4,
                                title: "Track & Optimize",
                                desc: "Monitor CTR, AOV uplift, and refine with A/B testing.",
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
                  <span className="text-white display-5 fw-bold">
                    {s.step}
                  </span>
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
                            src="/img/mockups/ai-cart-upsell.png"
                            alt="AI Upsell Demo"
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
                                What shoppers see
                            </div>
                            <ul className="list-unstyled mb-0" style={{fontSize: "1.06rem"}}>
                                <li className="mb-2">• “Complete the look” bundles</li>
                                <li className="mb-2">• Cart add-ons like drinks or chargers</li>
                                <li className="mb-2">• Bought-together insights surfaced live</li>
                                <li className="mb-2">• Personalized suggestions per shopper</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="bg-white border-top py-6">
                <div className="container-xl">
                    <h3 className="h4 fw-bold text-center mb-5 text-brand">
                        Loved by Merchants
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
                                    “Subera AI increased our AOV by 18% within the first month.
                                    The upsells feel natural, not pushy.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Glowify Cosmetics</div>
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
                                    “We bundle meals with drinks and desserts—our guests love it
                                    and our sales prove it.”
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
                <h2 className="display-6 fw-bold mb-3 text-brand">
                    Ready to Boost Your Sales?
                </h2>
                <p
                    className="lead mb-4"
                    style={{
                        maxWidth: 480,
                        margin: "0 auto",
                        color: "rgba(var(--brand-secondary-rgb), .9)",
                    }}
                >
                    Start free and see why Subera AI is the easiest way to grow AOV and
                    conversions with intelligent recommendations.
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
