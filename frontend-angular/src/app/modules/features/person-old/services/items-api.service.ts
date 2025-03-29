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

import { addFilterParam } from '../../../../shared/utils/query-utils';


@Injectable()
export class ItemsApiService implements ItemsServiceInterface {
  private http = inject(HttpClient);
  private backendUrl = environment.backend;

  getItems(filters: Filters = {}): Observable<ItemsResponse> {
    const params = this.buildQueryParams(filters);
    const url = `${this.backendUrl}/${URL_ITEMS}${params}`;

    return this.http.get<ItemsResponse>(url).pipe(
      catchError(this.handleError('getItems', getDefaultItemsResponse()))
    );
  }

  private buildQueryParams(filters: Filters): string {
    const queryParams = new URLSearchParams();

    if (filters.page) { queryParams.set('page', filters.page.toString()); }
    if (filters.size) { queryParams.set('size', filters.size.toString()); }

    // if (filters.sort) { queryParams.set('sort', filters.sort); }
    // if (filters.name) { queryParams.set('name', filters.name); }

    addFilterParam(queryParams, 'sort', filters.sort);

    addFilterParam(queryParams, 'name', filters.name);
    addFilterParam(queryParams, 'code', filters.code);
    addFilterParam(queryParams, 'areaMin', filters.areaMin);
    addFilterParam(queryParams, 'areaMax', filters.areaMax);
    addFilterParam(queryParams, 'populationMin', filters.populationMin);
    addFilterParam(queryParams, 'populationMax', filters.populationMax);
    addFilterParam(queryParams, 'countriesCountMin', filters.countriesCountMin);
    addFilterParam(queryParams, 'countriesCountMax', filters.countriesCountMax);
    addFilterParam(queryParams, 'densityMin', filters.densityMin);
    addFilterParam(queryParams, 'densityMax', filters.densityMax);

    return queryParams.toString() ? `?${queryParams.toString()}` : '';
  }

  private handleError<T>(operation: string, result: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result);
    };
  }
}
