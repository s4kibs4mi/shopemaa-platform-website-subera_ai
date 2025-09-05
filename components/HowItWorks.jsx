import {IconDeviceMobile, IconQrcode, IconChartBar, IconBolt} from "@tabler/icons-react";

const steps = [
    {
        icon: <IconDeviceMobile size={36} style={{color: "var(--brand-primary)"}} className="mb-2"/>,
        title: "Set Up",
        desc: "Add your menu, tables, and staff roles in minutes."
    },
    {
        icon: <IconQrcode size={36} style={{color: "var(--brand-primary)"}} className="mb-2"/>,
        title: "Go Live",
        desc: "Display QR menus or take orders directly from customers."
    },
    {
        icon: <IconChartBar size={36} style={{color: "var(--brand-primary)"}} className="mb-2"/>,
        title: "Manage",
        desc: "Track orders, tables, and staff performance in real time."
    },
    {
        icon: <IconBolt size={36} style={{color: "var(--brand-primary)"}} className="mb-2"/>,
        title: "Grow",
        desc: "Use reports and insights to optimize and increase revenue."
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
