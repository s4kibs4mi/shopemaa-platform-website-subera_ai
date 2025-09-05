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
              style={{background: "var(--brand-secondary)", color: "#fff", fontSize: "1rem"}}
          >
            About Us
          </span>
                    <h1 className="display-4 fw-bold mb-3 text-brand-main">
                        Your Restaurant, Just Smarter.
                    </h1>
                    <p className="lead mb-0 mx-auto"
                       style={{maxWidth: 580, color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                        SpoonSync streamlines restaurant operations with QR menus, ordering & KDS, tables, staff roles,
                        and insights—so teams run smoother and guests get exceptional service.
                    </p>
                </div>
            </section>

            {/* OUR STORY */}
            <section className="container-xl py-7">
                <div className="row align-items-center gy-5">
                    <div className="col-12 col-md-6">
                        <div className="bg-white rounded-4 p-5 shadow-soft">
                            <h2 className="h4 fw-bold mb-3 text-brand-main">Our Story</h2>
                            <p className="mb-4" style={{color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                                We started SpoonSync to help restaurants replace fragmented tools with one
                                platform—faster,
                                smarter, and more sustainable. From independent cafes to multi‑branch groups, we bring
                                menus,
                                orders, tables, and staff together in a single, elegant workflow.
                            </p>
                            <p style={{color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                                Built by a distributed team with roots in Bangladesh and Europe, we’re focused on
                                practical
                                innovation that teams can adopt in minutes and trust every day of service.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <img
                            src="/assets/about-team-collab.png"
                            alt="SpoonSync team collaboration"
                            className="rounded-4 shadow-soft"
                            style={{width: "min(350px, 85vw)", background: "#fff"}}
                        />
                    </div>
                </div>
            </section>

            {/* VALUES & MISSION */}
            <section className="container-xl py-5">
                <div className="row gy-5 text-center">
                    <div className="col-12 col-md-4">
                        <div className="rounded-4 p-4 shadow-soft bg-white h-100">
                            <div className="mb-2" style={{fontSize: 38}}><span className="text-brand">🌱</span></div>
                            <div className="fw-bold mb-2 text-brand-main">Sustainability</div>
                            <div className="text-muted">
                                Digital menus and workflows reduce paper waste and reprints—good for your budget and the
                                planet.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="rounded-4 p-4 shadow-soft bg-white h-100">
                            <div className="mb-2" style={{fontSize: 38}}><span className="text-brand">⚡️</span></div>
                            <div className="fw-bold mb-2 text-brand-main">Innovation</div>
                            <div className="text-muted">
                                A modern stack with AI‑assisted setup, KDS, and real‑time insights—built for busy
                                service.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="rounded-4 p-4 shadow-soft bg-white h-100">
                            <div className="mb-2" style={{fontSize: 38}}><span className="text-brand">🤝</span></div>
                            <div className="fw-bold mb-2 text-brand-main">People First</div>
                            <div className="text-muted">
                                We put teams and guests at the center—reliable tools, clear roles, and service that
                                scales.
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
                        <p style={{color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                            We’re a distributed, multicultural team working across Bangladesh, Europe, and beyond—united
                            by a
                            love for great product and measurable customer impact.
                            <br/><br/>
                            Want to join us? We’re always looking for smart, curious people to help build the future of
                            restaurant operations.
                        </p>
                        <div className="d-flex gap-3 mt-3">
                            <Link href="/careers" className="btn btn-primary fw-bold px-4 py-2 cta-btn"
                                  style={{borderRadius: 28}}>
                                View Careers
                            </Link>
                            <Link href="/contact" className="btn btn-outline-primary fw-bold px-4 py-2 cta-btn-outline"
                                  style={{borderRadius: 28}}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 text-center">
                        <img
                            src="/assets/about-team-avatar.png"
                            alt="SpoonSync team"
                            className="rounded-circle shadow-soft"
                            style={{width: 150, height: 150, objectFit: "cover", background: "#f5f7f9"}}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
