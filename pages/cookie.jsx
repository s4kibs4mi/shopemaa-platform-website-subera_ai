import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QrcnHead from "../components/QrcnHead";

export default function Cookie() {
    return (
        <>
            <QrcnHead title={"Cookie | SpoonSync"}/>
            <Navbar/>
            <main className="bg-white">
                <section className="container-xl py-7">
                    <h1 className="display-5 fw-bold mb-4 text-brand-main">Cookie Policy</h1>
                    <div className="mb-4 text-muted">Last updated: July 31, 2025</div>

                    <p>
                        SpoonSync uses cookies and similar technologies to provide, protect, and improve our services.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">1. What Are Cookies?</h2>
                    <p>
                        Cookies are small text files stored on your device when you visit a website. They help remember
                        your
                        preferences and improve your experience.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">2. How We Use Cookies</h2>
                    <ul>
                        <li><strong>Essential Cookies:</strong> For website functionality, login, and security.</li>
                        <li><strong>Analytics Cookies:</strong> To understand how visitors use our site and improve
                            features.
                        </li>
                        <li><strong>Preference Cookies:</strong> To remember your language and settings.</li>
                    </ul>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">3. Managing Cookies</h2>
                    <p>
                        You can control or delete cookies via your browser settings. Note that disabling cookies may
                        affect
                        site functionality.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">4. Third‑Party Cookies</h2>
                    <p>
                        Some third‑party services (like analytics or payment processors) may use their own cookies. We
                        do not
                        control these cookies.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">5. Updates</h2>
                    <p>
                        We may update this Cookie Policy from time to time. Please check back regularly.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">6. Contact</h2>
                    <p>
                        For questions about our Cookie Policy, contact{" "}
                        <a href="mailto:privacy@spoonsync.com" className="link-brand">privacy@spoonsync.com</a>.
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
