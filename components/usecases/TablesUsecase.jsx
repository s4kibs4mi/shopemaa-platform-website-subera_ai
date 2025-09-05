import Link from "next/link";

export default function TablesUsecase() {
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
                            Tables & Reservations<br/>with Table‑Side Ordering
                        </h1>
                        <p className="lead mb-4" style={{maxWidth: 540, color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                            Map your floor, assign QRs per table, and let guests order right from the seat. Add
                            reservations and
                            waitlists to keep covers flowing—no chaos at the host stand.
                            <br/>
                            <span className="fw-semibold" style={{color: "var(--brand-secondary)"}}>
                Faster seating, fewer mistakes, happier guests.
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
                            src="/img/mockups/tables-floorplan-mockup.png"
                            alt="SpoonSync Tables & Floorplan Demo"
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
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>🗺️</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Visual Floorplan</h3>
                            <div className="text-muted">
                                Drag‑and‑drop tables, sections, and capacity. See occupancy and turns at a glance.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>📱</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Table‑Side QR Ordering</h3>
                            <div className="text-muted">
                                Unique QR per table routes orders to the right KDS with table ID—no mix‑ups, no
                                re‑entry.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>📅</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Reservations & Waitlist</h3>
                            <div className="text-muted">
                                Take bookings online, auto‑confirm with SMS/email, manage no‑shows, and seat faster.
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
                            <div className="fw-bold mb-1">Set the Floor</div>
                            <div className="text-muted">Create sections, tables, capacity, and statuses (Vacant, Seated,
                                Cleaning).
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
                            >
                                <span className="text-white display-5 fw-bold">2</span>
                            </div>
                            <div className="fw-bold mb-1">Assign Table QRs</div>
                            <div className="text-muted">Generate unique QRs per table; orders carry the table ID
                                automatically.
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
                            >
                                <span className="text-white display-5 fw-bold">3</span>
                            </div>
                            <div className="fw-bold mb-1">Take Orders & Bookings</div>
                            <div className="text-muted">Guests scan to order; diners and walk‑ins join the waitlist or
                                reserve times.
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
                            >
                                <span className="text-white display-5 fw-bold">4</span>
                            </div>
                            <div className="fw-bold mb-1">Seat, Serve, Turn</div>
                            <div className="text-muted">Notify when ready, sync with KDS, and track table turns and
                                dwell time.
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
                            src="/img/mockups/reservations-mockup.png"
                            alt="Reservations & Waitlist screen"
                            className="rounded-3 shadow-soft"
                            style={{width: "min(650px, 60vw)", background: "#fff"}}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <div
                            className="rounded-4 shadow-soft border"
                            style={{background: "var(--brand-secondary-accent)", padding: "2rem 1.5rem"}}
                        >
                            <div className="h5 fw-bold mb-2 text-brand">What hosts & servers see</div>
                            <ul className="list-unstyled mb-0" style={{fontSize: "1.06rem"}}>
                                <li className="mb-2">• Live floor map with table status</li>
                                <li className="mb-2">• Reservations, waitlist, and ETA tracking</li>
                                <li className="mb-2">• Table‑ID orders and reorder from seat</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF / TESTIMONIALS */}
            <section className="bg-white border-top py-6">
                <div className="container-xl">
                    <h3 className="h4 fw-bold text-center mb-5 text-brand">Loved by Hosts & FOH Teams</h3>
                    <div className="row gx-5 gy-4 justify-content-center">
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “QR per table ended order mix‑ups and our turns are cleaner—guests reorder without
                                    flagging staff.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Riverside Bistro</div>
                                <div className="text-muted small">Dhaka, Bangladesh</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “Reservations + waitlist in one view. No‑show handling and SMS confirm cut walkaways
                                    dramatically.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Canal House Cafe</div>
                                <div className="text-muted small">Amsterdam, Netherlands</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-xl py-7 text-center">
                <h2 className="display-6 fw-bold mb-3 text-brand">Ready to Seat Faster & Serve Smarter?</h2>
                <p className="lead mb-4"
                   style={{maxWidth: 540, margin: "0 auto", color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                    Start free and see how SpoonSync brings table‑side ordering, reservations, and floor control into
                    one flow.
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
