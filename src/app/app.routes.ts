import { Routes } from '@angular/router';
import { ListComponent } from "./pages/list/list.component";
import { DetailsComponent } from "./pages/details/details.component";
import { FavoritesComponent } from "./pages/favorites/favorites.component";

export const routes: Routes = [
  { path: 'list', title: 'List page', component: ListComponent},
  { path: 'details/:id', title: 'Details page', component: DetailsComponent},
  { path: 'favorites', title: 'Favorites page', component: FavoritesComponent, canActivate: []},
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];
