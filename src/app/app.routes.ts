import { Routes } from '@angular/router';
import { ListComponent } from "./pages/list/list.component";
import { DetailsComponent } from "./pages/details/details.component";

export const routes: Routes = [
  { path: 'list', title: 'List page', component: ListComponent, canActivate: []},
  { path: 'details/:id', title: 'Details page', component: DetailsComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];
