
Déclaration dans lib.ts	                    Utilisation dans un autre fichier

export default function getItems() {}	      import getItems from './lib'

export function updateItem() {}	            import { updateItem } from './lib'

export { getItems, updateItem }	            import { getItems, updateItem } from './lib'

export function getItems() {}; 
export function updateItem() {};	          import * as tools from './lib'
                                            tools.getItems()
                                            tools.updateItem()