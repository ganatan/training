import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Filters, ItemsResponse, ItemsServiceInterface } from './item.model';
import { ITEMS_MOCK_DATA } from './items.mock-data';

@Injectable()
export class ItemsMockService implements ItemsServiceInterface {
  getItems(filters: Filters = {}): Observable<ItemsResponse> {
    console.log('getItems:mock');

    const page = filters.page ?? 1;
    const size = filters.size ?? ITEMS_MOCK_DATA.length;
    const offset = (page - 1) * size;

    const pagedItems = ITEMS_MOCK_DATA.slice(offset, offset + size);

    const response: ItemsResponse = {
      metadata: {
        totals: {
          currentPageTotals: {
            count: pagedItems.length,
            offset,
            limit: size
          },
          globalTotals: {
            count: ITEMS_MOCK_DATA.length,
            totalPages: Math.ceil(ITEMS_MOCK_DATA.length / size)
          }
        }
      },
      data: pagedItems
    };

    return of(response);
  }
}
