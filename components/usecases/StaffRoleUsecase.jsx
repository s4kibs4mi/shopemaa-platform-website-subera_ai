import Link from "next/link";

export default function StaffRolesUsecase() {
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
                            Staff & Roles<br/>with Permissions that Fit Your Floor
                        </h1>
                        <p className="lead mb-4" style={{maxWidth: 560, color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                            Onboard teams fast, assign role‑based access, and keep service tight with approvals,
                            activity logs, and
                            smart shift tools—across one or many branches.
                            <br/>
                            <span className="fw-semibold" style={{color: "var(--brand-secondary)"}}>
                Admin, Manager, Waiter, Kitchen—only the right actions for each role.
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
                            Trusted by teams in{" "}
                            <span className="fw-semibold" style={{color: "var(--brand-primary)"}}>Dhaka</span>,{" "}
                            <span className="fw-semibold" style={{color: "var(--brand-primary)"}}>Amsterdam</span>, and
                            beyond.
                        </div>
                    </div>

                    <div className="flex-grow-0 d-flex justify-content-center">
                        <img
                            src="/img/mockups/staff-roles-mockup.png"
                            alt="SpoonSync Staff & Roles Demo"
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
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>🔐</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Role‑Based Permissions</h3>
                            <div className="text-muted">
                                Lock down actions by role—voids, discounts, menu edits, payouts—reduce mistakes and
                                shrink risk.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>🕒</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Shifts & Approvals</h3>
                            <div className="text-muted">
                                Clock‑in/out, section assignments, and manager approvals for comps/voids—kept in one
                                clean log.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>📜</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Audit Trail & Activity</h3>
                            <div className="text-muted">
                                See who did what and when—menu changes, discounts, order edits—exportable for reviews
                                and payroll.
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
                            <div className="fw-bold mb-1">Define Roles</div>
                            <div className="text-muted">Choose presets (Admin, Manager, Waiter, Kitchen) or create
                                custom roles.
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
                            >
                                <span className="text-white display-5 fw-bold">2</span>
                            </div>
                            <div className="fw-bold mb-1">Assign Access</div>
                            <div className="text-muted">Grant fine‑grained permissions—menus, orders, discounts,
                                payouts, reports.
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
                            >
                                <span className="text-white display-5 fw-bold">3</span>
                            </div>
                            <div className="fw-bold mb-1">Run Shifts</div>
                            <div className="text-muted">Clock‑in/out, assign sections, and handle approvals—all logged
                                automatically.
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
                            >
                                <span className="text-white display-5 fw-bold">4</span>
                            </div>
                            <div className="fw-bold mb-1">Track & Improve</div>
                            <div className="text-muted">Review activity, export logs, and refine permissions—per branch
                                or globally.
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
                            src="/img/mockups/roles-permissions-mockup.png"
                            alt="Roles & Permissions screen"
                            className="rounded-3 shadow-soft"
                            style={{width: "min(650px, 60vw)", background: "#fff"}}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <div
                            className="rounded-4 shadow-soft border"
                            style={{background: "var(--brand-secondary-accent)", padding: "2rem 1.5rem"}}
                        >
                            <div className="h5 fw-bold mb-2 text-brand">What managers see</div>
                            <ul className="list-unstyled mb-0" style={{fontSize: "1.06rem"}}>
                                <li className="mb-2">• Role presets + custom roles</li>
                                <li className="mb-2">• Approvals for voids/discounts</li>
                                <li className="mb-2">• Shift logs, clock‑ins, and activity exports</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF / TESTIMONIALS */}
            <section className="bg-white border-top py-6">
                <div className="container-xl">
                    <h3 className="h4 fw-bold text-center mb-5 text-brand">Loved by Managers & Owners</h3>
                    <div className="row gx-5 gy-4 justify-content-center">
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “We tightened permissions across branches in a day. Approvals and logs keep audits
                                    painless.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Oak & Ember</div>
                                <div className="text-muted small">Dhaka, Bangladesh</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “New hires ramp faster. They see only what they need—no accidental edits during
                                    service.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Blue Canal Brasserie</div>
                                <div className="text-muted small">Amsterdam, Netherlands</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-xl py-7 text-center">
                <h2 className="display-6 fw-bold mb-3 text-brand">Ready to Run Tighter Shifts?</h2>
                <p className="lead mb-4"
                   style={{maxWidth: 560, margin: "0 auto", color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                    Start free and see how SpoonSync streamlines onboarding, permissions, and shift control—at one venue
                    or many.
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
