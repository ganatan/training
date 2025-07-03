import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  useMock = environment.useMock;

  toggleTheme() {
    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('dark-mode');
      document.documentElement.classList.toggle('dark-mode');
    }
  }

}
