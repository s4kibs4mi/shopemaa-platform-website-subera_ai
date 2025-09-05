import Link from "next/link";

export default function AnalyticsReportsUsecase() {
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
                <div className="container-xl d-flex flex-column flex-md-row align-items-center justify-content-between gap-5">
                    <div className="flex-grow-1 text-center text-md-start">
            <span
                className="badge rounded-pill mb-2"
                style={{ background: "var(--brand-secondary)", color: "#fff", fontSize: "1rem" }}
            >
              Use Case
            </span>
                        <h1
                            className="display-4 fw-bold mb-3"
                            style={{ color: "var(--brand-secondary)", letterSpacing: "-.01em" }}
                        >
                            Analytics & Reports<br />to Run a Smarter Operation
                        </h1>
                        <p className="lead mb-4" style={{ maxWidth: 560, color: "rgba(var(--brand-secondary-rgb), .9)" }}>
                            Understand sales, covers, item performance, and peak hours at a glance. Drill down by branch, section,
                            staff, or channel—then export or schedule reports.
                            <br />
                            <span className="fw-semibold" style={{ color: "var(--brand-secondary)" }}>
                Insights that turn data into faster turns and higher revenue.
              </span>
                        </p>
                        <div className="d-flex flex-column flex-sm-row gap-3 mb-3 justify-content-center justify-content-md-start">
                            <a
                                href="/signup"
                                className="btn btn-primary px-5 py-3 fw-bold cta-btn"
                                style={{ borderRadius: 32, fontSize: "1.15rem", letterSpacing: ".01em" }}
                            >
                                Get Started Free
                            </a>
                            <a
                                href="/contact"
                                className="btn btn-outline-primary px-5 py-3 fw-bold cta-btn-outline"
                                style={{ borderRadius: 32, fontSize: "1.15rem" }}
                            >
                                Contact Sales
                            </a>
                        </div>
                        <div className="text-muted small mt-1">
                            Trusted by data‑driven teams in{" "}
                            <span className="fw-semibold" style={{ color: "var(--brand-primary)" }}>Dhaka</span>,{" "}
                            <span className="fw-semibold" style={{ color: "var(--brand-primary)" }}>Amsterdam</span>, and beyond.
                        </div>
                    </div>

                    <div className="flex-grow-0 d-flex justify-content-center">
                        <img
                            src="/img/mockups/analytics-dashboard-mockup.png"
                            alt="SpoonSync Analytics Dashboard"
                            className="rounded-4 shadow-soft"
                            style={{ width: "min(360px, 82vw)", background: "#fff" }}
                        />
                    </div>
                </div>
            </section>

            {/* BENEFITS / VALUE PROPS */}
            <section className="container-xl py-6">
                <div className="row gy-5">
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{ fontSize: 36, color: "var(--brand-primary)" }}>📊</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Zero‑Setup Dashboards</h3>
                            <div className="text-muted">
                                Sales, covers, AOV, peak hours, item heatmaps—ready on day one, updated in real time.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{ fontSize: 36, color: "var(--brand-primary)" }}>🧭</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Slice & Compare</h3>
                            <div className="text-muted">
                                Filter by date range, branch, section, staff, or channel (QR, waiter, takeout) and compare periods.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{ fontSize: 36, color: "var(--brand-primary)" }}>📤</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Exports & Scheduled Reports</h3>
                            <div className="text-muted">
                                Export CSV/PDF, email weekly performance to managers, or pipe data to BI via API.
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
                                style={{ width: 64, height: 64, background: "var(--brand-secondary)" }}
                            >
                                <span className="text-white display-5 fw-bold">1</span>
                            </div>
                            <div className="fw-bold mb-1">Connect Sources</div>
                            <div className="text-muted">Orders, tables, KDS, payments—SpoonSync unifies them automatically.</div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{ width: 64, height: 64, background: "var(--brand-secondary)" }}
                            >
                                <span className="text-white display-5 fw-bold">2</span>
                            </div>
                            <div className="fw-bold mb-1">Choose KPIs</div>
                            <div className="text-muted">Track sales, AOV, table turns, prep time, top items, voids, and more.</div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{ width: 64, height: 64, background: "var(--brand-secondary)" }}
                            >
                                <span className="text-white display-5 fw-bold">3</span>
                            </div>
                            <div className="fw-bold mb-1">Drill & Compare</div>
                            <div className="text-muted">Filter by branch or role; compare weeks and spot trends in seconds.</div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{ width: 64, height: 64, background: "var(--brand-secondary)" }}
                            >
                                <span className="text-white display-5 fw-bold">4</span>
                            </div>
                            <div className="fw-bold mb-1">Share & Act</div>
                            <div className="text-muted">Schedule emails, export reports, or trigger automations via webhooks.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEMO / SCREENS */}
            <section className="container-xl py-7">
                <div className="row gy-5 align-items-center">
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <img
                            src="/img/mockups/reports-breakdown-mockup.png"
                            alt="Reports & Breakdown screen"
                            className="rounded-3 shadow-soft"
                            style={{ width: "min(650px, 60vw)", background: "#fff" }}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <div
                            className="rounded-4 shadow-soft border"
                            style={{ background: "var(--brand-secondary-accent)", padding: "2rem 1.5rem" }}
                        >
                            <div className="h5 fw-bold mb-2 text-brand">What managers see</div>
                            <ul className="list-unstyled mb-0" style={{ fontSize: "1.06rem" }}>
                                <li className="mb-2">• Real‑time KPIs and historical trends</li>
                                <li className="mb-2">• Item, category, and station performance</li>
                                <li className="mb-2">• Export, schedule, and API access to raw data</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF / TESTIMONIALS */}
            <section className="bg-white border-top py-6">
                <div className="container-xl">
                    <h3 className="h4 fw-bold text-center mb-5 text-brand">Loved by Owners & Operators</h3>
                    <div className="row gx-5 gy-4 justify-content-center">
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{ fontSize: 24, color: "var(--brand-primary)" }}>★ ★ ★ ★ ★</div>
                                <div className="mb-2">
                                    “The week‑over‑week view shows exactly when we need more staff. Peaks and slow hours are obvious.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Banyan Kitchen</div>
                                <div className="text-muted small">Dhaka, Bangladesh</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{ fontSize: 24, color: "var(--brand-primary)" }}>★ ★ ★ ★ ★</div>
                                <div className="mb-2">
                                    “Exports drop straight into our BI tool. Category performance helped us redesign the menu.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Keizersgracht Deli</div>
                                <div className="text-muted small">Amsterdam, Netherlands</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-xl py-7 text-center">
                <h2 className="display-6 fw-bold mb-3 text-brand">Ready to Turn Data into Action?</h2>
                <p className="lead mb-4" style={{ maxWidth: 560, margin: "0 auto", color: "rgba(var(--brand-secondary-rgb), .9)" }}>
                    Start free and see how SpoonSync surfaces the metrics that matter—so you can staff smarter and sell more.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <a
                        href="/signup"
                        className="btn btn-primary px-5 py-3 fw-bold cta-btn"
                        style={{ borderRadius: 32, fontSize: "1.12rem" }}
                    >
                        Get Started Free
                    </a>
                    <a
                        href="/contact"
                        className="btn btn-outline-primary px-5 py-3 fw-bold cta-btn-outline"
                        style={{ borderRadius: 32, fontSize: "1.12rem" }}
                    >
                        Contact Sales
                    </a>
                </div>
            </section>
        </main>
    );
}
