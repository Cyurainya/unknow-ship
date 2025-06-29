import { UserConfig } from 'next-i18next';

const NextI18NextConfig: UserConfig = {
  i18n: {
    locales: ['en', 'fr', 'es'], // Define supported languages
    defaultLocale: 'en',   // Default language
  },
  localePath: './public/locales', // Path to translation files
};

export default NextI18NextConfig;