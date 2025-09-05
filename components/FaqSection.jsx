import {useState} from "react";

// FAQ content (Subera AI)
const faqs = [
    {
        q: "What does Subera AI do?",
        a: "Subera AI is a commerce recommendation engine. It delivers real-time upsell, cross-sell, complete-the-package, and bought-together suggestions to increase AOV, CTR, and revenue."
    },
    {
        q: "Who is Subera AI for?",
        a: "Merchants and commerce teams across Retail, Restaurants, Grocery, and Digital goods who want measurable growth with low-latency AI recommendations."
    },
    {
        q: "How does Subera integrate with my stack?",
        a: "Install our Shopify app, enhance Stripe Checkout, or use our headless SDK/API for Jamstack and custom storefronts. We also support webhooks for events and server-side integrations."
    },
    {
        q: "How accurate and fast are the recommendations?",
        a: "Recommendations are tuned per vertical and optimized for speed, targeting sub-200ms P95 latency. Models blend embeddings, co-occurrence, and business rules (inventory, margin, allergens)."
    },
    {
        q: "How does Subera handle data privacy and security?",
        a: "Data is tenant-isolated. We use encryption in transit and at rest, role-based access, and follow industry best practices. You control what product, order, and customer fields are shared."
    },
    {
        q: "What analytics do I get?",
        a: "CTR on rec slots, AOV uplift vs baseline, revenue attribution by placement, and experiment reporting (A/B). Dashboards highlight impact and drill-downs by flow and vertical."
    },
    {
        q: "How does billing work?",
        a: "Start free and upgrade as you grow. Plans are usage-based (recommendation calls/month) with monthly billing. Cancel anytime. Enterprise plans include SLAs and dedicated support."
    },
    {
        q: "Can I add business rules?",
        a: "Yes. You can enforce constraints like inventory thresholds, margin targets, price windows, allergen exclusions, or brand/compatibility filters—without retraining models."
    }
];

export function FaqSection({title = "Frequently Asked Questions"}) {
    const [open, setOpen] = useState(null);

    return (
        <section className="faq-section">
            <h2 className="faq-title">{title}</h2>
            <div className="faq-list">
                {faqs.map((item, idx) => (
                    <div key={idx} className={`faq-item${open === idx ? " open" : ""}`}>
                        <button
                            className="faq-question"
                            aria-expanded={open === idx}
                            onClick={() => setOpen(open === idx ? null : idx)}
                        >
                            <span className="faq-icon">{open === idx ? "−" : "+"}</span>
                            {item.q}
                        </button>
                        <div
                            className="faq-answer"
                            style={{
                                maxHeight: open === idx ? 400 : 0,
                                padding: open === idx ? "0.5em 0 1.1em 2.3em" : "0 0 0 2.3em"
                            }}
                        >
                            <span>{item.a}</span>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .faq-section {
                    padding: 4rem 0 3rem 0;
                    background: #fff;
                }

                .faq-title {
                    color: var(--brand-secondary);
                    font-size: 2rem;
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 2.4rem;
                }

                .faq-list {
                    max-width: 650px;
                    margin: 0 auto;
                }

                .faq-item {
                    border-bottom: 1px solid rgba(var(--brand-secondary-rgb), 0.12);
                }

                .faq-question {
                    width: 100%;
                    background: none;
                    border: none;
                    outline: none;
                    font-size: 1.23rem;
                    color: var(--brand-secondary);
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    padding: 1.25em 0;
                    transition: background 0.12s;
                    cursor: pointer;
                    text-align: left;
                }

                .faq-question:hover,
                .faq-item.open .faq-question {
                    background: var(--brand-secondary-accent);
                }

                .faq-icon {
                    display: inline-block;
                    margin-right: 1.1em;
                    font-size: 1.5em;
                    color: var(--brand-primary);
                    min-width: 1.2em;
                    font-weight: 800;
                    line-height: 1;
                }

                .faq-answer {
                    overflow: hidden;
                    color: rgba(var(--brand-secondary-rgb), 0.9);
                    font-size: 1.07rem;
                    line-height: 1.6;
                    transition: max-height 0.22s cubic-bezier(0.5, 0, 0.5, 1), padding 0.22s;
                }
            `}</style>
        </section>
    );
}

export default FaqSection;
