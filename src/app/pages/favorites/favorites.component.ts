import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from "@angular/common";
import { CardModule } from "primeng/card";
import { DataViewModule } from "primeng/dataview";
import { MovieCardComponent } from "../../shared/components/movie-card/movie-card.component";
import { SharedModule } from "primeng/api";
import { MovieListComponent } from "../../shared/components/movie-list/movie-list.component";
import { FavoritesStateSelectors } from "../../store/favorites/favorites.selectors";
import { Store } from "@ngrx/store";
import { BannerComponent } from "../../shared/components/banner/banner.component";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    AsyncPipe,
    CardModule,
    DataViewModule,
    MovieCardComponent,
    SharedModule,
    MovieListComponent,
    BannerComponent
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent {
  private store = inject(Store);

  favoriteMovies$ = this.store.select(FavoritesStateSelectors.selectFavorites);
}
