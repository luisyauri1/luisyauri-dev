import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    title: 'Luis Yauri | Software Engineer Frontend Angular y React',
    loadComponent: () => import('./pages/home-page/home-page').then((module) => module.HomePage),
  },
];
