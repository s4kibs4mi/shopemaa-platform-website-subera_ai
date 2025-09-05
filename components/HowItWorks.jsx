import {IconBolt, IconChartBar, IconCloudDataConnection, IconShoppingCart} from "@tabler/icons-react";

const steps = [
    {
        icon: <IconCloudDataConnection size={36} style={{color: "var(--brand-primary)"}} className="mb-2"/>,
        title: "Connect",
        desc: "Integrate with Shopify, Stripe, or your stack in minutes."
    },
    {
        icon: <IconShoppingCart size={36} style={{color: "var(--brand-primary)"}} className="mb-2"/>,
        title: "Enable",
        desc: "Turn on upsell, cross-sell, and package recommendations instantly."
    },
    {
        icon: <IconBolt size={36} style={{color: "var(--brand-primary)"}} className="mb-2"/>,
        title: "Recommend",
        desc: "AI delivers real-time suggestions at product and checkout pages."
    },
    {
        icon: <IconChartBar size={36} style={{color: "var(--brand-primary)"}} className="mb-2"/>,
        title: "Grow",
        desc: "Track AOV, CTR uplift, and revenue impact in your dashboard."
    }
];

export default function HowItWorks() {
    return (
        <section className="section-spacing bg-white">
            <div className="container-xl">
                <div
                    className="section-title text-center mb-5 fs-1 fw-bold"
                    style={{color: "var(--brand-secondary)", letterSpacing: "-1.3px"}}
                >
                    How It Works
                </div>
                <div className="row text-center justify-content-center">
                    {steps.map((step, i) => (
                        <div className="col-6 col-md-3 mb-4 mb-md-0" key={i}>
                            <div className="mb-2">{step.icon}</div>
                            <div className="fw-bold fs-2 text-dark mb-2">{step.title}</div>
                            <div
                                className="text-black fs-5"
                                style={{maxWidth: 200, margin: "0 auto", opacity: 0.85}}
                            >
                                {step.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
