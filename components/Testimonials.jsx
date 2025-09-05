const testimonials = [
    {
        name: "Sofia Rahman",
        role: "Founder, Urban Wear",
        text:
            "With Subera AI, our customers see the perfect accessories right at checkout. Average order value jumped 18% in the first month."
    },
    {
        name: "Tariq Ahmed",
        role: "Operations Lead, FreshMart Grocery",
        text:
            "Recipe bundles and smart restock suggestions increased basket size by over 20%. The recommendations feel natural, not pushy."
    },
    {
        name: "Emilie Dubois",
        role: "E-commerce Manager, Digital Reads",
        text:
            "Complete-the-package offers turned browsers into buyers. Bundling ebooks with audio versions boosted conversions instantly."
    }
];

export default function Testimonials() {
    return (
        <section className="section-spacing bg-accent">
            <div className="container-xl">
                <div className="section-title text-center mb-4">What Our Users Say</div>
                <div className="row g-4">
                    {testimonials.map((t, i) => (
                        <div className="col-12 col-md-4" key={i}>
                            <div className="card-modern shadow-soft h-100 p-4">
                                <p
                                    className="mb-3 fst-italic"
                                    style={{color: "rgba(var(--brand-secondary-rgb), 0.95)"}}
                                >
                                    &ldquo;{t.text}&rdquo;
                                </p>
                                <div className="fw-bold text-brand">{t.name}</div>
                                <div className="text-muted small">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
