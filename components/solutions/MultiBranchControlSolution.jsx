import Link from "next/link";

export default function MultiBranchControlSolution() {
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
                <div className="container-xl d-flex flex-column flex-md-row align-items-center justify-content-between gap-5">
                    <div className="flex-grow-1 text-center text-md-start">
            <span
                className="badge rounded-pill mb-2"
                style={{ background: "var(--brand-secondary)", color: "#fff", fontSize: "1rem" }}
            >
              Solution
            </span>
                        <h1
                            className="display-4 fw-bold mb-3"
                            style={{ color: "var(--brand-secondary)", letterSpacing: "-.01em" }}
                        >
                            Multi‑Branch Control
                        </h1>
                        <p className="lead mb-4" style={{ maxWidth: 540, color: "rgba(var(--brand-secondary-rgb), .9)" }}>
                            Run one brand across many locations with centralized menus, pricing zones, user roles, and consolidated
                            reports—while keeping local control where it matters.
                        </p>
                        <div className="d-flex flex-column flex-sm-row gap-3 mb-3 justify-content-center justify-content-md-start">
                            <a
                                href="/signup"
                                className="btn btn-primary px-5 py-3 fw-bold cta-btn"
                                style={{ borderRadius: 32, fontSize: "1.15rem" }}
                            >
                                Try It Free
                            </a>
                            <a
                                href="/contact"
                                className="btn btn-outline-primary px-5 py-3 fw-bold cta-btn-outline"
                                style={{ borderRadius: 32, fontSize: "1.15rem" }}
                            >
                                Talk to Sales
                            </a>
                        </div>
                        <div className="text-muted small mt-1">
                            Designed for groups, franchises, and fast‑growing restaurant brands.
                        </div>
                    </div>

                    <div className="flex-grow-0 d-flex justify-content-center">
                        <img
                            src="/spoonsync/multibranch-hero.png"
                            alt="SpoonSync multi-branch control"
                            className="rounded-4 shadow-soft"
                            style={{ width: "min(360px, 82vw)", background: "#fff" }}
                        />
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="container-xl py-6">
                <div className="row gy-5">
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{ fontSize: 36, color: "var(--brand-primary)" }}>🧭</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Centralized Menus</h3>
                            <div className="text-muted">
                                Maintain a master menu and push changes to selected branches. Allow local availability and 86s without
                                breaking brand consistency.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{ fontSize: 36, color: "var(--brand-primary)" }}>💸</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Price Zones & Taxes</h3>
                            <div className="text-muted">
                                Set regional price books, taxes, and service fees. Schedule promos across branches with start/stop
                                times that respect local hours.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{ fontSize: 36, color: "var(--brand-primary)" }}>👥</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Org Roles & Access</h3>
                            <div className="text-muted">
                                HQ, regional manager, branch manager, staff—fine‑grained permissions and audit trails across your org.
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
                        {[
                            {
                                n: 1,
                                t: "Connect Branches",
                                d: "Create locations or import from POS. Map hours, sections, and stations.",
                            },
                            {
                                n: 2,
                                t: "Define Controls",
                                d: "Choose what’s centralized vs. local: menus, pricing, modifiers, fees.",
                            },
                            {
                                n: 3,
                                t: "Assign Roles",
                                d: "HQ sets policy; regional/branch managers get scoped permissions.",
                            },
                            {
                                n: 4,
                                t: "Monitor & Optimize",
                                d: "View consolidated reports, compare branches, and roll out changes fast.",
                            },
                        ].map((s) => (
                            <div key={s.n} className="col-12 col-md-3 text-center">
                                <div
                                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                    style={{ width: 64, height: 64, background: "var(--brand-secondary)" }}
                                >
                                    <span className="text-white display-5 fw-bold">{s.n}</span>
                                </div>
                                <div className="fw-bold mb-1">{s.t}</div>
                                <div className="text-muted">{s.d}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DEMO / SCREENS */}
            <section className="container-xl py-7">
                <div className="row gy-5 align-items-center">
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <img
                            src="/spoonsync/multibranch-dashboard.png"
                            alt="Multi-branch dashboard"
                            className="rounded-3 shadow-soft"
                            style={{ width: "min(650px, 60vw)", background: "#fff" }}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <div
                            className="rounded-4 shadow-soft border"
                            style={{ background: "var(--brand-secondary-accent)", padding: "2rem 1.5rem" }}
                        >
                            <div className="h5 fw-bold mb-2 text-brand">What HQ controls</div>
                            <ul className="list-unstyled mb-3" style={{ fontSize: "1.06rem" }}>
                                <li className="mb-2">• Master menu, categories, and brand templates</li>
                                <li className="mb-2">• Price books, taxes, fees, and promos</li>
                                <li className="mb-2">• Org roles, permissions, and policies</li>
                                <li className="mb-2">• Consolidated analytics by region/branch</li>
                            </ul>
                            <div className="h6 fw-bold mb-1 text-brand">What branches control</div>
                            <ul className="list-unstyled mb-0" style={{ fontSize: "1.06rem" }}>
                                <li className="mb-1">• Local availability & 86 items</li>
                                <li className="mb-1">• Daypart specials & photos</li>
                                <li className="mb-1">• Staff, sections, and KDS routing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="bg-white border-top py-6">
                <div className="container-xl">
                    <h3 className="h4 fw-bold text-center mb-5 text-brand">Loved by Groups & Franchises</h3>
                    <div className="row gx-5 gy-4 justify-content-center">
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{ fontSize: 24, color: "var(--brand-primary)" }}>★ ★ ★ ★ ★</div>
                                <div className="mb-2">
                                    “HQ can push seasonal updates to 12 branches at once. Local teams keep control of availability. Perfect
                                    balance.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Riverstone Group</div>
                                <div className="text-muted small">Dhaka, Bangladesh</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{ fontSize: 24, color: "var(--brand-primary)" }}>★ ★ ★ ★ ★</div>
                                <div className="mb-2">
                                    “Price zones + regional promos saved hours every week. Rollouts are finally painless.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Canal Street Kitchens</div>
                                <div className="text-muted small">Amsterdam, Netherlands</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-xl py-7 text-center">
                <h2 className="display-6 fw-bold mb-3 text-brand">Ready to Scale Your Brand?</h2>
                <p
                    className="lead mb-4"
                    style={{ maxWidth: 560, margin: "0 auto", color: "rgba(var(--brand-secondary-rgb), .9)" }}
                >
                    Launch new branches faster, keep menus consistent, and compare performance across locations—all in SpoonSync.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <a
                        href="/signup"
                        className="btn btn-primary px-5 py-3 fw-bold cta-btn"
                        style={{ borderRadius: 32, fontSize: "1.12rem" }}
                    >
                        Try It Free
                    </a>
                    <a
                        href="/contact"
                        className="btn btn-outline-primary px-5 py-3 fw-bold cta-btn-outline"
                        style={{ borderRadius: 32, fontSize: "1.12rem" }}
                    >
                        Talk to Sales
                    </a>
                </div>
            </section>
        </main>
    );
}
