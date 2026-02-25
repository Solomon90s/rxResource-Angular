import { Routes } from '@angular/router';
import { HomePage } from '@pages/home-page/home-page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    title: 'Página de inicio',
  },
  {
    path: 'product-detail/:id',
    loadComponent: () => import('./pages/product-detail/product-detail'),
    title: 'Página de detalle',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
