import {useRouter} from 'next/router';
import en from '@/locales/en.json';
import vi from '@/locales/vi.json';

const translations = {
  en,
  vi,
};

export default function UseTranslate() {
  const { locale = 'en' } = useRouter(); // based on Next.js i18n routing

  // @ts-ignore
  return (key) => translations[locale]?.[key] || key;
}