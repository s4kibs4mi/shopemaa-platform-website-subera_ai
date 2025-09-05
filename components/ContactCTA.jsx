export default function ContactCTA() {
    return (
        <section className="section-spacing bg-accent text-center">
            <div className="container-xl d-flex justify-content-center">
                <div
                    className="card-modern shadow-soft py-5 px-4 px-md-5 mx-auto"
                    style={{maxWidth: 640, background: "#fff"}}>
                    <h2 className="display-5 fw-bold mb-3 text-brand-main">
                        Run Your Restaurant Smarter—Start Free
                    </h2>
                    <p className="lead fs-4 mb-4">
                        Manage menus, orders, tables, and staff with ease.<br/>
                        Your first setup takes just minutes—no credit card required.
                    </p>
                    <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                        <a
                            href="/pricing"
                            className="btn btn-primary btn-lg cta-btn px-5 fw-bold"
                        >
                            Get Started Free
                        </a>
                        <a
                            href="/contact"
                            className="btn btn-outline-primary btn-lg cta-btn-outline px-5 fw-bold"
                        >
                            Contact Sales
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
