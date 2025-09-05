import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {useTranslations} from 'next-intl';
import ContactForm from "../components/ContactForm";
import QrcnHead from "../components/QrcnHead";

export async function getStaticProps({locale}) {
    return {
        props: {
            messages: (await import(`../messages/${locale}.json`)).default,
        },
    };
}

export default function Contact() {
    const t = useTranslations('contact');
    return (
        <>
            <QrcnHead title={'Contact | QrCentraal'}/>
            <Navbar/>
            <ContactForm/>
            <Footer/>
        </>
    );
}
