import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'gestionar',
    loadComponent: () => import('./gestionar/gestionar.page').then((m) => m.GestionarPage),
  },
  {
    path: 'configuracion',
    loadComponent: () =>
      import('./configuracion/configuracion.page').then((m) => m.ConfiguracionPage),
  },
];
