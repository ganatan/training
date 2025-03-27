import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';

import { URL_ITEMS } from './item.constants';
import { ItemsResponse, getDefaultItemsResponse } from './item';

import { addFilterParam } from '../../../../shared/utils/query-utils';

interface Filters {
  page?: number | null;
  size?: number | null;
  sort?: string | null;
  name?: string | null;
  code?: string | null;
  areaMin?: number | null;
  areaMax?: number | null;
  populationMin?: number | null;
  populationMax?: number | null;
  countriesNumberMin?: number | null;
  countriesNumberMax?: number | null;
  densityMin?: number | null;
  densityMax?: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private backendUrl: string = environment.backendAdminUrl;

  constructor(private http: HttpClient) { }

  private buildQueryParams(filters: Filters): string {
    const queryParams = new URLSearchParams();

    if (filters.size) {
      queryParams.set('page_size', filters.size.toString());
    }

    if (filters.page) {
      queryParams.set('page_number', filters.page.toString());
    }

    addFilterParam(queryParams, 'sort', filters.sort);

    addFilterParam(queryParams, 'name', filters.name);
    addFilterParam(queryParams, 'code', filters.code);
    addFilterParam(queryParams, 'areaMin', filters.areaMin);
    addFilterParam(queryParams, 'areaMax', filters.areaMax);
    addFilterParam(queryParams, 'populationMin', filters.populationMin);
    addFilterParam(queryParams, 'populationMax', filters.populationMax);
    addFilterParam(queryParams, 'countriesNumberMin', filters.countriesNumberMin);
    addFilterParam(queryParams, 'countriesNumberMax', filters.countriesNumberMax);
    addFilterParam(queryParams, 'densityMin', filters.densityMin);
    addFilterParam(queryParams, 'densityMax', filters.densityMax);
    
    return queryParams.toString() ? `?${queryParams.toString()}` : '';
  }

  getItems(filters: Filters = {}): Observable<ItemsResponse> {
    const params = this.buildQueryParams(filters);
    const url = `${this.backendUrl}/${URL_ITEMS}${params}`;

    return this.http.get<ItemsResponse>(url).pipe(
      catchError(this.handleError<ItemsResponse>('getItems', this.getDefaultResponse()))
    );
  }

  private getDefaultResponse(): ItemsResponse {
    return getDefaultItemsResponse();
  }

  private handleError<T>(operation = 'operation', result: T = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result);
    };
  }
}
