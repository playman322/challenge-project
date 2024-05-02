import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from "@angular/common";
import { MovieListComponent } from "../../shared/components/movie-list/movie-list.component";
import { FavoritesStateSelectors } from "../../store/favorites-state/favorites-state.selectors";
import { Store } from "@ngrx/store";
import { BannerComponent } from "../../shared/components/banner/banner.component";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    BannerComponent,
    MovieListComponent,
    AsyncPipe
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent {
  private store = inject(Store);

  favoriteMovies$ = this.store.select(FavoritesStateSelectors.selectFavorites);
}
