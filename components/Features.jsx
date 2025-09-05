import {
    IconBolt,
    IconChartBar,
    IconGift,
    IconPackage,
    IconTrendingUp,
    IconShoppingCart,
    IconDeviceAnalytics,
    IconCloudDataConnection
} from "@tabler/icons-react";

const features = [
    {
        icon: <IconBolt size={44} className="mb-3 text-brand"/>,
        title: "AI-Powered Upsells",
        desc: "Surface the right add-ons at the right time to boost average order value."
    },
    {
        icon: <IconShoppingCart size={44} className="mb-3 text-brand"/>,
        title: "Cross-Sell Engine",
        desc: "Recommend complementary items that fit seamlessly with what customers buy."
    },
    {
        icon: <IconPackage size={44} className="mb-3 text-brand"/>,
        title: "Complete-the-Package",
        desc: "Build bundles that finish the cart—meals, kits, or product packages."
    },
    {
        icon: <IconGift size={44} className="mb-3 text-brand"/>,
        title: "Bought-Together Insights",
        desc: "Leverage buying patterns to suggest items that customers frequently pair."
    },
    {
        icon: <IconTrendingUp size={44} className="mb-3 text-brand"/>,
        title: "Growth Analytics",
        desc: "Track AOV, CTR uplift, and revenue impact with clear dashboards."
    },
    {
        icon: <IconDeviceAnalytics size={44} className="mb-3 text-brand"/>,
        title: "Real-Time Precision",
        desc: "Latency under 200ms ensures seamless experiences at scale."
    },
    {
        icon: <IconChartBar size={44} className="mb-3 text-brand"/>,
        title: "ROI Reporting",
        desc: "Show stakeholders exactly how AI recommendations drive conversion."
    },
    {
        icon: <IconCloudDataConnection size={44} className="mb-3 text-brand"/>,
        title: "Integrations & API",
        desc: "Plug into Shopify, Stripe, Jamstack, or your custom commerce stack."
    }
];

export default function Features() {
    return (
        <section className="section-spacing bg-white">
            <div className="container-xl">
                <div
                    className="section-title text-center mb-5 fs-1 fw-bold"
                    style={{letterSpacing: "-1.3px"}}
                >
                    <span className="text-brand">Powerful Features</span> for Modern Commerce
                </div>

                <div className="row g-5 justify-content-center">
                    {features.map((f, i) => (
                        <div className="col-12 col-sm-6 col-lg-3" key={i}>
                            <div
                                className="text-center py-5 px-3 bg-card-tint shadow-soft"
                                style={{borderRadius: "2rem", minHeight: 230}}
                            >
                                <div className="mb-2">{f.icon}</div>
                                <div
                                    className="fw-bolder fs-2 text-dark mb-2"
                                    style={{letterSpacing: "-.5px"}}
                                >
                                    {f.title}
                                </div>
                                <div className="fs-4" style={{maxWidth: 230, margin: "0 auto"}}>
                                    {f.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
