import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import IntegrationsApiSolution from "../../components/solutions/IntegrationsApiSolution";
import QrcnHead from "../../components/QrcnHead";
import PaymentGatewaySolution from "../../components/solutions/PaymentGatewaySolution";
import MultiBranchControlSolution from "../../components/solutions/MultiBranchControlSolution";

export async function getStaticProps({params, locale}) {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
            slug: params.slug,
        },
    };
}

export async function getStaticPaths() {
    const slugs = ['api-integrations', 'payment-gateway-integrations', 'multi-branch'];
    const locales = ['en', 'bn'];
    return {
        paths: slugs.flatMap((slug) =>
            locales.map((locale) => ({
                params: {slug},
                locale,
            }))
        ),
        fallback: false,
    };
}

export default function Solution({slug}) {
    switch (slug) {
        case 'api-integrations':
            return (
                <>
                    <QrcnHead/>
                    <Navbar/>
                    <IntegrationsApiSolution/>
                    <Footer/>
                </>
            )
        case 'payment-gateway-integrations':
            return (
                <>
                    <QrcnHead/>
                    <Navbar/>
                    <PaymentGatewaySolution/>
                    <Footer/>
                </>
            )
        case 'multi-branch':
            return (
                <>
                    <QrcnHead/>
                    <Navbar/>
                    <MultiBranchControlSolution/>
                    <Footer/>
                </>
            )
        default:
            return (<></>)
    }
}
