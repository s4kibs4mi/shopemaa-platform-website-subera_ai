import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import QrcnHead from "../../components/QrcnHead";
import AiRecommendationsFeature from "../../components/features/AiRecommendationsFeature";
import UpsellEngineFeature from "../../components/features/UpsellEngineFeature";
import CrossSellEngineFeature from "../../components/features/CrossSellEngineFeature";
import CompletePackageFeature from "../../components/features/CompletePackageFeature";
import BoughtTogetherFeature from "../../components/features/BoughtTogetherFeature";

export async function getStaticProps({params, locale}) {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
            slug: params.slug,
        },
    };
}

export async function getStaticPaths() {
    const slugs = ['ai-recommendations', 'upsell', 'cross-sell', 'complete-package', 'bought-together', 'analytics'];
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

export default function Features({slug}) {
    switch (slug) {
        case 'ai-recommendations':
            return (
                <>
                    <QrcnHead title={'AI Recommendations | Subera AI'}/>
                    <Navbar/>
                    <AiRecommendationsFeature/>
                    <Footer/>
                </>
            )
        case 'upsell':
            return (
                <>
                    <QrcnHead title={'Upsell | Subera AI'}/>
                    <Navbar/>
                    <UpsellEngineFeature/>
                    <Footer/>
                </>
            )
        case 'cross-sell':
            return (
                <>
                    <QrcnHead title={'Cross Sell | Subera AI'}/>
                    <Navbar/>
                    <CrossSellEngineFeature/>
                    <Footer/>
                </>
            )
        case 'complete-package':
            return (
                <>
                    <QrcnHead title={'Complete Package | Subera AI'}/>
                    <Navbar/>
                    <CompletePackageFeature/>
                    <Footer/>
                </>
            )
        case 'bought-together':
            return (
                <>
                    <QrcnHead title={'Bought Together | Subera AI'}/>
                    <Navbar/>
                    <BoughtTogetherFeature/>
                    <Footer/>
                </>
            )
        case 'analytics':
            return (
                <>
                    <QrcnHead title={'Analytics | Subera AI'}/>
                    <Navbar/>
                    <Footer/>
                </>
            )
        default:
            return (<></>)
    }
}
