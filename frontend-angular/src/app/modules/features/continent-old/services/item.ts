export interface Item {
  id: number;
  name: string;
  code: string;
  area: number;
  population: number;
  countriesNumber: number;
  wikipediaLink: string;
  density: number;
}

export interface Totals {
  currentPageTotals: {
    count: number;
    area: number;
    population: number;
    countriesNumber: number;
    density: number;
  };
  globalTotals: {
    count: number;
    area: number;
    population: number;
    countriesNumber: number;
    density: number;
  };
}

export interface ItemsResponse {
  totals: Totals;
  continents: Item[];
}

export function getDefaultItemsResponse(): ItemsResponse {
  return {
    totals: {
      currentPageTotals: { count: 0, area: 0, population: 0, countriesNumber: 0, density: 0 },
      globalTotals: { count: 0, area: 0, population: 0, countriesNumber: 0, density: 0 }
    },
    continents: []
  };
}
