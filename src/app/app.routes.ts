import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component'),
  },
  {
    path: 'settings',
    loadComponent: () => import('./features/settings/settings.component'),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
