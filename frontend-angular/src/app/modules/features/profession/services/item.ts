export interface Item {
  id: number;
  name: string;
}

export interface CurrentPageTotals {
  count: number;
  offset: number;
  limit: number;
}

export interface GlobalTotals {
  count: number;
  totalPages: number;
}

export interface Totals {
  currentPageTotals: CurrentPageTotals;
  globalTotals: GlobalTotals;
}

export interface Metadata {
  totals: Totals;
}

export interface ItemsResponse {
  metadata: Metadata;
  data: Item[];
}

export function getDefaultItemsResponse(): ItemsResponse {
  return {
    metadata: {
      totals: {
        currentPageTotals: {
          count: 0,
          offset: 0,
          limit: 10
        },
        globalTotals: {
          count: 0,
          totalPages: 0
        }
      }
    },
    data: []
  };
}
