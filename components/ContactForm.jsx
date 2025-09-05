import {useState} from "react";
import {IconBrandWhatsapp, IconMail} from "@tabler/icons-react";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    // Example simple form handler (replace with real API or service)
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <main className="bg-white">
            {/* HERO */}
            <section
                className="py-5 py-md-7"
                style={{
                    background: "linear-gradient(120deg, var(--brand-secondary-accent) 60%, #fff 100%)",
                    borderBottom: "1px solid rgba(var(--brand-secondary-rgb), 0.12)"
                }}
            >
                <div className="container-xl text-center">
          <span
              className="badge rounded-pill mb-2"
              style={{background: "var(--brand-secondary)", color: "#fff", fontSize: "1rem"}}
          >
            Contact
          </span>
                    <h1 className="display-4 fw-bold mb-3 text-brand-main">Let’s Connect</h1>
                    <p className="lead mb-0 mx-auto"
                       style={{maxWidth: 540, color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                        Questions? Need a custom workflow or integration? We’re here for you.
                        Fill out the form or reach out directly—our team usually replies within 24 hours.
                    </p>
                </div>
            </section>

            {/* CONTACT FORM & INFO */}
            <section className="container-xl py-7">
                <div className="row g-5 align-items-start">
                    {/* FORM */}
                    <div className="col-12 col-md-7">
                        <div className="bg-white rounded-4 shadow-soft p-4 p-md-5">
                            <h2 className="h4 fw-bold mb-4 text-brand-main">Send us a message</h2>
                            <form className="needs-validation" autoComplete="off" onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold" htmlFor="name">Name</label>
                                        <input className="form-control form-control-lg" id="name" name="name" required
                                               placeholder="Your Name"/>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold" htmlFor="email">Email</label>
                                        <input className="form-control form-control-lg" id="email" name="email"
                                               type="email" required placeholder="you@email.com"/>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label fw-semibold" htmlFor="message">Message</label>
                                        <textarea className="form-control form-control-lg" id="message" name="message"
                                                  rows={5} required placeholder="How can we help you?"></textarea>
                                    </div>
                                </div>
                                <div className="mt-4 d-flex gap-3 align-items-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary px-5 py-3 fw-bold cta-btn"
                                        style={{borderRadius: 32, fontSize: "1.12rem"}}
                                    >
                                        Send Message
                                    </button>
                                    {submitted && (
                                        <span className="fw-semibold text-brand" style={{fontSize: "1.12rem"}}>
                      Thank you! We’ve received your message.
                    </span>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* CONTACT INFO */}
                    <div className="col-12 col-md-5">
                        <div className="bg-white rounded-4 p-4 shadow-soft mb-4">
                            <div className="mb-3 fw-bold text-brand-main">Quick Contacts</div>

                            <div className="mb-3 d-flex align-items-center gap-2">
                                <IconMail size={22} style={{color: "var(--brand-primary)"}}/>
                                <a href="mailto:hello@spoonsync.com" className="fw-semibold footer-link"
                                   style={{fontSize: "1.08rem"}}>
                                    hello@spoonsync.com
                                </a>
                            </div>

                            <div className="mb-3 d-flex align-items-center gap-2">
                                <IconBrandWhatsapp size={22} style={{color: "var(--brand-primary)"}}/>
                                <a href="https://wa.me/8801300000000" className="fw-semibold footer-link"
                                   style={{fontSize: "1.08rem"}}>
                                    WhatsApp Chat
                                </a>
                            </div>

                            <div className="text-muted small mt-3">
                                SpoonSync HQ,
                                <br/> Dhaka, Bangladesh &middot; Amsterdam, NL
                            </div>
                        </div>

                        <div className="bg-white rounded-4 p-4 shadow-soft">
                            <div className="fw-bold mb-2 text-brand-main">Support hours</div>
                            <div className="mb-1">Sunday–Friday: 9am – 8pm BST</div>
                            <div className="mb-0">Europe: 10am – 7pm CET</div>
                            <div className="mt-2 text-muted small">We usually respond within 1 business day.</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
