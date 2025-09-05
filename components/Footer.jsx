import {IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin, IconMail} from "@tabler/icons-react";

export default function Footer() {
    return (
        <footer className="pt-5 pb-4" style={{background: "var(--brand-secondary)"}}>
            <div className="container-xl">
                <div className="row gy-4" style={{display: "flex", flexWrap: "wrap", alignItems: "flex-start"}}>
                    {/* Brand column */}
                    <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column align-items-start">
                        <div className="d-flex align-items-center mb-3">
                            <img src="/spoonsync/logo-mark.svg" alt="SpoonSync" width={40} height={40}
                                 className="me-2"/>
                            <span className="fw-bold fs-3 text-white">SpoonSync</span>
                        </div>
                        <div className="text-white mb-3 fs-5" style={{opacity: 0.93}}>
                            Your Restaurant, Just Smarter.<br/>
                            <span className="fw-semibold">Crafting the Next Era of Dining.</span>
                        </div>
                        <div className="d-flex gap-3 mt-3">
                            <a href="#" className="text-white social-link" aria-label="Facebook"><IconBrandFacebook
                                size={28}/></a>
                            <a href="#" className="text-white social-link" aria-label="Twitter"><IconBrandTwitter
                                size={28}/></a>
                            <a href="#" className="text-white social-link" aria-label="LinkedIn"><IconBrandLinkedin
                                size={28}/></a>
                            <a href="mailto:hello@spoonsync.com" className="text-white social-link"
                               aria-label="Email"><IconMail size={28}/></a>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="col-6 col-md-2 d-flex flex-column align-items-start">
                        <div
                            className="fw-bold mb-2 text-uppercase"
                            style={{color: "#fff", opacity: 0.97, fontSize: "1.14rem", letterSpacing: ".07em"}}
                        >
                            Company
                        </div>
                        <ul className="list-unstyled fs-6">
                            <li><a href="/about" className="footer-link">About</a></li>
                            <li><a href="/careers" className="footer-link">Careers</a></li>
                            <li><a href="/pricing" className="footer-link">Pricing</a></li>
                            <li><a href="/blogs" className="footer-link">Blog</a></li>
                        </ul>
                    </div>

                    {/* Product */}
                    <div className="col-6 col-md-2 d-flex flex-column align-items-start">
                        <div
                            className="fw-bold mb-2 text-uppercase"
                            style={{color: "#fff", opacity: 0.97, fontSize: "1.14rem", letterSpacing: ".07em"}}
                        >
                            Product
                        </div>
                        <ul className="list-unstyled fs-6">
                            <li><a href="/usecases/digital-menu" className="footer-link">QR Menus & Ordering</a></li>
                            <li><a href="/usecases/tables" className="footer-link">Tables & Floorplan</a></li>
                            <li><a href="/usecases/staff-roles" className="footer-link">Staff & Roles</a></li>
                            <li><a href="/usecases/analytics" className="footer-link">Reports & Insights</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="col-6 col-md-2 d-flex flex-column align-items-start">
                        <div
                            className="fw-bold mb-2 text-uppercase"
                            style={{color: "#fff", opacity: 0.97, fontSize: "1.14rem", letterSpacing: ".07em"}}
                        >
                            Support
                        </div>
                        <ul className="list-unstyled fs-6">
                            <li><a href="/docs" className="footer-link">Documentation</a></li>
                            <li><a href="/faq" className="footer-link">FAQ</a></li>
                            <li><a href="/contact" className="footer-link">Contact Support</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="col-6 col-md-2 d-flex flex-column align-items-start">
                        <div
                            className="fw-bold mb-2 text-uppercase"
                            style={{color: "#fff", opacity: 0.97, fontSize: "1.14rem", letterSpacing: ".07em"}}
                        >
                            Legal
                        </div>
                        <ul className="list-unstyled fs-6">
                            <li><a href="/terms" className="footer-link">Terms</a></li>
                            <li><a href="/privacy" className="footer-link">Privacy</a></li>
                            <li><a href="/cookie" className="footer-link">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <div className="text-white-50 small">
                        &copy; {new Date().getFullYear()} SpoonSync. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Footer styles, brand-aligned */}
            <style jsx>{`
                .footer-link {
                    color: #fff !important;
                    text-decoration: none;
                    opacity: 0.92;
                    font-weight: 400;
                    font-size: 1.01rem;
                    transition: color 0.16s, opacity 0.18s, text-decoration-color 0.18s;
                    display: inline-block;
                    margin-bottom: 0.45em;
                }

                .footer-link:hover,
                .footer-link:focus {
                    color: var(--brand-primary) !important; /* orange highlight */
                    opacity: 1;
                    text-decoration: underline;
                    text-decoration-color: var(--brand-primary);
                }

                .social-link {
                    opacity: 0.85;
                    transition: opacity 0.18s, color 0.17s;
                }

                .social-link:hover,
                .social-link:focus {
                    color: var(--brand-primary) !important; /* orange highlight */
                    opacity: 1;
                }
            `}</style>
        </footer>
    );
}
