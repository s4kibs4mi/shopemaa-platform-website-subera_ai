import Link from "next/link";

export default function CompletePackageFeature() {
    return (
        <main className="bg-white">
            {/* HERO SECTION */}
            <section
                className="py-5 py-md-7"
                style={{
                    background:
                        "linear-gradient(120deg, var(--brand-secondary-accent) 60%, #fff 100%)",
                    borderBottom: "1px solid rgba(var(--brand-secondary-rgb), 0.12)",
                }}>
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
                            Complete-the-Package<br/>Bundles that Finish the Cart
                        </h1>
                        <p
                            className="lead mb-4"
                            style={{maxWidth: 520, color: "rgba(var(--brand-secondary-rgb), .9)"}}
                        >
                            Auto-build bundles that make sense—outfits, meal sets, recipe kits,
                            or multi-format digital packs—so shoppers check out with everything
                            they need.
                            <br/>
                            <span className="fw-semibold" style={{color: "var(--brand-secondary)"}}>
                Fewer steps. Bigger baskets. Happier customers.
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
                            Trusted by merchants in{" "}
                            <span className="fw-semibold" style={{color: "var(--brand-primary)"}}>
                Retail
              </span>
                            ,{" "}
                            <span className="fw-semibold" style={{color: "var(--brand-primary)"}}>
                Restaurants
              </span>{" "}
                            &{" "}
                            <span className="fw-semibold" style={{color: "var(--brand-primary)"}}>
                Grocery
              </span>
                            .
                        </div>
                    </div>

                    <div className="flex-grow-0 d-flex justify-content-center">
                        <img
                            src="/img/mockups/complete-package.png"
                            alt="Complete the Package bundle demo"
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
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>🧩</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Prebuilt or Dynamic Bundles</h3>
                            <div className="text-muted">
                                Configure fixed kits or let AI assemble bundles on the fly based on context and
                                availability.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>📦</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Inventory & Allergen Aware</h3>
                            <div className="text-muted">
                                Respect stock, dietary rules, and compatibility so every bundle is actually fulfillable
                                and safe.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary)"}}>💸</div>
                            <h3 className="h4 fw-bold mb-2 text-brand">Margin-Smart Pricing</h3>
                            <div className="text-muted">
                                Auto-apply bundle pricing, targets, or incentives to maximize contribution margin—not
                                just revenue.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-white py-5 border-top border-bottom">
                <div className="container-xl">
                    <h2 className="h2 fw-bold text-center mb-5 text-brand">How Complete-the-Package Works</h2>
                    <div className="row gx-5 gy-4 align-items-center">
                        {[
                            {
                                step: 1,
                                title: "Define Bundle Logic",
                                desc: "Set rules or templates (e.g., main + side + drink, top + bottom + shoes)."
                            },
                            {
                                step: 2,
                                title: "Blend AI + Rules",
                                desc: "Models pick the best components while honoring inventory, allergens, and margins."
                            },
                            {
                                step: 3,
                                title: "Render Anywhere",
                                desc: "Show bundles on PDP, cart, checkout, or email in <200ms."
                            },
                            {
                                step: 4,
                                title: "Price & Prove ROI",
                                desc: "Apply incentives and measure basket uplift and contribution."
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
                            src="/img/mockups/complete-package-cart.png"
                            alt="Bundle widget preview"
                            className="rounded-3 shadow-soft"
                            style={{width: "min(650px, 60vw)", background: "#fff"}}
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <div
                            className="rounded-4 shadow-soft border"
                            style={{background: "var(--brand-secondary-accent)", padding: "2rem 1.5rem"}}
                        >
                            <div className="h5 fw-bold mb-2 text-brand">Bundle Examples</div>
                            <ul className="list-unstyled mb-0" style={{fontSize: "1.06rem"}}>
                                <li className="mb-2">• Outfit: jacket + tee + jeans + sneakers (retail)</li>
                                <li className="mb-2">• Meal: main + side + drink + dessert (restaurants)</li>
                                <li className="mb-2">• Recipe: pasta + sauce + cheese + salad (grocery)</li>
                                <li className="mb-2">• Digital: ebook + audiobook + worksheets (digital)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF / TESTIMONIALS */}
            <section className="bg-white border-top py-6">
                <div className="container-xl">
                    <h3 className="h4 fw-bold text-center mb-5 text-brand">Merchants See Real Uplift</h3>
                    <div className="row gx-5 gy-4 justify-content-center">
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “Outfit bundles simplified discovery and raised AOV by 17%. Customers love the
                                    finished look.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Northline Apparel</div>
                                <div className="text-muted small">Rotterdam, NL</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="bg-white rounded-4 p-4 shadow-soft h-100">
                                <div className="mb-3" style={{fontSize: 24, color: "var(--brand-primary)"}}>★ ★ ★ ★ ★
                                </div>
                                <div className="mb-2">
                                    “Meal bundles made checkout faster and tickets larger—no extra clicks or friction.”
                                </div>
                                <div className="fw-bold mt-2 text-brand">Kitchen Lane</div>
                                <div className="text-muted small">Dhaka, BD</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-xl py-7 text-center">
                <h2 className="display-6 fw-bold mb-3 text-brand">Ready to Complete Every Order?</h2>
                <p
                    className="lead mb-4"
                    style={{maxWidth: 520, margin: "0 auto", color: "rgba(var(--brand-secondary-rgb), .9)"}}
                >
                    Start free and see how Subera AI bundles turn one-item carts into full,
                    satisfying purchases.
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
