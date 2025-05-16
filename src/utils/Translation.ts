import en from '@/locales/en.json';
import vi from '@/locales/vi.json';

const translations = {
    en,
    vi,
};

export function translate(key: string, lang = 'en') {
    // @ts-ignore
    return translations[lang]?.[key] ?? key;
}