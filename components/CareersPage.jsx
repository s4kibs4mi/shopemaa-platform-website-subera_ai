import Link from "next/link";
import {IconWorld, IconRocket, IconUsersGroup} from "@tabler/icons-react";

export default function CareersPage() {
    return (
        <main className="bg-white">
            {/* HERO */}
            <section
                className="py-5 py-md-7"
                style={{
                    background: "linear-gradient(120deg, var(--brand-secondary-accent) 65%, #fff 100%)",
                    borderBottom: "1px solid rgba(var(--brand-secondary-rgb), 0.12)"
                }}
            >
                <div className="container-xl text-center">
          <span
              className="badge rounded-pill mb-2"
              style={{background: "var(--brand-secondary)", color: "#fff", fontSize: "1rem"}}
          >
            Careers
          </span>
                    <h1 className="display-4 fw-bold mb-3 text-brand-main">Work With Us</h1>
                    <p className="lead mb-0 mx-auto"
                       style={{maxWidth: 600, color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                        Join SpoonSync and help build the future of QR menus, smart ordering & KDS, tables, staff
                        workflows,
                        and data‑driven hospitality.
                    </p>
                </div>
            </section>

            {/* WHY JOIN US */}
            <section className="container-xl py-7">
                <h2 className="h4 fw-bold text-center mb-5 text-brand-main">Why SpoonSync?</h2>
                <div className="row gy-5 text-center">
                    <div className="col-12 col-md-4">
                        <div className="rounded-4 p-4 shadow-soft bg-white h-100">
                            <IconWorld size={36} className="mb-2" style={{color: "var(--brand-primary)"}}/>
                            <div className="fw-bold mb-2 text-brand-main">Remote‑First Team</div>
                            <div className="text-muted">
                                Work from anywhere. We’re distributed across Bangladesh, Europe, and beyond—with async
                                collaboration
                                and flexible schedules.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="rounded-4 p-4 shadow-soft bg-white h-100">
                            <IconRocket size={36} className="mb-2" style={{color: "var(--brand-primary)"}}/>
                            <div className="fw-bold mb-2 text-brand-main">Build the Future</div>
                            <div className="text-muted">
                                Ship real product: AI‑assisted setup, dynamic menus, KDS, analytics. Your ideas move
                                fast and
                                matter daily.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="rounded-4 p-4 shadow-soft bg-white h-100">
                            <IconUsersGroup size={36} className="mb-2" style={{color: "var(--brand-primary)"}}/>
                            <div className="fw-bold mb-2 text-brand-main">Growth & Belonging</div>
                            <div className="text-muted">
                                Learn, grow, and make an impact. We value curiosity, kindness, and diverse
                                perspectives—your growth
                                is our priority.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OPEN ROLES */}
            <section className="container-xl py-5">
                <h2 className="h4 fw-bold mb-4 text-brand-main">Open Roles</h2>
                <div className="row gy-4">
                    {/* EXAMPLE ROLES – replace or fetch from your backend */}
                    <div className="col-12 col-md-6">
                        <div className="bg-white border rounded-4 shadow-soft p-4 h-100">
                            <div className="fw-bold mb-2 fs-5 text-brand-main">Senior React Engineer</div>
                            <div className="text-muted mb-2">Remote · Bangladesh/Europe preferred</div>
                            <ul className="mb-3 small">
                                <li>Build modern React/Next.js features for our SaaS platform</li>
                                <li>Collaborate with product, design, and backend teams</li>
                                <li>Drive code quality, accessibility, and UI excellence</li>
                            </ul>
                            <a
                                href="mailto:careers@spoonsync.com?subject=Application%20for%20Senior%20React%20Engineer"
                                className="btn btn-primary fw-semibold px-4 py-2 cta-btn"
                                style={{borderRadius: 25}}
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="bg-white border rounded-4 shadow-soft p-4 h-100">
                            <div className="fw-bold mb-2 fs-5 text-brand-main">SaaS Product Marketer</div>
                            <div className="text-muted mb-2">Remote · Flexible time zones</div>
                            <ul className="mb-3 small">
                                <li>Craft messaging, case studies, and campaigns that drive growth</li>
                                <li>Own email, blog, and in‑app engagement</li>
                                <li>Work closely with founders and product</li>
                            </ul>
                            <a
                                href="mailto:careers@spoonsync.com?subject=Application%20for%20SaaS%20Product%20Marketer"
                                className="btn btn-primary fw-semibold px-4 py-2 cta-btn"
                                style={{borderRadius: 25}}
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>

                {/* GENERAL APPLICATION */}
                <div className="text-center mt-5">
                    <div className="fw-semibold mb-2 text-brand-main">
                        Don’t see your role? We’d still love to hear from you!
                    </div>
                    <a
                        href="mailto:careers@spoonsync.com?subject=General%20Application"
                        className="btn btn-outline-primary fw-semibold px-4 py-2 cta-btn-outline"
                        style={{borderRadius: 25, fontWeight: 600}}
                    >
                        Send Your CV
                    </a>
                </div>
            </section>
        </main>
    );
}
