import { createResolver } from '@nuxt/kit';
import type { RouteLocationNormalizedLoaded as Routes } from '#vue-router';
const { resolve } = createResolver(import.meta.url);

const searchInputHideRouteNameList: Array<Routes['name']> = [
  'index',
  'articles',
];
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      version: process.env.npm_package_version,
      searchInputHideRouteNameList,
    },
  },
  alias: {
    '@styled-system': resolve('./styled-system'),
    '@images': resolve('./assets/images'),
    '@css': resolve('./assets/css'),
  },
  css: ['@/assets/css/global.css'],
  modules: ['@bg-dev/nuxt-directus', '@vueuse/nuxt'],
  postcss: {
    plugins: {
      '@pandacss/dev/postcss': {},
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          // reorder alias for autocomplete: https://github.com/nuxt/nuxt/issues/14816#issuecomment-1484918081
          '@': ['..'],
          '@/*': ['../*'],
        },
      },
    },
  },
  devtools: { enabled: true },
  experimental: {
    typedPages: true,
    viewTransition: true,
  },
  directus: {
    rest: {
      baseUrl: process.env.DIRECTUS_BASE_URL || 'http://127.0.0.1:8055',
      nuxtBaseUrl: process.env.NUXT_BASE_URL || 'http://127.0.0.1:3000',
    },
    auth: {
      enabled: true,
      enableGlobalAuthMiddleware: true,
      userFields: ['*'],
      redirect: {
        login: '/connexion',
        logout: '/connexion',
        home: '/',
        resetPassword: '/recuperation',
        callback: '',
      },
    },
  },
});
