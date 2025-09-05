import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {FaqSection} from "../components/FaqSection";
import QrcnHead from "../components/QrcnHead";

export default function FAQ() {
    return (
        <>
            <QrcnHead title={'Faq | QrCentraal'}/>
            <Navbar/>
            <main className="bg-white">
                {/* HERO */}
                <section
                    className="py-5 py-md-7"
                    style={{
                        background: "linear-gradient(120deg, #eaf6f1 70%, #fff 100%)",
                        borderBottom: "1px solid #e2ece6"
                    }}
                >
                    <div className="container-xl text-center">
          <span className="badge rounded-pill mb-2" style={{background: "#214a3b", color: "#fff", fontSize: "1rem"}}>
            FAQ
          </span>
                        <h1 className="display-4 fw-bold mb-3" style={{color: "#214a3b"}}>
                            Frequently Asked Questions
                        </h1>
                        <p className="lead mb-0 mx-auto" style={{maxWidth: 560}}>
                            Everything you want to know about QR Centraal—features, security, billing, and integrations.
                        </p>
                    </div>
                </section>

                <FaqSection/>

                <section className="text-center py-5">
                    <div className="fw-semibold mb-2" style={{color: "#214a3b"}}>
                        Still have questions?
                    </div>
                    <a
                        href="/contact"
                        className="btn btn-outline-success fw-bold px-4 py-2"
                        style={{borderRadius: 25}}>
                        Contact Our Team
                    </a>
                </section>
            </main>
            <Footer/>
        </>
    );
}
