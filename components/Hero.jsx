import {getSpoonSyncAppLink} from "../helpers/link-helper";

export default function Hero() {
    return (
        <section className="bg-accent section-spacing">
            <div className="container-xl d-flex flex-column flex-lg-row align-items-center gap-4">
                <div className="flex-fill text-center text-lg-start">
                    <h1
                        className="display-2 fw-bolder text-brand-main mb-3"
                        style={{letterSpacing: "-2px"}}>
                        Your Restaurant,<br/>Just Smarter.
                    </h1>

                    <p className="fs-2 hero-lead mb-5" style={{maxWidth: 540}}>
                        <span className="fw-semibold text-secondary">
                          Manage QR menus, take orders, track tables, and coordinate staff, all in one platform.
                        </span>
                        <br/>
                        <span className="text-secondary" style={{fontWeight: 500}}>
                          Crafting the Next Era of Dining.
                        </span>
                    </p>

                    <div
                        className="d-flex flex-column flex-md-row gap-4 justify-content-center justify-content-lg-start">
                        <a
                            href={getSpoonSyncAppLink()}
                            className="btn btn-primary btn-lg cta-btn px-5 py-3"
                            aria-label="Get started with SpoonSync"
                        >
                            Get Started Free
                        </a>
                        <a
                            href="/contact"
                            className="btn btn-outline-primary btn-lg cta-btn-outline px-5 py-3"
                            aria-label="Contact SpoonSync sales"
                        >
                            Contact Sales
                        </a>
                    </div>
                </div>

                <div className="flex-fill d-flex justify-content-center mt-5 mt-lg-0">
                    <img
                        src="/spoonsync/mockup.png"
                        alt="SpoonSync preview"
                        className="hero-side-img rounded-4 shadow-soft"
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
}
