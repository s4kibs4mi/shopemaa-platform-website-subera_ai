import {NextIntlClientProvider} from 'next-intl';
import {useRouter} from "next/router";

import '../styles/main.scss'; // Your custom styles, optional

export default function App({Component, pageProps}) {
    const router = useRouter();

    return (
        <NextIntlClientProvider
            locale={router.locale}
            timeZone="UTC"
            messages={pageProps.messages}>
            <Component {...pageProps} />
        </NextIntlClientProvider>
    );
}
