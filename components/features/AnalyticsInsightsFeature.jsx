import Link from "next/link";

export default function AnalyticsInsightsFeature() {
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
                style={{background: "var(--brand-secondary)", color: "#fff", fontSize: "1rem"}}
            >
              Feature
            </span>
                        <h1
                            className="display-4 fw-bold mb-3"
                            style={{color: "var(--brand-secondary)", letterSpacing: "-.01em"}}
                        >
                            Analytics & Insights<br/>Measure Uplift, Prove ROI
                        </h1>
                        <p
                            className="lead mb-4"
                            style={{maxWidth: 520, color: "rgba(var(--brand-secondary-rgb), .9)"}}
                        >
                            Track CTR, AOV uplift, attach rate, and incremental revenue from each recommendation
                            placement.
                            <br/>
                            <span className="fw-semibold" style={{color: "var(--brand-secondary)"}}>
                From visibility to action—optimize what drives revenue.
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
                            Real-time telemetry with{" "}
                            <span className="fw-semibold"
                                  style={{color: "var(--brand-primary)"}}>P95 &lt; 200ms</span>{" "}
                            delivery and per-placement attribution.
                        </div>
                    </div>

                    <div className="flex-grow-0 d-flex justify-content-center">
                        <img
                            src="/img/mockups/analytics-insights.png"
                            alt="Subera Analytics & Insights dashboard"
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
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>📊</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">AOV & CTR at a Glance</h3>
                            <div className="text-muted">
                                See clicks, views, conversions, and AOV uplift per placement (PDP, Cart, Checkout) and
                                per segment.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>🧪</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Built-in A/B Testing</h3>
                            <div className="text-muted">
                                Run split tests on placements, models, and bundles. Attribute incremental revenue with
                                confidence.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>🔎</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Cohorts & Attribution</h3>
                            <div className="text-muted">
                                Break down by device, channel, SKU, and cohort. Expose revenue attribution APIs for BI
                                tools.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-white py-5 border-top border-bottom">
                <div className="container-xl">
                    <h2 className="h2 fw-bold text-center mb-5 text-brand">How Insights Work</h2>
                    <div className="row gx-5 gy-4 align-items-center">
                        {[
                            {
                                step: 1,
                                title: "Capture Events",
                                desc: "Client & server SDKs stream views, clicks, adds, and orders."
                            },
                            {
                                step: 2,
                                title: "Attribute Revenue",
                                desc: "Per-placement, per-recommendation attribution models."
                            },
                            {
                                step: 3,
                                title: "Analyze & Test",
                                desc: "Dashboards, A/B testing, cohorts, and anomaly alerts."
                            },
                            {
                                step: 4,
                                title: "Optimize Fast",
                                desc: "Tune rules, placements, and incentives based on ROI."
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

            {/* DEMO / DASHBOARD PREVIEW */}
            <section className="container-xl py-7">
                <div className="row gy-5 align-items-center">
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <img
                            src="/img/mockups/analytics-dashboard.png"
                            alt="Analytics dashboard preview"
                            className="rounded-3 shadow-soft"
                            style={{width: "min(650px, 60vw)", background: "#fff"}}
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <div
                            className="rounded-4 shadow-soft border"
                            style={{background: "var(--brand-secondary-accent)", padding: "2rem 1.5rem"}}
                        >
                            <div className="h5 fw-bold mb-2 text-brand">Metrics You’ll Track</div>
                            <ul className="list-unstyled mb-0" style={{fontSize: "1.06rem"}}>
                                <li className="mb-2">• CTR, CVR, AOV uplift per placement</li>
                                <li className="mb-2">• Attach rate & bundle take-rate</li>
                                <li className="mb-2">• Incremental revenue & margin impact</li>
                                <li className="mb-2">• Latency (P50/P95) & error budgets</li>
                                <li className="mb-2">• Cohorts by device, channel, campaign</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF / TESTIMONIALS */}
            <section className="bg-white border-top py-6">
                <div className="container-xl">
                    <h3 className="h4 fw-bold text-center mb-5 text-brand">Teams Ship Smarter with Data</h3>
                    <div className="row gx-5 gy-4 justify-content-center">
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “Attribution made the ROI obvious—AOV up 14% and we doubled down on the best
                                    placements.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">MetroWear</div>
                                <div className="text-muted small">Amsterdam, NL</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “The built-in A/B testing let us iterate weekly. Clear wins, no guesswork.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Nexa Pantry</div>
                                <div className="text-muted small">Dhaka, BD</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-xl py-7 text-center">
                <h2 className="display-6 fw-bold mb-3 text-brand">Ready to Prove Uplift?</h2>
                <p
                    className="lead mb-4"
                    style={{maxWidth: 520, margin: "0 auto", color: "rgba(var(--brand-secondary-rgb), .9)"}}
                >
                    Start free and see how Subera’s Analytics & Insights help you prioritize what truly moves revenue.
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
