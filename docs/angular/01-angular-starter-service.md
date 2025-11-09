
# angular-routing

  ng g service services/items
  ng g s services/items

# Parametres

  - Creation du service
  
  import { Injectable } from '@angular/core';
  @Injectable({ providedIn: 'root' })
  export class DataService {
    value = 'default';
    setValue(v: string) {
      this.value = v;
    }
    getValue() {
      return this.value;
    }
  }


  - Utilisation du service via le constructor
  
    import { Component } from '@angular/core';
    import { DataService } from './services/data.service';

    @Component({
      selector: 'app-edit',
      standalone: true,
      templateUrl: './edit.html'
    })
    export class EditComponent {
      constructor(private data: DataService) {}
      save() {
        this.data.setValue('hello');
      }
    }


  - Utilisation du service via inject
  
    import { Component, inject } from '@angular/core';
    import { DataService } from './services/data.service';

    @Component({
      selector: 'app-edit',
      standalone: true,
      templateUrl: './edit.html'
    })
    export class EditComponent {
      private medias = inject(data);
      save() {
        this.data.setValue('hello');
      }
    }
