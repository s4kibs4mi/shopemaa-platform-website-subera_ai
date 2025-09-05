import {
    IconQrcode,
    IconChartBar,
    IconDeviceMobile,
    IconUser,
    IconFileText,
    IconGift,
    IconBolt,
    IconCloudDataConnection
} from "@tabler/icons-react";

const features = [
    {
        icon: <IconQrcode size={44} className="mb-3 text-brand" />,
        title: "Dynamic QR Menus",
        desc: "Update items, prices, and availability in real time—no reprints needed."
    },
    {
        icon: <IconBolt size={44} className="mb-3 text-brand" />,
        title: "Orders & KDS",
        desc: "Send orders to kitchen instantly with clear statuses: Preparing, Ready, Served."
    },
    {
        icon: <IconDeviceMobile size={44} className="mb-3 text-brand" />,
        title: "Tables & Floorplan",
        desc: "Track table status and turnover to seat faster and serve smarter."
    },
    {
        icon: <IconUser size={44} className="mb-3 text-brand" />,
        title: "Staff & Roles",
        desc: "Granular permissions for admins, waiters, and kitchen teams."
    },
    {
        icon: <IconFileText size={44} className="mb-3 text-brand" />,
        title: "Modifiers & Add-ons",
        desc: "Options, extras, and combos that fit how your menu really works."
    },
    {
        icon: <IconGift size={44} className="mb-3 text-brand" />,
        title: "Offers & Loyalty",
        desc: "Run promos and reward regulars with coupons and points."
    },
    {
        icon: <IconChartBar size={44} className="mb-3 text-brand" />,
        title: "Insights & Reports",
        desc: "Sales, item performance, peak hours—know what drives revenue."
    },
    {
        icon: <IconCloudDataConnection size={44} className="mb-3 text-brand" />,
        title: "Integrations & API",
        desc: "Connect POS and payments or automate with webhooks and API."
    }
];

export default function Features() {
    return (
        <section className="section-spacing bg-white">
            <div className="container-xl">
                <div
                    className="section-title text-center mb-5 fs-1 fw-bold"
                    style={{ letterSpacing: "-1.3px" }}
                >
                    <span className="text-brand">Powerful Features</span> for Modern Restaurants
                </div>

                <div className="row g-5 justify-content-center">
                    {features.map((f, i) => (
                        <div className="col-12 col-sm-6 col-lg-3" key={i}>
                            <div
                                className="text-center py-5 px-3 bg-card-tint shadow-soft"
                                style={{ borderRadius: "2rem", minHeight: 230 }}
                            >
                                <div className="mb-2">{f.icon}</div>
                                <div
                                    className="fw-bolder fs-2 text-dark mb-2"
                                    style={{ letterSpacing: "-.5px" }}
                                >
                                    {f.title}
                                </div>
                                <div
                                    className="fs-4"
                                    style={{ maxWidth: 230, margin: "0 auto" }}
                                >
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
