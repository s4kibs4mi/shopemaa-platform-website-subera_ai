const testimonials = [
    {
        name: "Sofia Rahman",
        role: "Owner, Cafe Blossom",
        text:
            "We moved to SpoonSync for digital menus and ordering. Updating specials is instant—and the insights help us staff smarter."
    },
    {
        name: "Tariq Ahmed",
        role: "Operations Lead, Food Hall 12",
        text:
            "SpoonSync ties menus, tables, and KDS together. Orders flow better, service is faster, and guests notice."
    },
    {
        name: "Emilie Dubois",
        role: "GM, Le Rivage",
        text:
            "From QR menus to reports, it’s all in one place. We turned data into real changes on the floor within a week."
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
                                <p className="mb-3 fst-italic"
                                   style={{color: "rgba(var(--brand-secondary-rgb), 0.95)"}}>
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
