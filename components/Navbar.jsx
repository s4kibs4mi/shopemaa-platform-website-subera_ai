import Link from "next/link";
import {useState, useRef} from "react";

// --- Adjust once here for the whole nav system! ---
const NAV_FONT_SIZE = "1rem";

// Use Cases = merchant-focused verticals
const features = [
    {name: "AI Recommendations", href: "/features/ai-recommendations"},
    {name: "Upsell Engine", href: "/features/upsell-engine"},
    {name: "Cross-sell Engine", href: "/features/cross-sell-engine"},
    {name: "Complete Package", href: "/features/complete-package"},
    {name: "Bought Together", href: "/features/bought-together"},
    {name: "Analytics & Insights", href: "/features/analytics"}
];

// Solutions = features/capabilities
const solutions = [
    {name: "Retail", href: "/solutions/retail"},
    {name: "Restaurants", href: "/solutions/restaurants"},
    {name: "Grocery", href: "/solutions/grocery"},
    {name: "Digital Products", href: "/solutions/digital"}
];

const integrations = [
    {name: "Shopify", href: "/solutions/retail"},
    {name: "Stripe", href: "/solutions/restaurants"},
    {name: "Headless SDK", href: "/solutions/grocery"}
];

// Dropdown (desktop: hover/click, mobile: accordion)
function NavDropdown({label, items, isMobile, open, setOpen}) {
    const dropdownId = label.replace(/\s+/g, "-").toLowerCase();

    if (isMobile) {
        return (
            <div className="w-100">
                <button
                    className="w-100 text-start nav-link fw-bold px-3 py-2"
                    style={{
                        background: "none",
                        border: "none",
                        fontSize: NAV_FONT_SIZE,
                        color: "var(--brand)", // deep maroon
                        lineHeight: 1.28,
                    }}
                    onClick={() => setOpen(open === dropdownId ? "" : dropdownId)}
                    aria-expanded={open === dropdownId}
                    aria-controls={`${dropdownId}-menu`}
                >
                    {label}
                    <span
                        style={{
                            float: "right",
                            transform: open === dropdownId ? "rotate(90deg)" : "none",
                            transition: "transform .18s",
                        }}
                    >
            ▶
          </span>
                </button>
                <div
                    id={`${dropdownId}-menu`}
                    className="mobile-dropdown"
                    style={{
                        maxHeight: open === dropdownId ? items.length * 48 + "px" : "0px",
                        overflow: "hidden",
                        transition: "max-height .24s",
                    }}
                >
                    {items.map((i) => (
                        <Link
                            key={i.href}
                            href={i.href}
                            className="dropdown-item py-2 px-4 fw-semibold"
                            style={{
                                fontSize: NAV_FONT_SIZE,
                                background: "var(--surface)",
                                color: "var(--brand)",
                                lineHeight: 1.25,
                            }}
                            tabIndex={open === dropdownId ? 0 : -1}
                            onClick={() => setOpen("")}
                        >
                            {i.name}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    // Desktop
    const [show, setShow] = useState(false);
    const hoverRefs = useRef({button: false, menu: false});
    const updateShow = () => setShow(hoverRefs.current.button || hoverRefs.current.menu);

    return (
        <div
            className="position-relative d-inline-block"
            onMouseEnter={() => {
                hoverRefs.current.button = true;
                updateShow();
            }}
            onMouseLeave={() => {
                hoverRefs.current.button = false;
                setTimeout(updateShow, 1);
            }}
            tabIndex={0}
        >
            <button
                className="btn btn-link nav-link fw-bold text-brand-main px-3 py-1"
                style={{
                    fontWeight: 700,
                    fontSize: NAV_FONT_SIZE,
                    outline: "none",
                    background: "none",
                    lineHeight: 1.28,
                }}
                tabIndex={0}
                aria-haspopup="menu"
                aria-expanded={show}
                type="button"
                onFocus={() => {
                    hoverRefs.current.button = true;
                    updateShow();
                }}
                onBlur={() => {
                    hoverRefs.current.button = false;
                    setTimeout(updateShow, 1);
                }}
                onClick={() => setShow((s) => !s)}
            >
                {label}
                <span
                    style={{
                        display: "inline-block",
                        marginLeft: "0.4em",
                        transition: "transform .18s",
                        transform: show ? "rotate(180deg)" : "none",
                    }}
                >
          ▼
        </span>
            </button>
            {show && (
                <div
                    className="position-absolute bg-white shadow rounded-3 px-2 py-2 mt-1"
                    style={{
                        minWidth: 220,
                        zIndex: 999,
                        fontSize: NAV_FONT_SIZE,
                        left: 0,
                        top: "100%",
                    }}
                    onMouseEnter={() => {
                        hoverRefs.current.menu = true;
                        updateShow();
                    }}
                    onMouseLeave={() => {
                        hoverRefs.current.menu = false;
                        setTimeout(updateShow, 1);
                    }}
                    role="menu"
                >
                    {items.map((i) => (
                        <Link
                            key={i.href}
                            href={i.href}
                            className="dropdown-item py-2 px-3 fw-semibold"
                            style={{
                                fontSize: NAV_FONT_SIZE,
                                borderRadius: ".55rem",
                                lineHeight: 1.25,
                                color: "var(--brand)",
                            }}
                            tabIndex={0}
                            onClick={() => setShow(false)}
                            role="menuitem"
                        >
                            {i.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState("");

    return (
        <>
            <nav
                className="bg-white shadow-sm border-bottom py-2 navbar-wrapper"
                style={{borderBottom: "4px solid var(--brand)", position: "sticky", top: 0, zIndex: 99}}
            >
                <div className="container-xl d-flex align-items-center justify-content-between gap-2">
                    <Link href="/" className="d-flex align-items-center text-decoration-none"
                          aria-label="Subera AI home">
                        <img src="/subera/logo.svg" height={38} alt="Subera AI" className="me-2"/>
                    </Link>

                    <div className="d-none d-lg-flex gap-2 align-items-center">
                        <Link href="/" className="nav-link text-brand-main fw-bold px-3">
                            Home
                        </Link>
                        <NavDropdown label="Features" items={features}/>
                        <NavDropdown label="Solutions" items={solutions}/>
                        <NavDropdown label="Integrations" items={integrations}/>
                        <Link href="/pricing" className="nav-link text-brand-main fw-bold px-3">
                            Pricing
                        </Link>
                        <Link href="/blogs" className="nav-link text-brand-main fw-bold px-3">
                            Docs
                        </Link>
                        <Link href="/blogs" className="nav-link text-brand-main fw-bold px-3">
                            Blog
                        </Link>
                    </div>

                    <Link
                        href="/#contact"
                        className="btn btn-primary cta-btn px-4 py-2 ms-2 fs-5 d-none d-lg-inline-block">
                        Start Free
                    </Link>

                    {/* Hamburger */}
                    <button
                        className="d-lg-none border-0 bg-transparent ms-2 hamburger-icon"
                        aria-label="Open navigation menu"
                        onClick={() => setMobileOpen(true)}>
                        ☰
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`navbar-mobile-drawer ${mobileOpen ? "open" : ""}`}
                style={{
                    opacity: mobileOpen ? 1 : 0,
                    pointerEvents: mobileOpen ? "auto" : "none",
                }}
                onClick={() => setMobileOpen(false)}
                aria-hidden={!mobileOpen}>
                <nav className="bg-white pt-3 pb-5" onClick={(e) => e.stopPropagation()}>
                    <div className="d-flex align-items-center justify-content-between px-4 mb-2">
                        <Link
                            href="/"
                            className="d-flex align-items-center text-decoration-none"
                            onClick={() => setMobileOpen(false)}
                            aria-label="Subera AI home"
                        >
                            <img src="/subera/logo.svg" height={36} alt="Subera AI" className="me-2"/>
                        </Link>
                        <button
                            className="border-0 bg-transparent hamburger-icon"
                            aria-label="Close navigation menu"
                            onClick={() => setMobileOpen(false)}
                        >
                            ✕
                        </button>
                    </div>

                    <div className="w-100 d-flex flex-column gap-1 px-2 pt-2">
                        <Link href="/" className="nav-link fw-bold px-3 py-2" onClick={() => setMobileOpen(false)}>
                            Home
                        </Link>

                        <NavDropdown label="Use Cases" items={features} isMobile open={mobileDropdown}
                                     setOpen={setMobileDropdown}/>
                        <NavDropdown label="Solutions" items={solutions} isMobile open={mobileDropdown}
                                     setOpen={setMobileDropdown}/>

                        <Link href="/pricing" className="nav-link fw-bold px-3 py-2"
                              onClick={() => setMobileOpen(false)}>
                            Pricing
                        </Link>
                        <Link href="/about" className="nav-link fw-bold px-3 py-2" onClick={() => setMobileOpen(false)}>
                            About
                        </Link>
                        <Link href="/blog" className="nav-link fw-bold px-3 py-2" onClick={() => setMobileOpen(false)}>
                            Blog
                        </Link>

                        <Link
                            href="/#contact"
                            className="btn btn-primary cta-btn mt-3 px-4 py-2 fs-5"
                            onClick={() => setMobileOpen(false)}
                        >
                            Start Free
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}
