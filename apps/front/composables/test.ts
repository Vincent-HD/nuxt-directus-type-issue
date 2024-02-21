import { Article } from '../types/directusTypes';

const articles = await useDirectusRest<Article[]>(
  readItems('article', {
    limit: -1,
  })
);
