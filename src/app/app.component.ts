import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import SettingsComponent from './features/settings/settings.component';
import NavbarComponent from './core/navbar.component';
import HomeComponent from './features/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    SettingsComponent,
    HomeComponent,
  ],
  template: `
    <app-navbar></app-navbar>

    <router-outlet />
  `,
})
export class AppComponent {
  title = 'newyorkcity-data';
}
