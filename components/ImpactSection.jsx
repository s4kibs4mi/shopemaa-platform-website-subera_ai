export function ImpactSection() {
    return (
        <section className="section-spacing px-4 bg-accent">
            <div className="container-xl d-flex flex-column flex-md-row align-items-center gap-5">
                <div className="flex-grow-1">
                    <h2 className="display-6 fw-bold mb-5 text-brand-main">
                        Why AI Commerce?
                    </h2>

                    <p className="mb-3 fs-3 text-brand-main" style={{maxWidth: 660}}>
                        Shoppers today expect relevant suggestions and frictionless buying
                        journeys. Yet most commerce platforms still rely on static
                        “related items” or generic bundles—leaving revenue on the table.
                    </p>

                    <p className="mb-3 fs-3 text-brand-main" style={{maxWidth: 660}}>
                        Subera AI brings intelligence to every cart and checkout. By
                        recommending the right upsells, cross-sells, and complete-the-package
                        bundles in real time, you not only increase average order value but
                        also improve customer satisfaction and lifetime value.
                    </p>

                    <div className="fw-bold mt-3 fs-3 text-brand">
                        🚀 Boost AOV by 10-20%, lift CTR, and unlock new growth opportunities.
                    </div>
                </div>

                <div className="flex-grow-0 d-none d-md-block">
                    <img
                        src="/subera/impact-dashboard.png"
                        alt="Subera AI impact analytics"
                        className="shadow-soft"
                        style={{
                            width: 340,
                            maxWidth: "90vw",
                            borderRadius: "1.5em",
                            background: "#fff",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default ImpactSection;
