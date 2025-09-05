const plans = [
    {
        name: "Starter",
        price: "Free",
        desc: "Best for individuals and quick projects.",
        features: ["5 Dynamic QR codes", "Basic analytics", "Basic AI page builder", "Community support"]
    },
    {
        name: "Pro",
        price: "€15/mo",
        desc: "For small businesses & marketers.",
        features: ["50 Dynamic QR codes", "Advanced analytics", "Premium templates", "Remove QR Centraal branding", "Email support"]
    },
    {
        name: "Business",
        price: "€40/mo",
        desc: "For restaurants, agencies, and teams.",
        features: ["Unlimited QR codes", "Team members", "Full analytics", "Custom domain", "Priority support"]
    }
];
export default function PricingTeaser() {
    return (
        <section className="section-spacing bg-white">
            <div className="container-xl">
                <div className="section-title text-center mb-4">Simple, Transparent Pricing</div>
                <div className="row g-4 justify-content-center">
                    {plans.map((plan, i) => (
                        <div className="col-12 col-md-6 col-lg-4" key={i}>
                            <div className="card-modern shadow-soft h-100 p-4 text-center">
                                <h3 className="fw-bold mb-1">{plan.name}</h3>
                                <div className="display-6 text-brand fw-bold mb-2">{plan.price}</div>
                                <p className="mb-3">{plan.desc}</p>
                                <ul className="list-unstyled mb-4">
                                    {plan.features.map((feat, j) => (
                                        <li key={j} className="mb-2 d-flex align-items-center justify-content-center">
                                            <span className="badge bg-primary me-2"
                                                  style={{width: 8, height: 8, borderRadius: '50%'}}></span>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="/contact"
                                   className="btn btn-primary cta-btn w-100">{plan.name === 'Starter' ? 'Start Free' : 'Contact Sales'}</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-4">
                    <a href="/pricing" className="btn cta-btn-outline btn-lg">See full pricing details</a>
                </div>
            </div>
        </section>
    );
}
