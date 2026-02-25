import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    title: 'Página de inicio',
  },
  {
    path: 'product-detail/:id',
    component: ProductDetail,
    title: 'Página de detalle',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
