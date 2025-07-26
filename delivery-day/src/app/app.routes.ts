import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home-page/home-page.component')
      .then(c => c.HomePageComponent)
  },
  {
    path: 'delivery',
    loadComponent: () => import('./delivery/delivery-page/delivery-page.component')
      .then(c => c.DeliveryPageComponent)
  },
  {
    path: '**',
    loadComponent:() => import('./errors/not-found-page/not-found-page.component')
      .then(c => c.NotFoundPageComponent)
  }
];
