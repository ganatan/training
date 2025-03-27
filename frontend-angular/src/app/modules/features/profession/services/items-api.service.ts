import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { URL_ITEMS } from './item.constants';
import {
  Filters,
  ItemsResponse,
  ItemsServiceInterface,
  getDefaultItemsResponse
} from './item.model';

@Injectable()
export class ItemsApiService implements ItemsServiceInterface {
  private http = inject(HttpClient);
  private backendUrl = environment.backend;

  getItems(filters: Filters = {}): Observable<ItemsResponse> {
    console.log('00000000001:getItems:api:' + JSON.stringify(filters));
    const params = this.buildQueryParams(filters);
    const url = `${this.backendUrl}/${URL_ITEMS}${params}`;

    console.log('00000000001:'+ url);
    return this.http.get<ItemsResponse>(url).pipe(
      catchError(this.handleError('getItems', getDefaultItemsResponse()))
    );
  }

  private buildQueryParams(filters: Filters): string {
    const queryParams = new URLSearchParams();

    if (filters.size) {
      queryParams.set('page_size', filters.size.toString());
    }

    if (filters.page) {
      queryParams.set('page_number', filters.page.toString());
    }

    if (filters.sort) {
      queryParams.set('sort', filters.sort);
    }

    if (filters.name) {
      queryParams.set('name', filters.name);
    }

    return queryParams.toString() ? `?${queryParams.toString()}` : '';
  }

  private handleError<T>(operation: string, result: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result);
    };
  }
}
