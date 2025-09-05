import Link from "next/link";

export default function DigitalMenuUsecase() {
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
                            Digital Menu<br/>for Restaurants & Cafés
                        </h1>
                        <p className="lead mb-4" style={{maxWidth: 480, color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                            Instantly update your menu, receive feedback, and process orders with a single QR scan.
                            <br/>
                            <span className="fw-semibold" style={{color: "var(--brand-secondary)"}}>
                No more paper menus, no app download required.
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
                            src="/spoonsync/mockup.png"
                            alt="SpoonSync Digital Menu Demo"
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
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>📲</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Instant, Contactless Access</h3>
                            <div className="text-muted">
                                Guests scan, browse, and order on any device. Menus are always up to date—no printing
                                required.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>⚡️</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Easy to Update & Personalize</h3>
                            <div className="text-muted">
                                Change prices, photos, or items in seconds. Highlight today’s specials or hide
                                unavailable dishes instantly.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>📈</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Analytics & Feedback</h3>
                            <div className="text-muted">
                                See what guests view most, track scan trends, and collect instant feedback or reviews
                                from diners.
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
                            <div className="fw-bold mb-1">Create Menu</div>
                            <div className="text-muted">
                                Upload dishes, photos, prices & descriptions in seconds. Use our templates or AI
                                generator.
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
                            >
                                <span className="text-white display-5 fw-bold">2</span>
                            </div>
                            <div className="fw-bold mb-1">Print & Place QR</div>
                            <div className="text-muted">
                                Download & print branded QR codes. Place on tables, windows, or takeaway bags.
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <div
                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style={{width: 64, height: 64, background: "var(--brand-secondary)"}}
                            >
                                <span className="text-white display-5 fw-bold">3</span>
                            </div>
                            <div className="fw-bold mb-1">Scan & Order</div>
                            <div className="text-muted">
                                Guests scan and view your menu, place orders, and even leave feedback. No app needed.
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
                            <div className="text-muted">
                                See analytics: popular items, scan times, guest ratings. Update and optimize in one
                                click.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEMO QR & SCREEN */}
            <section className="container-xl py-7">
                <div className="row gy-5 align-items-center">
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <img
                            src="/img/mockups/digital_menu-mockup.png"
                            alt="Digital Menu QR Example"
                            className="rounded-3 shadow-soft"
                            style={{width: "min(650px, 60vw)", background: "#fff"}}
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <div
                            className="rounded-4 shadow-soft border"
                            style={{background: "var(--brand-secondary-accent)", padding: "2rem 1.5rem"}}
                        >
                            <div className="h5 fw-bold mb-2 text-brand">What diners see</div>
                            <ul className="list-unstyled mb-0" style={{fontSize: "1.06rem"}}>
                                <li className="mb-2">• Your brand, logo & style</li>
                                <li className="mb-2">• Menu items with photos, dietary icons, prices</li>
                                <li className="mb-2">• Feedback, order, and contact in one place</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF / TESTIMONIALS */}
            <section className="bg-white border-top py-6">
                <div className="container-xl">
                    <h3 className="h4 fw-bold text-center mb-5 text-brand">Loved by Restaurants & Cafés</h3>
                    <div className="row gx-5 gy-4 justify-content-center">
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “SpoonSync helps us update menus instantly—guests love the ease and we save on
                                    printing!”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Cafe Blossom</div>
                                <div className="text-muted small">Dhaka, Bangladesh</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “Contactless QR menu is a hit—plus, analytics let us see what dishes people love
                                    most!”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Lakeside Eatery</div>
                                <div className="text-muted small">Utrecht, Netherlands</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-xl py-7 text-center">
                <h2 className="display-6 fw-bold mb-3 text-brand">Ready to Modernize Your Menu?</h2>
                <p className="lead mb-4"
                   style={{maxWidth: 480, margin: "0 auto", color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                    Start free and see why SpoonSync is the easiest way to upgrade your restaurant or café experience.
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
