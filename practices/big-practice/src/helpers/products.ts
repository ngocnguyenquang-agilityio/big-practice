// Helpers
import { convertToSkip, isEmpty } from './utils';

// Types
import type { IProductQueryParam } from '@interfaces';

/**
 * Build products query endpoint
 * @param {IAPIEndpoint}
 * @returns {string}
 */
export const buildQueryProductEndpoint = ({ standingPage, searchKeyword, productId, category }: IProductQueryParam) => {
  switch (true) {
    case !isEmpty(category):
      return `/category/${category}`;

    case !isEmpty(searchKeyword):
      return `/search?q=${searchKeyword}&limit=9&skip=${convertToSkip(standingPage!)}`;

    case !isEmpty(standingPage):
      return `?limit=9&skip=${convertToSkip(
        standingPage!,
      )}&select=title,price,images,category,thumbnail,id,description`;

    case !isEmpty(productId):
      return `/${productId}`;

    default:
      return `?limit=9&skip=0&select=title,price,images,category,thumbnail,id,description`;
  }
};
