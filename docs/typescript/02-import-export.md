
# Methodes et utilisations
Déclaration dans lib.ts	                    Utilisation dans un autre fichier

export default function getItems() {}	    import getItems from './lib'

export function updateItem() {}	            import { updateItem } from './lib'

export { getItems, updateItem }	            import { getItems, updateItem } from './lib'

export function getItems() {}; 
export function updateItem() {};	          import * as tools from './lib'
                                            tools.getItems()
                                            tools.updateItem()


# Exemples exports séparés et : exports regroupés

  - exports séparés

    export class Media {
    franchise: boolean;
    constructor() {
        this.franchise = true;
    }
    }

    export function getItems() {
    }

  - exports regroupés

  class Media {
    franchise: boolean;
    constructor() {
      this.franchise = true;
    }
  }

  function getItems() {
    console.log('00000000001:getItems');
  }

  export { Media, getItems };