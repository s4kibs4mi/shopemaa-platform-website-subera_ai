import {
    IconShoppingCart,
    IconToolsKitchen2,
    IconBasket,
    IconDeviceLaptop
} from "@tabler/icons-react";

const cases = [
    {
        icon: <IconShoppingCart size={32} className="text-brand"/>,
        title: "For Retail",
        desc: "Boost attach rate with accessories and complementary product recommendations.",
        href: "/solutions/retail",
        color: "#ffffff"
    },
    {
        icon: <IconToolsKitchen2 size={32} className="text-brand"/>,
        title: "For Restaurants",
        desc: "Increase check size with meal combos, sides, and allergen-aware upsells.",
        href: "/solutions/restaurants",
        color: "#ffffff"
    },
    {
        icon: <IconBasket size={32} className="text-brand"/>,
        title: "For Grocery",
        desc: "Encourage larger baskets with recipe bundles and smart restock suggestions.",
        href: "/solutions/grocery",
        color: "#ffffff"
    },
    {
        icon: <IconDeviceLaptop size={32} className="text-brand"/>,
        title: "For Digital Products",
        desc: "Drive more value with ebook + audio bundles, software add-ons, and upgrade paths.",
        href: "/solutions/digital",
        color: "#ffffff"
    }
];

export default function UseCases() {
    return (
        <section className="section-spacing bg-accent">
            <div className="container-xl">
                <div className="section-title mb-5 fs-1 fw-bold">
                    Explore Our <span className="text-brand">Solutions</span>
                </div>

                <div className="row g-4">
                    {cases.map((u, i) => (
                        <div className="col-12" key={i}>
                            <a
                                href={u.href}
                                className="d-flex align-items-center p-4 mb-2"
                                style={{
                                    borderRadius: "1.5rem",
                                    background: u.color,
                                    boxShadow: "0 4px 20px 0 var(--brand-secondary-shadow)",
                                    minHeight: 120,
                                    transition: "box-shadow .18s, transform .18s",
                                    textDecoration: "none"
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.017)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
                            >
                                <div
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        minHeight: "60px",
                                        minWidth: "60px",
                                        background: "var(--brand-secondary-accent)",
                                        borderRadius: "1rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    {u.icon}
                                </div>

                                <div className="ms-4 flex-grow-1">
                                    <div
                                        className="fw-bold fs-3 text-brand-main mb-1"
                                        style={{letterSpacing: "-.5px"}}
                                    >
                                        {u.title}
                                    </div>
                                    <div className="fs-5" style={{color: "rgba(var(--brand-secondary-rgb), 0.9)"}}>
                                        {u.desc}
                                    </div>
                                </div>

                                <span className="ms-auto fw-semibold text-brand fs-4 d-none d-md-inline">&rarr;</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
