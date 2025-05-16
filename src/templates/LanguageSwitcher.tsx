'use client';

import { useRouter } from 'next/router';
import UseTranslate from "@/hooks/Usetranslate";

export default function LanguageSwitcher() {
    const t = UseTranslate();
    const router = useRouter();
    const { locale, asPath } = router;

    const switchLanguage = () => {
        const newLocale = locale === 'vi' ? 'en' : 'vi';
        router.push(asPath, asPath, { locale: newLocale });
    };

    return (
        <button className={'font-normal'} onClick={switchLanguage}>
            {t('Lang.Switch')} {locale === 'vi' ? 'English' : 'tiếng Việt'}
        </button>
    );
}