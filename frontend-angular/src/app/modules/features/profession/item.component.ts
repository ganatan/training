import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemsService } from './services/items.service';
import { Item } from './services/item';

import { PaginationService } from '../../../shared/services/pagination/pagination.service';
import { Pagination } from '../../../shared/services/pagination/pagination';

import { URL_ITEMS, NAME_ITEM, RESPONSE_ITEM } from './services/item.constants';

interface Filters {
  page: number | null;
  size: number | null;
  name: string | null;
}

@Component({
  selector: 'app-item',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PaginationService,
  ],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  name_default = NAME_ITEM;
  defaultSelectedItemsPerPage = 10;
  sortColumn: string | null = null;
  sortField: string | null = null;
  sortDirection: 'asc' | 'desc' | null = null;

  items: Item[] | undefined;
  loading = false;

  totals = {
    count: 0,
    countAll: 0,
  };

  filters: Filters = {
    page: null,
    size: null,
    name: null,
  };

  selectedItemsPerPage: number;
  paginationEnabled = true;
  pagination: Pagination;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemsService: ItemsService,
    private paginationService: PaginationService) {

    this.selectedItemsPerPage = this.defaultSelectedItemsPerPage;
    this.pagination = this.paginationService.initializePagination(this.selectedItemsPerPage);
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
        // const count = response.totals.globalTotals.count;
        // this.pagination.totalItems = count;
        this.items = response;
        // this.setTotals(response);
        this.loading = false;
        this.updatePagination();
      });
  }

  setTotals(response: any): void {
    this.totals = {
      count: response.totals.currentPageTotals.count,
      countAll: response.totals.globalTotals.count,
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
    this.getItems(this.filters);
  }

  search() {
    const filters = {
      ...this.filters,
      page: this.pagination.currentPage,
      size: this.pagination.itemsPerPage
    };
    const sort = this.sortColumn ? (this.sortDirection === 'asc' ? this.sortColumn : `-${this.sortColumn}`) : null;
    const sortFilters = {
      ...filters,
      sort,
    };
    this.setQueryParams(sortFilters);
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
        this.selectedItemsPerPage = size;
      }
      this.pagination = this.paginationService.initializePagination(this.selectedItemsPerPage);
      this.getItems(this.filters);
    });
  }

  updatePagination() {
    this.pagination.currentPage = Number(this.filters.page) || 1;
    this.pagination.itemsPerPage = this.filters.size || this.selectedItemsPerPage;
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

  changeItemsPerPage(event: string) {
    const itemsPerPage = parseInt(event, 10);
    this.pagination.itemsPerPage = itemsPerPage;
    this.search();
  }

  getGlobalPosition(index: number): number {
    const offset = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage;

    return offset + index + 1;
  }

  setSort(column: string, field?: string): void {
    if (this.sortColumn === column) {
      if (this.sortDirection === 'asc') {
        this.sortDirection = 'desc';
      } else if (this.sortDirection === 'desc') {
        this.sortDirection = null;
        this.sortColumn = null;
        this.sortField = null;
      } else {
        this.sortDirection = 'asc';
      }
    } else {
      this.sortColumn = column;
      this.sortField = field ? field : column;
      this.sortDirection = 'asc';
    }
    this.search();
  }

}
