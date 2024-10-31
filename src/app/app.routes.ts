import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

export enum Paths {
  HOME = '',
  LAPTOPS = 'laptops',
  MONITORS = 'monitors',
  PHONES = 'phones',
}

export const routes: Routes = [
  { path: Paths.HOME, component: AppComponent },
  { path: Paths.LAPTOPS, component: AppComponent },
  { path: Paths.MONITORS, component: AppComponent },
  { path: Paths.PHONES, component: AppComponent },
];
