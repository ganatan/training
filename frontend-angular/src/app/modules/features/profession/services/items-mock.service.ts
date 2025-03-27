import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Filters, ItemsResponse, ItemsServiceInterface } from './item.model';
import { ITEMS_MOCK_DATA } from './items.mock-data';

@Injectable()
export class ItemsMockService implements ItemsServiceInterface {
  getItems(filters: Filters = {}): Observable<ItemsResponse> {
    console.log('getItems:mock');

    const currentPage = filters.page ?? 1;
    const perPage = filters.size ?? ITEMS_MOCK_DATA.length;
    const offset = (currentPage - 1) * perPage;

    const pagedItems = ITEMS_MOCK_DATA.slice(offset, offset + perPage);

    const totalItems = ITEMS_MOCK_DATA.length;
    const totalPages = Math.ceil(totalItems / perPage);

    const response: ItemsResponse = {
      metadata: {
        pagination: {
          currentPage,
          perPage,
          totalItems,
          totalPages
        }
      },
      data: pagedItems
    };

    return of(response);
  }
}