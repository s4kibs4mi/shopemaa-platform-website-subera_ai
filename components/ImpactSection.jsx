export function ImpactSection() {
    return (
        <section className="section-spacing px-4 bg-accent">
            <div className="container-xl d-flex flex-column flex-md-row align-items-center gap-5">
                <div className="flex-grow-1">
                    <h2 className="display-6 fw-bold mb-5 text-brand-main">
                        Why go paperless?
                    </h2>

                    <p className="mb-3 fs-3 text-brand-main" style={{maxWidth: 660}}>
                        Every year, we cut down over 15 billion trees and a big chunk of that goes into making paper
                        for things like business cards, menus, and flyers. The worst part? Most of it gets tossed out
                        within days. It’s easy to overlook, but the paper industry is a major driver of deforestation,
                        water pollution, and energy use.
                    </p>

                    <p className="mb-3 fs-3 text-brand-main" style={{maxWidth: 660}}>
                        Switching to QR-powered experiences lets you skip printing altogether while staying modern and
                        eco‑friendly. Whether it’s a business card, a restaurant menu, a product label, or an event
                        flyer,
                        a QR code keeps content up to date anytime—without reprinting or waste.
                    </p>

                    <div className="fw-bold mt-3 fs-3 text-brand">
                        ♻️ Use less paper, create less waste, and make a bigger difference.
                    </div>
                </div>

                <div className="flex-grow-0 d-none d-md-block">
                    <img
                        src="/img/go-paperless.png"
                        alt="Eco friendly QR codes"
                        className="shadow-soft"
                        style={{
                            width: 300,
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
