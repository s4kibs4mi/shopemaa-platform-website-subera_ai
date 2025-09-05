import Navbar from '../components/Navbar';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import QrcnHead from "../components/QrcnHead";

export async function getStaticProps({locale}) {
    return {
        props: {
            messages: (await import(`../messages/${locale}.json`)).default,
        },
    };
}

export default function Pricing() {
    return (
        <>
            <QrcnHead title={'Pricing | QrCentraal'}/>
            <Navbar/>
            <PricingSection showTitle={true}/>
            <Footer/>
        </>
    );
}
