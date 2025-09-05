import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QrcnHead from "../components/QrcnHead";

export default function Privacy() {
    return (
        <>
            <QrcnHead title={"Privacy Policy | SpoonSync"}/>
            <Navbar/>
            <main className="bg-white">
                <section className="container-xl py-7">
                    <h1 className="display-5 fw-bold mb-4 text-brand-main">Privacy Policy</h1>
                    <div className="mb-4 text-muted">Last updated: July 31, 2025</div>

                    <p>
                        At SpoonSync, your privacy is important to us. This Privacy Policy explains what information we
                        collect,
                        how we use it, and your rights regarding your data.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">1. Information We Collect</h2>
                    <ul>
                        <li>
                            <strong>Personal Information:</strong> Name, email address, and other details you provide
                            when you sign up,
                            use our services, or contact us.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> Information on how you use SpoonSync, including pages visited,
                            orders/QR scans,
                            device type, and IP address.
                        </li>
                        <li>
                            <strong>Cookies:</strong> We use cookies and similar technologies to improve your experience
                            (see our Cookie Policy).
                        </li>
                    </ul>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">2. How We Use Your Data</h2>
                    <ul>
                        <li>To provide and improve our services.</li>
                        <li>To communicate with you about your account, updates, or customer support.</li>
                        <li>To analyze usage and optimize features.</li>
                        <li>For security and fraud prevention.</li>
                    </ul>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">3. Sharing &amp; Disclosure</h2>
                    <p>
                        We do not sell your personal data. We may share information with trusted third‑party providers
                        (e.g., payment,
                        analytics) as needed to operate SpoonSync, or when required by law.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">4. Data Security</h2>
                    <p>
                        We use industry‑standard security practices to protect your data. However, no internet service
                        is 100% secure.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">5. Your Rights &amp; Choices</h2>
                    <ul>
                        <li>Access or update your personal data via your account.</li>
                        <li>Contact us to delete your data or request information.</li>
                        <li>Adjust cookie and tracking preferences (see Cookie Policy).</li>
                    </ul>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">6. Children’s Privacy</h2>
                    <p>
                        SpoonSync is not intended for children under 16. We do not knowingly collect data from children.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">7. Updates</h2>
                    <p>
                        We may update this policy. If changes are material, we will notify users or post an update on
                        our website.
                    </p>

                    <h2 className="h5 fw-bold mt-4 mb-2 text-brand-main">8. Contact Us</h2>
                    <p>
                        If you have questions about this Privacy Policy or your data, email us at{" "}
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
