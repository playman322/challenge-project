import { Routes } from '@angular/router';
import { ListComponent } from "./pages/list/list.component";

export const routes: Routes = [
  { path: 'list', title: 'List page', component: ListComponent, canActivate: []},
  // { path: 'details', title: 'Details page', component: ''},
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];
