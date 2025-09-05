import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {useTranslations} from 'next-intl';
import AboutUs from "../components/AboutUs";
import QrcnHead from "../components/QrcnHead";

export async function getStaticProps({locale}) {
    return {
        props: {
            messages: (await import(`../messages/${locale}.json`)).default,
        },
    };
}

export default function About() {
    const t = useTranslations('about');
    return (
        <>
            <QrcnHead title={'About | QrCentraal'}/>
            <Navbar/>
            <AboutUs/>
            <Footer/>
        </>
    );
}
