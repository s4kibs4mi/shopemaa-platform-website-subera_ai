import DigitalMenuUsecase from "../../components/usecases/DigitalMenuUsecase";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import QrcnHead from "../../components/QrcnHead";
import OrdersKDSUsecase from "../../components/usecases/OrdersKDSUsecase";
import TablesUsecase from "../../components/usecases/TablesUsecase";
import StaffRolesUsecase from "../../components/usecases/StaffRoleUsecase";
import AnalyticsReportsUsecase from "../../components/usecases/AnalyticsReportsUsecase";

export async function getStaticProps({params, locale}) {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
            slug: params.slug,
        },
    };
}

export async function getStaticPaths() {
    const slugs = ['digital-menu', 'analytics', 'orders-kds', 'tables', 'staff-roles'];
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

export default function Usecase({slug}) {
    switch (slug) {
        case 'digital-menu':
            return (
                <>
                    <QrcnHead title={'Digital Menu | QrCentraal'}/>
                    <Navbar/>
                    <DigitalMenuUsecase/>
                    <Footer/>
                </>
            )
        case 'analytics':
            return (
                <>
                    <QrcnHead title={'Analytics | QrCentraal'}/>
                    <Navbar/>
                    <AnalyticsReportsUsecase/>
                    <Footer/>
                </>
            )
        case 'orders-kds':
            return (
                <>
                    <QrcnHead title={'Orders & KDS | QrCentraal'}/>
                    <Navbar/>
                    <OrdersKDSUsecase/>
                    <Footer/>
                </>
            )
        case 'tables':
            return (
                <>
                    <QrcnHead title={'Tables | QrCentraal'}/>
                    <Navbar/>
                    <TablesUsecase/>
                    <Footer/>
                </>
            )
        case 'staff-roles':
            return (
                <>
                    <QrcnHead title={'Staff & Roles | QrCentraal'}/>
                    <Navbar/>
                    <StaffRolesUsecase/>
                    <Footer/>
                </>
            )
        default:
            return (<></>)
    }
}
