import {useRouter} from 'next/router';

const locales = [
    {code: 'en', name: 'EN'},
    {code: 'bn', name: 'BN'}
];

export default function LanguageSwitcher() {
    const {locale, asPath, push} = useRouter();
    return (
        <div className="flex gap-1">
            {locales.map((l) => (
                <button
                    key={l.code}
                    onClick={() => push(asPath, asPath, {locale: l.code})}
                    className={`px-3 py-1 rounded ${locale === l.code ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {l.name}
                </button>
            ))}
        </div>
    );
}
