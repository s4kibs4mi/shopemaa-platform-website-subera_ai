import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QrcnHead from "../components/QrcnHead";

export default function Terms() {
    return (
        <>
            <QrcnHead title={"Terms | SpoonSync"}/>
            <Navbar/>
            <main className="bg-white">
                <section className="container-xl py-7">
                    <h1 className="display-5 fw-bold mb-4 text-brand-main">Terms of Service</h1>
                    <div className="mb-4 text-muted">Last updated: July 31, 2025</div>

                    <p>
                        Welcome to SpoonSync! These Terms of Service (“Terms”) govern your use of our website, products,
                        and services.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">1. Your Account</h2>
                    <p>
                        You are responsible for your account credentials and for all activity under your account. You
                        agree to provide accurate information and keep your account secure.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">2. Acceptable Use</h2>
                    <ul>
                        <li>Do not use SpoonSync for unlawful, harmful, or abusive activities.</li>
                        <li>Respect intellectual property and privacy rights of others.</li>
                    </ul>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">3. Payments &amp; Subscriptions</h2>
                    <p>
                        For paid plans, you agree to pay all applicable fees. Prices and features may change; we will
                        notify users of material changes. You may cancel or change your subscription at any time.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">4. Intellectual Property</h2>
                    <p>
                        SpoonSync and its content are protected by copyright, trademark, and other laws. You may not
                        copy, modify, or distribute our content without permission.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">5. Disclaimer &amp; Limitation of
                        Liability</h2>
                    <p>
                        SpoonSync is provided “as is.” We do not guarantee that the service will be uninterrupted,
                        error‑free, or secure. We are not liable for indirect or consequential damages.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">6. Termination</h2>
                    <p>
                        We may suspend or terminate your account for violation of these Terms. You may delete your
                        account at any time.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">7. Changes</h2>
                    <p>
                        We may update these Terms as needed. Changes will be posted on this page and effective
                        immediately unless stated otherwise.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">8. Governing Law</h2>
                    <p>
                        These Terms are governed by the laws of Bangladesh and the Netherlands. Disputes will be
                        resolved in the appropriate courts of these jurisdictions.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">9. Contact</h2>
                    <p>
                        Questions? Email{" "}
                        <a href="mailto:legal@spoonsync.com" className="link-brand">legal@spoonsync.com</a>.
                    </p>
                </section>

                <style jsx>{`
                    .link-brand {
                        color: var(--brand-primary);
                        text-decoration: underline;
                    }

                    .link-brand:hover {
                        filter: brightness(0.95);
                    }

                    ul {
                        padding-left: 1.25rem;
                    }

                    li {
                        margin-bottom: .5rem;
                    }
                `}</style>
            </main>
            <Footer/>
        </>
    );
}
