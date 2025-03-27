import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaginationService } from '../../../shared/services/pagination/pagination.service';
import { Pagination } from '../../../shared/services/pagination/pagination';

import { ItemsService } from './services/items.service';
import { Item } from './services/item';

import { URL_ITEMS, NAME_ITEM, RESPONSE_ITEM } from './services/item.constants';

@Component({
  selector: 'app-item',
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    PaginationService,
  ],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  name_default = NAME_ITEM;
  defaultSelectedPerPage = 20;
  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' | null = null;

  items: Item[] | undefined;
  loading = false;

  totals = {
    count: 0,
    area: 0,
    population: 0,
    countriesNumber: 0,
    density: 0,
    countAll: 0,
    areaAll: 0,
    populationAll: 0,
    countriesNumberAll: 0,
    densityAll: 0
  };

  filters = {
    page: null,
    size: null,
    name: null,
    code: null,
    areaMin: null,
    areaMax: null,
    populationMin: null,
    populationMax: null,
    countriesNumberMin: null,
    countriesNumberMax: null,
    densityMin: null,
    densityMax: null,
  };

  selectedPerPage: number;
  paginationEnabled = true;
  pagination: Pagination;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemsService: ItemsService,
    private paginationService: PaginationService) {

    this.selectedPerPage = this.defaultSelectedPerPage;
    this.pagination = this.paginationService.initializePagination(this.selectedPerPage);

    this.sortColumn = 'name';
    this.sortDirection = 'asc';

  }

  ngOnInit(): void {
    this.getQueryParams();
  }

  getItems(filters: any): void {
    const sort = this.sortColumn ? (this.sortDirection === 'asc' ? this.sortColumn : `-${this.sortColumn}`) : null;
    const sortFilters = {
      ...filters,
      sort,
    };
    this.loading = true;
    this.itemsService.getItems(sortFilters)
      .subscribe(response => {
        const count = response.totals.globalTotals.count;
        this.pagination.totalItems = count;
        this.items = response[RESPONSE_ITEM];
        this.setTotals(response);
        this.loading = false;
        this.updatePagination();
      });
  }

  setTotals(response: any): void {
    this.totals = {
      count: response.totals.currentPageTotals.count,
      area: response.totals.currentPageTotals.area,
      population: response.totals.currentPageTotals.population,
      countriesNumber: response.totals.currentPageTotals.countriesNumber,
      density: response.totals.currentPageTotals.density,
      countAll: response.totals.globalTotals.count,
      areaAll: response.totals.globalTotals.area,
      populationAll: response.totals.globalTotals.population,
      countriesNumberAll: response.totals.globalTotals.countriesNumber,
      densityAll: response.totals.globalTotals.density,
    };
  }

  setQueryParams(filters: any) {
    const sanitizedFilters = { ...filters };
    if (sanitizedFilters.name === "") {
      sanitizedFilters.name = null;
    }
    if (sanitizedFilters.code === "") {
      sanitizedFilters.code = null;
    }
    if (sanitizedFilters.sort === "") {
      sanitizedFilters.sort = null;
    }
    const queryParams = { ...this.filters, ...sanitizedFilters };
    const url = URL_ITEMS;
    this.router.navigate([url], { queryParams });
  }

  search() {
    const filters = {
      ...this.filters,
      page: this.pagination.currentPage,
      size: this.pagination.perPage
    };
    const sort = this.sortColumn ? (this.sortDirection === 'asc' ? this.sortColumn : `-${this.sortColumn}`) : null;
    const sortFilters = {
      ...filters,
      sort,
    };
    this.setQueryParams(sortFilters);
    this.getItems(this.filters);
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.search();
    }
  }

  getQueryParams() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.filters = { ...this.filters, ...queryParams };

      const { size } = this.filters || {};
      if (size) {
        this.selectedPerPage = size;
      }

      this.pagination = this.paginationService.initializePagination(this.selectedPerPage);
      this.getItems(this.filters);
    });
  }

  updatePagination() {
    this.pagination.currentPage = Number(this.filters.page) || 1;
    this.pagination.perPage = this.filters.size || this.selectedPerPage;
    this.setPagination();
  }

  create() {
    this.router.navigate([URL_ITEMS, 0]);
  }

  selectItem(item: Item) {
    this.router.navigate([URL_ITEMS, item.id]);
  }

  selectPagination() {
    this.paginationEnabled = !this.paginationEnabled;
  }

  setPagination() {
    this.pagination = this.paginationService.getPagination(this.pagination);
  }

  changePage(page: number) {
    this.pagination.currentPage = page;
    this.search();
  }

  changePerPage(event: string) {
    const perPage = parseInt(event, 10);
    this.pagination.perPage = perPage;
    this.search();
  }

  getGlobalPosition(index: number): number {
    const offset = (this.pagination.currentPage - 1) * this.pagination.perPage;

    return offset + index + 1;
  }

  setSort(column: string): void {
    if (this.sortColumn === column) {
      if (this.sortDirection === 'asc') {
        this.sortDirection = 'desc';
      } else if (this.sortDirection === 'desc') {
        this.sortDirection = null;
        this.sortColumn = null;
      } else {
        this.sortDirection = 'asc';
      }
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.search();
  }
}
