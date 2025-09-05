import {getSuberaAppLink} from "../helpers/link-helper";

export default function Hero() {
    return (
        <section className="bg-accent section-spacing">
            <div className="container-xl d-flex flex-column flex-lg-row align-items-center gap-4">
                <div className="flex-fill text-center text-lg-start">
                    <h1
                        className="display-2 fw-bolder text-brand-main mb-3"
                        style={{letterSpacing: "-2px"}}
                    >
                        Commerce,<br/> Smarter with AI.
                    </h1>

                    <p className="fs-2 hero-lead mb-5" style={{maxWidth: 540}}>
            <span className="fw-semibold text-secondary">
              Subera AI drives upsell, cross-sell, and complete-the-package
              recommendations in real time.
            </span>
                        <br/>
                        <span className="text-secondary" style={{fontWeight: 500}}>
              Boost AOV, CTR, and customer lifetime value with precision AI.
            </span>
                    </p>

                    <div
                        className="d-flex flex-column flex-md-row gap-4 justify-content-center justify-content-lg-start">
                        <a
                            href={getSuberaAppLink()}
                            className="btn btn-primary btn-lg cta-btn px-5 py-3"
                            aria-label="Get started with Subera AI"
                        >
                            Start Free
                        </a>
                        <a
                            href="/contact"
                            className="btn btn-outline-primary btn-lg cta-btn-outline px-5 py-3"
                            aria-label="Contact Subera AI sales"
                        >
                            Contact Sales
                        </a>
                    </div>
                </div>

                <div className="flex-fill d-flex justify-content-center mt-5 mt-lg-0">
                    <img
                        src="/subera/mockup.png"
                        alt="Subera AI dashboard preview"
                        className="hero-side-img rounded-4 shadow-soft"
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
}
