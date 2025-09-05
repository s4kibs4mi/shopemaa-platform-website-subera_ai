import Link from "next/link";
import FaqSection from "./FaqSection";

const plans = [
    {
        name: "Starter",
        price: "Free",
        period: "",
        desc: "Best for individuals, pop-ups, and quick pilots.",
        features: [
            "5 Dynamic QR menus",
            "Basic analytics",
            "Basic AI setup",
            "Community support"
        ],
        cta: "Start Free",
        href: "/signup",
        highlight: false
    },
    {
        name: "Pro",
        price: "€15",
        period: "/mo",
        desc: "For busy venues that need smarter ops.",
        features: [
            "50 Dynamic QR menus",
            "Advanced analytics",
            "Premium templates",
            "Remove SpoonSync branding",
            "Email support"
        ],
        cta: "Start Pro",
        href: "/signup",
        highlight: true
    },
    {
        name: "Business",
        price: "€40",
        period: "/mo",
        desc: "For restaurants and growing teams.",
        features: [
            "Unlimited QR menus",
            "Team members & roles",
            "Full analytics",
            "Custom domain",
            "Priority support"
        ],
        cta: "Contact Sales",
        href: "/contact",
        highlight: false
    }
];

export default function PricingSection() {
    return (
        <main className="bg-white">
            {/* HERO */}
            <section
                className="py-5 py-md-7"
                style={{
                    background: "linear-gradient(120deg, var(--brand-secondary-accent) 70%, #fff 100%)",
                    borderBottom: "1px solid rgba(var(--brand-secondary-rgb), 0.12)"
                }}
            >
                <div className="container-xl text-center">
          <span
              className="badge rounded-pill mb-2"
              style={{background: "var(--brand-secondary)", color: "#fff", fontSize: "1rem"}}
          >
            Pricing
          </span>
                    <h1 className="display-4 fw-bold mb-3 text-brand-main">Simple, Transparent Pricing</h1>
                    <p className="lead mb-0 mx-auto"
                       style={{maxWidth: 560, color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                        Start free and scale as you grow. No hidden fees—just smart value for every team.
                    </p>
                </div>
            </section>

            {/* PLANS */}
            <section className="container-xl py-7">
                <div className="row gy-5 justify-content-center">
                    {plans.map((plan) => (
                        <div key={plan.name} className="col-12 col-md-6 col-lg-4 d-flex">
                            <div
                                className={`w-100 rounded-4 shadow-soft border-3 p-5 d-flex flex-column ${
                                    plan.highlight ? "border" : "border"
                                }`}
                                style={{
                                    background: "#fff",
                                    borderColor: plan.highlight
                                        ? "var(--brand-primary)"
                                        : "rgba(var(--brand-secondary-rgb), 0.08)",
                                    boxShadow: plan.highlight
                                        ? "0 8px 32px rgba(var(--brand-secondary-rgb), 0.14)"
                                        : "0 3px 20px rgba(var(--brand-secondary-rgb), 0.08)"
                                }}
                            >
                                <h2 className="h4 fw-bold mb-2 text-brand-main">{plan.name}</h2>
                                <div className="mb-2"
                                     style={{fontSize: "2.2rem", fontWeight: 700, color: "var(--brand-secondary)"}}>
                                    {plan.price}
                                    {plan.period && <span className="fs-5 text-muted">{plan.period}</span>}
                                </div>
                                <div className="mb-3 text-muted" style={{minHeight: 50}}>{plan.desc}</div>

                                <ul className="list-unstyled mb-4">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="mb-2 d-flex align-items-center">
                                            <span className="me-2"
                                                  style={{color: "var(--brand-primary)", fontWeight: 700}}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={plan.href}
                                    className={`btn ${
                                        plan.highlight ? "btn-primary cta-btn" : "btn-outline-primary cta-btn-outline"
                                    } px-4 py-2 fw-bold mt-auto`}
                                    style={{borderRadius: 28, fontSize: "1.09rem"}}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Need enterprise plan? */}
                <div className="text-center mt-5">
                    <div className="fw-semibold mb-2 text-brand-main">Need a larger or custom plan?</div>
                    <Link
                        href="/contact"
                        className="btn btn-outline-primary fw-bold px-4 py-2 cta-btn-outline"
                        style={{borderRadius: 25}}
                    >
                        Contact Sales
                    </Link>
                </div>
            </section>

            {/* FAQs */}
            <FaqSection/>
        </main>
    );
}
