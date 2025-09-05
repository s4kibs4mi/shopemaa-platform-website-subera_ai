import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {useTranslations} from 'next-intl';
import CareersPage from "../components/CareersPage";
import QrcnHead from "../components/QrcnHead";

export async function getStaticProps({locale}) {
    return {
        props: {
            messages: (await import(`../messages/${locale}.json`)).default,
        },
    };
}

export default function Careers() {
    const t = useTranslations('contact');
    return (
        <>
            <QrcnHead title={'Careers | QrCentraal'}/>
            <Navbar/>
            <CareersPage/>
            <Footer/>
        </>
    );
}
