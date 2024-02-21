const articles = await useDirectusRest(
  readItems('article', {
    limit: -1,
  })
);

// Type isn't working anymore
// Check inside .nuxt/types/imports.d.ts
// Now Nuxt auto import SDK version 13 not 15, because 13 is already installed by the directus-extension package