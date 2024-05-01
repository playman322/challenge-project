import { Routes } from '@angular/router';
import { ListComponent } from "./pages/list/list.component";
import { DetailsComponent } from "./pages/details/details.component";
import { FavoritesComponent } from "./pages/favorites/favorites.component";
import { UserComponent } from "./core/components/user/user.component";
import { RegisterComponent } from "./core/components/register/register.component";
import { LoginComponent } from "./core/components/login/login.component";
import { authGuard } from "./core/guards/auth.guard";

export const routes: Routes = [
  { path: 'list', title: 'List page', component: ListComponent},
  { path: 'details/:id', title: 'Details page', component: DetailsComponent},
  { path: 'favorites', title: 'Favorites page', component: FavoritesComponent, canActivate: [authGuard]},
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'register', title: 'Register page', component: RegisterComponent },
  { path: 'user', title: 'User page', component: UserComponent, canActivate: [authGuard]},
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', redirectTo: 'ListComponent' },
];
