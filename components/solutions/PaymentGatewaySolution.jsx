export default function PaymentGatewaySolution() {
    return (
        <main className="bg-white">
            {/* HERO */}
            <section
                className="py-5 py-md-7"
                style={{
                    background: "linear-gradient(120deg, var(--brand-secondary-accent, #f3f6f8) 65%, #fff 100%)",
                    borderBottom: "1px solid rgba(11,33,48,0.12)"
                }}
            >
                <div
                    className="container-xl d-flex flex-column flex-md-row align-items-center justify-content-between gap-5">
                    <div className="flex-grow-1 text-center text-md-start">
                        <span
                            className="badge rounded-pill mb-2"
                            style={{
                                background: "var(--brand-secondary, #0B2130)",
                                color: "#fff",
                                fontSize: "1rem"
                            }}
                        >
                            Solution
                        </span>
                        <h1
                            className="display-4 fw-bold mb-3"
                            style={{
                                color: "var(--brand-secondary, #0B2130)"
                            }}
                        >
                            Payment Gateway Integrations
                        </h1>
                        <p
                            className="lead mb-4"
                            style={{
                                maxWidth: 520,
                                color: "rgba(11,33,48,0.9)"
                            }}
                        >
                            Accept secure payments in-store and online with SpoonSync’s built-in payment integrations.
                            We support SSLCommerz for Bangladesh, Stripe for global coverage, and Adyen for
                            enterprise-grade transactions.
                        </p>
                        <div
                            className="d-flex flex-column flex-sm-row gap-3 mb-3 justify-content-center justify-content-md-start">
                            <a
                                href="/signup"
                                className="btn btn-primary px-5 py-3 fw-bold"
                                style={{
                                    borderRadius: 32,
                                    fontSize: "1.15rem"
                                }}
                            >
                                Start Accepting Payments
                            </a>
                            <a
                                href="/contact"
                                className="btn btn-outline-primary px-5 py-3 fw-bold"
                                style={{
                                    borderRadius: 32,
                                    fontSize: "1.15rem"
                                }}
                            >
                                Talk to Sales
                            </a>
                        </div>
                        <div className="text-muted small mt-1">
                            Built for restaurants, cafes, and multi-location businesses.
                        </div>
                    </div>
                    <div className="flex-grow-0 d-flex justify-content-center">
                        <img
                            src="/spoonsync/payment-hero.png"
                            alt="Payment Integrations"
                            className="rounded-4 shadow-soft"
                            style={{
                                width: "min(360px, 82vw)",
                                background: "#fff"
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="container-xl py-6">
                <div className="row gy-5">
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary, #EC632B)"}}>🇧🇩
                            </div>
                            <h3 className="h4 fw-bold mb-2">SSLCommerz Integration</h3>
                            <div className="text-muted">
                                Accept local currency payments (BDT) with SSLCommerz, the leading gateway in Bangladesh.
                                Supports mobile banking, cards, and internet banking.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary, #EC632B)"}}>🌍</div>
                            <h3 className="h4 fw-bold mb-2">Stripe for Global Reach</h3>
                            <div className="text-muted">
                                Accept payments in 135+ currencies with Stripe. Seamless checkout, saved cards, and
                                subscription billing built-in.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white rounded-4 p-4 h-100 shadow-soft">
                            <div className="mb-2" style={{fontSize: 36, color: "var(--brand-primary, #EC632B)"}}>🏢</div>
                            <h3 className="h4 fw-bold mb-2">Adyen for Enterprise</h3>
                            <div className="text-muted">
                                Enterprise-grade payment processing with Adyen—omnichannel, fraud detection,
                                and global acquiring in one platform.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-white py-5 border-top border-bottom">
                <div className="container-xl">
                    <h2 className="h2 fw-bold text-center mb-5" style={{color: "var(--brand-secondary, #0B2130)"}}>
                        How It Works
                    </h2>
                    <div className="row gx-5 gy-4 align-items-center">
                        {[
                            {
                                step: 1,
                                title: "Enable Your Gateway",
                                desc: "Choose SSLCommerz, Stripe, or Adyen in your SpoonSync settings."
                            },
                            {
                                step: 2,
                                title: "Connect Account",
                                desc: "Securely connect your merchant account using OAuth or API keys."
                            },
                            {
                                step: 3,
                                title: "Start Accepting Payments",
                                desc: "Offer in-person and online payments instantly."
                            },
                            {
                                step: 4,
                                title: "Track & Reconcile",
                                desc: "View transactions, payouts, and reports in real-time."
                            }
                        ].map((item) => (
                            <div className="col-12 col-md-3 text-center" key={item.step}>
                                <div
                                    className="rounded-circle mb-3 d-inline-flex align-items-center justify-content-center"
                                    style={{
                                        width: 64,
                                        height: 64,
                                        background: "var(--brand-secondary, #0B2130)"
                                    }}
                                >
                                    <span className="text-white display-5 fw-bold">{item.step}</span>
                                </div>
                                <div className="fw-bold mb-1">{item.title}</div>
                                <div className="text-muted">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-xl py-7 text-center">
                <h2 className="display-6 fw-bold mb-3" style={{color: "var(--brand-secondary, #0B2130)"}}>
                    Ready to Accept Payments Anywhere?
                </h2>
                <p
                    className="lead mb-4"
                    style={{maxWidth: 540, margin: "0 auto", color: "rgba(11,33,48,0.9)"}}
                >
                    Whether you operate in Bangladesh, Europe, or globally—SpoonSync has the payment integration you
                    need.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <a
                        href="/signup"
                        className="btn btn-primary px-5 py-3 fw-bold"
                        style={{
                            borderRadius: 32,
                            fontSize: "1.12rem"
                        }}
                    >
                        Get Started
                    </a>
                    <a
                        href="/contact"
                        className="btn btn-outline-primary px-5 py-3 fw-bold"
                        style={{
                            borderRadius: 32,
                            fontSize: "1.12rem"
                        }}
                    >
                        Talk to Sales
                    </a>
                </div>
            </section>
        </main>
    );
}
