import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { NgClass } from "@angular/common";
import { Movie } from "../../../models/movies.model";
import { LanguageMapperPipe } from "../../pipes/language-mapper.pipe";
import { environment } from "../../../environments/environment";
import { Store } from "@ngrx/store";
import { FavoritesActions } from "../../../store/favorites/favorites.actions";
import { FavoritesStateSelectors } from "../../../store/favorites/favorites.selectors";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    NgClass,
    LanguageMapperPipe,
    RouterLink
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnInit{
  @Input() movie: Movie;
  @Input() isFirst: boolean;

  protected readonly environment = environment;
  private store = inject(Store);
  private router = inject(Router);
  private isFavorite: boolean = false;

  isDetailsPage: boolean = false;
  favorites$ = this.store.select(FavoritesStateSelectors.selectFavorites);

  ngOnInit() {
    this.isDetailsPage = this.router.url.startsWith('/details');
  }

  onFavoritesClick() {
    this.store.dispatch(this.isFavorite ?
      FavoritesActions.RemoveFromFavorites({ payload: this.movie.id }) :
      FavoritesActions.SaveFavorites({ payload: this.movie })
    );
  }

  isInFavorites(item: Movie): boolean {
    this.favorites$.subscribe(favorites => {
      this.isFavorite = favorites.some(favorite => favorite.id === item.id);
    });
    return this.isFavorite;
  }

  routerLink(): any {
    console.log(1)
  }
}
