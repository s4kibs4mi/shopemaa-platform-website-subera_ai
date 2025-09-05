import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QrcnHead from "../components/QrcnHead";

export default function Docs() {
    return (
        <>
            <QrcnHead title={"Docs | SpoonSync"}/>
            <Navbar/>
            <main className="bg-white">
                {/* HERO */}
                <section
                    className="py-5 py-md-7"
                    style={{
                        background: "linear-gradient(120deg, var(--brand-secondary-accent) 70%, #fff 100%)",
                        borderBottom: "1px solid rgba(var(--brand-secondary-rgb), 0.12)"
                    }}
                >
                    <div className="container-xl text-center">
            <span
                className="badge rounded-pill mb-2"
                style={{background: "var(--brand-secondary)", color: "#fff", fontSize: "1rem"}}
            >
              API Docs
            </span>
                        <h1 className="display-4 fw-bold mb-3 text-brand-main">
                            SpoonSync API Documentation
                        </h1>
                        <p className="lead mb-0 mx-auto"
                           style={{maxWidth: 600, color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                            Everything you need to build with SpoonSync—authentication, endpoints, code samples, and
                            more.
                            <br/>
                            Explore our OpenAPI documentation below, or{" "}
                            <a href="/contact" style={{color: "var(--brand-primary)", textDecoration: "underline"}}>
                                contact support
                            </a>{" "}
                            for integration help.
                        </p>
                    </div>
                </section>

                {/* CLIENT GENERATION INSTRUCTIONS */}
                <section className="container-xl py-5">
                    <div className="bg-white rounded-4 shadow-soft p-4 p-md-5 mb-5">
                        <h2 className="h4 fw-bold mb-3 text-brand-main">How to Generate an API Client</h2>
                        <p style={{color: "rgba(var(--brand-secondary-rgb), .9)"}}>
                            SpoonSync’s API is OpenAPI‑compliant. You can auto‑generate SDKs/clients in most major
                            languages.
                            <br/>
                            {/* 🔁 Replace with your actual API spec URL */}
                            The OpenAPI JSON spec is available at:{" "}
                            <code>https://api.spoonsync.com/openapi.json</code>
                        </p>
                        <div className="mb-3">
                            <strong>Example: Generate a JavaScript/TypeScript Client</strong>
                            <pre
                                style={{
                                    background: "#232a2d",
                                    color: "#f3f3f3",
                                    borderRadius: "0.7em",
                                    fontSize: "1rem",
                                    padding: "1.3em",
                                    marginTop: "0.8em",
                                    overflowX: "auto"
                                }}
                            >{`
docker run --rm -v $(pwd):/local openapitools/openapi-generator-cli generate \\
  -i https://api.spoonsync.com/openapi.json \\
  -g typescript-fetch \\
  -o /local/spoonsync-api-client
`}</pre>
                        </div>
                        <ul>
                            <li>
                                <strong>Replace</strong> <code>-g typescript-fetch</code> with your preferred generator:
                                <ul>
                                    <li><code>javascript</code> (ES6 JavaScript client)</li>
                                    <li><code>typescript-fetch</code> (TypeScript client, Fetch‑based)</li>
                                    <li><code>python</code>, <code>java</code>, <code>go</code>, <code>php</code>, etc.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                See full generator docs at{" "}
                                <a href="https://openapi-generator.tech/docs/generators" target="_blank" rel="noopener">
                                    openapi-generator.tech
                                </a>
                            </li>
                        </ul>
                        <div className="mt-4">
              <span className="text-brand-main" style={{fontWeight: 600}}>
                Need a custom SDK or help integrating?
              </span>
                            <a
                                href="/contact"
                                className="btn btn-outline-primary fw-bold px-4 py-2 ms-3 cta-btn-outline"
                                style={{borderRadius: 25}}
                            >
                                Contact Developer Support
                            </a>
                        </div>
                    </div>
                </section>

                {/* EMBEDDED API DOCS */}
                <section className="container-xl pb-7">
                    <div
                        className="rounded-4 shadow-soft border"
                        style={{overflow: "hidden", minHeight: 700, background: "#fff"}}
                    >
                        {/* 🔁 Replace with your actual API docs URL */}
                        <iframe
                            src="https://api.spoonsync.com/docs"
                            title="SpoonSync API Docs"
                            style={{border: "none", width: "100%", minHeight: 700}}
                            allowFullScreen
                        />
                    </div>

                    <div className="text-center mt-5">
                        <span className="fw-semibold text-brand-main">Need help or want more examples?</span>
                        <a
                            href="/contact"
                            className="btn btn-outline-primary fw-bold px-4 py-2 ms-3 cta-btn-outline"
                            style={{borderRadius: 25}}
                        >
                            Contact Developer Support
                        </a>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}
