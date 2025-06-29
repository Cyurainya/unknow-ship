import type { NextConfig } from "next";
// @ts-expect-error no official types
import withLess from 'next-with-less';
import i18nConfig from './next-i18next.config';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...i18nConfig,
   turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        'primary-color': '#0b0d10',
      },
    },
  },
};

export default withLess(nextConfig);;
