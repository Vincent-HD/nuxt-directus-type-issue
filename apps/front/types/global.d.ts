import { RouteLocationNormalizedLoaded } from '#vue-router';
import { CustomDirectusTypes } from './directusTypes';

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    searchInputHideRouteNameList: Array<string>;
  }
}

type DirectusTypes =
  | 'directus_activity'
  | 'directus_collections'
  | 'directus_dashboards'
  | 'directus_fields'
  | 'directus_files'
  | 'directus_flows'
  | 'directus_folders'
  | 'directus_migrations'
  | 'directus_notifications'
  | 'directus_operations'
  | 'directus_panels'
  | 'directus_permissions'
  | 'directus_presets'
  | 'directus_relations'
  | 'directus_revisions'
  | 'directus_roles'
  | 'directus_sessions'
  | 'directus_settings'
  | 'directus_shares'
  | 'directus_translations'
  | 'directus_webhooks';

declare global {
  interface DirectusSchema extends Omit<CustomDirectusTypes, DirectusTypes> {}
  interface Schema extends Omit<CustomDirectusTypes, DirectusTypes> {}
}

export {};
