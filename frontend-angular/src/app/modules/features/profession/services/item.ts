export interface Item {
  id: number;
  name: string;
}

export type ItemsResponse = Item[];

export function getDefaultItemsResponse(): ItemsResponse {
  return [];
}
