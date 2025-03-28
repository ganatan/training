import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { SeoService } from '../../../core/services/seo/seo.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  items = [
    {
      icon: "fa-solid fa-user-tie",
      name: "professions",
      description: "professions",
      link: '/professions'
    },
    {
      icon: "fa-solid fa-globe",
      name: "continents",
      description: "continents",
      link: '/continents'
    },
    {
      icon: "fa-solid fa-city",
      name: "cities",
      description: "cities",
      link: '/cities'
    },
  ]

  constructor(private seoService: SeoService) {

    const content =
      'This application was developed with ' + this.angular + ' and ' + this.bootstrap +
      ' It applies Routing, Lazy loading and Progressive Web App (PWA)';

    const title = 'angular-starter Title : Home Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }


}
