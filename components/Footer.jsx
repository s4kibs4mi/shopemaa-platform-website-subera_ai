import {IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin, IconMail} from "@tabler/icons-react";

export default function Footer() {
    return (
        <footer className="pt-5 pb-4" style={{background: "var(--brand-secondary)"}}>
            <div className="container-xl">
                <div className="row gy-4" style={{display: "flex", flexWrap: "wrap", alignItems: "flex-start"}}>
                    {/* Brand column */}
                    <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column align-items-start">
                        <div className="d-flex align-items-center mb-3">
                            <img src="/subera/logo-mark.svg" alt="Subera AI" width={40} height={40} className="me-2"/>
                            <span className="fw-bold fs-3 text-white">Subera AI</span>
                        </div>
                        <div className="text-white mb-3 fs-5" style={{opacity: 0.93}}>
                            Smarter recommendations. Bigger baskets.
                            <br/>
                            <span className="fw-semibold">Upsell, cross-sell, and bundling—powered by AI.</span>
                        </div>
                        <div className="d-flex gap-3 mt-3">
                            <a href="https://facebook.com" className="text-white social-link" aria-label="Facebook">
                                <IconBrandFacebook size={28}/>
                            </a>
                            <a href="https://twitter.com" className="text-white social-link" aria-label="Twitter / X">
                                <IconBrandTwitter size={28}/>
                            </a>
                            <a href="https://www.linkedin.com/company/subera-ai" className="text-white social-link"
                               aria-label="LinkedIn">
                                <IconBrandLinkedin size={28}/>
                            </a>
                            <a href="mailto:hello@subera.ai" className="text-white social-link" aria-label="Email">
                                <IconMail size={28}/>
                            </a>
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
                            <li><a href="/blog" className="footer-link">Blog</a></li>
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
                            <li><a href="/features/ai-commerce" className="footer-link">AI Commerce</a></li>
                            <li><a href="/features/upsell-cross-sell" className="footer-link">Upsell & Cross-sell</a>
                            </li>
                            <li><a href="/features/complete-package" className="footer-link">Complete-the-Package</a>
                            </li>
                            <li><a href="/features/analytics" className="footer-link">Analytics & ROI</a></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div className="col-6 col-md-2 d-flex flex-column align-items-start">
                        <div
                            className="fw-bold mb-2 text-uppercase"
                            style={{color: "#fff", opacity: 0.97, fontSize: "1.14rem", letterSpacing: ".07em"}}
                        >
                            Solutions
                        </div>
                        <ul className="list-unstyled fs-6">
                            <li><a href="/solutions/retail" className="footer-link">For Retail</a></li>
                            <li><a href="/solutions/restaurants" className="footer-link">For Restaurants</a></li>
                            <li><a href="/solutions/grocery" className="footer-link">For Grocery</a></li>
                            <li><a href="/solutions/digital" className="footer-link">For Digital</a></li>
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
                            {/* Optional: DPA / Security */}
                            <li><a href="/security" className="footer-link">Security</a></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <div className="text-white-50 small">
                        &copy; {new Date().getFullYear()} Subera AI. All rights reserved.
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
                    color: var(--brand-primary) !important; /* amber highlight */
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
                    color: var(--brand-primary) !important; /* amber highlight */
                    opacity: 1;
                }
            `}</style>
        </footer>
    );
}
