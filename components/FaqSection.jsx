import {useState} from "react";

// FAQ content (SpoonSync)
const faqs = [
    {
        q: "What does SpoonSync do?",
        a: "SpoonSync streamlines restaurant operations—QR menus, ordering & KDS, tables, staff roles, and analytics—in one platform."
    },
    {
        q: "Who is SpoonSync for?",
        a: "Single venues, cafes, multi-branch restaurants, and hospitality groups that want faster service, fewer errors, and better insights."
    },
    {
        q: "How secure is my data on SpoonSync?",
        a: "Security and privacy are top priorities. We use encryption in transit and at rest, role-based access, and industry best practices."
    },
    {
        q: "Can SpoonSync integrate with my existing tools?",
        a: "Yes. We support POS, payment gateways, webhooks, and a developer-friendly API. Custom integrations are available for teams."
    },
    {
        q: "How does billing work?",
        a: "Start free and upgrade anytime. Manage your plan from the dashboard. Major payment methods are accepted; cancel anytime."
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
