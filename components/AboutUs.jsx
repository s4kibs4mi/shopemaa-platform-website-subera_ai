import Link from "next/link";

export default function AboutUs() {
    return (
        <main className="bg-white">
            {/* HERO */}
            <section
                className="py-5 py-md-7"
                style={{
                    background: "linear-gradient(120deg, var(--brand-secondary-accent) 70%, #fff 100%)",
                    borderBottom: "1px solid rgba(var(--brand-secondary-rgb), 0.12)",
                }}
            >
                <div className="container-xl text-center">
          <span
              className="badge rounded-pill mb-2"
              style={{ background: "var(--brand-secondary)", color: "#fff", fontSize: "1rem" }}
          >
            About Us
          </span>
                    <h1 className="display-4 fw-bold mb-3 text-brand-main">
                        Smarter Recommendations. Bigger Baskets.
                    </h1>
                    <p
                        className="lead mb-0 mx-auto"
                        style={{ maxWidth: 580, color: "rgba(var(--brand-secondary-rgb), .9)" }}
                    >
                        Subera AI is the commerce engine for upsell, cross-sell, complete-the-package,
                        and bought-together. Real-time intelligence that lifts AOV, CTR, and revenue—without
                        heavy integration work.
                    </p>
                </div>
            </section>

            {/* OUR STORY */}
            <section className="container-xl py-7">
                <div className="row align-items-center gy-5">
                    <div className="col-12 col-md-6">
                        <div className="bg-white rounded-4 p-5 shadow-soft">
                            <h2 className="h4 fw-bold mb-3 text-brand-main">Our Story</h2>
                            <p className="mb-4" style={{ color: "rgba(var(--brand-secondary-rgb), .9)" }}>
                                We started Subera to help merchants go beyond static “related items.” Shoppers expect
                                context-aware suggestions—so we built an engine that delivers the right upsell, cross-sell,
                                and bundles in under 200ms, tuned for each vertical.
                            </p>
                            <p style={{ color: "rgba(var(--brand-secondary-rgb), .9)" }}>
                                From independent retailers to multi-brand commerce teams, we focus on measurable outcomes:
                                higher AOV, better attach rate, and happier customers. Built by a distributed team across
                                Europe and Asia, we ship practical AI that teams can integrate in minutes and trust every day.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <img
                            src="/subera/about-team-collab.png"
                            alt="Subera AI team collaboration"
                            className="rounded-4 shadow-soft"
                            style={{ width: "min(350px, 85vw)", background: "#fff" }}
                        />
                    </div>
                </div>
            </section>

            {/* VALUES & MISSION */}
            <section className="container-xl py-5">
                <div className="row gy-5 text-center">
                    <div className="col-12 col-md-4">
                        <div className="rounded-4 p-4 shadow-soft bg-white h-100">
                            <div className="mb-2" style={{ fontSize: 38 }}>
                                <span className="text-brand">🎯</span>
                            </div>
                            <div className="fw-bold mb-2 text-brand-main">Outcome-Driven</div>
                            <div className="text-muted">
                                We highlight impact—AOV, CTR uplift, revenue attribution—so you can see exactly what AI contributes.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="rounded-4 p-4 shadow-soft bg-white h-100">
                            <div className="mb-2" style={{ fontSize: 38 }}>
                                <span className="text-brand">⚡️</span>
                            </div>
                            <div className="fw-bold mb-2 text-brand-main">Real-Time Precision</div>
                            <div className="text-muted">
                                Low-latency (<span className="fw-semibold">P95 &lt; 200ms</span>) and context aware—inventory, margin, allergens, and more.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="rounded-4 p-4 shadow-soft bg-white h-100">
                            <div className="mb-2" style={{ fontSize: 38 }}>
                                <span className="text-brand">🤝</span>
                            </div>
                            <div className="fw-bold mb-2 text-brand-main">Merchant-First</div>
                            <div className="text-muted">
                                Simple SDKs, clear controls, and business rules you can adjust without retraining models.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM & CAREERS CTA */}
            <section className="container-xl py-7">
                <div className="row gy-5 align-items-center">
                    <div className="col-12 col-md-7">
                        <h2 className="h4 fw-bold mb-3 text-brand-main">Our Team</h2>
                        <p style={{ color: "rgba(var(--brand-secondary-rgb), .9)" }}>
                            We’re a distributed, multicultural team building AI for commerce with a clear promise:
                            smarter recommendations, bigger baskets. If you care about performance, design, and
                            merchant outcomes, you’ll fit right in.
                            <br />
                            <br />
                            We’re especially excited to meet folks with backgrounds in recommender systems,
                            data engineering, and developer experience.
                        </p>
                        <div className="d-flex gap-3 mt-3">
                            <Link href="/careers" className="btn btn-primary fw-bold px-4 py-2 cta-btn" style={{ borderRadius: 28 }}>
                                View Careers
                            </Link>
                            <Link
                                href="/contact"
                                className="btn btn-outline-primary fw-bold px-4 py-2 cta-btn-outline"
                                style={{ borderRadius: 28 }}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 text-center">
                        <img
                            src="/subera/about-team-avatar.png"
                            alt="Subera AI team"
                            className="rounded-circle shadow-soft"
                            style={{ width: 150, height: 150, objectFit: "cover", background: "#f5f7f9" }}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
