import { ChangeDetectionStrategy, Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { NgClass } from "@angular/common";
import { Movie } from "../../../models/movies.model";
import { LanguageMapperPipe } from "../../pipes/language-mapper.pipe";
import { environment } from "../../../environments/environment";
import { Store } from "@ngrx/store";
import { FavoritesStateActions } from "../../../store/favorites-state/favorites-state.actions";
import { FavoritesStateSelectors } from "../../../store/favorites-state/favorites-state.selectors";
import { Router } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    LanguageMapperPipe,
    NgClass
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
  private destroyRef = inject(DestroyRef)
  private isFavorite: boolean = false;

  isDetailsPage: boolean = false;
  favorites$ = this.store.select(FavoritesStateSelectors.selectFavorites);

  ngOnInit(): void {
    this.isDetailsPage = this.router.url.startsWith('/details');
  }

  onCardClick(): void {
    this.router.navigateByUrl(`/details/${this.movie.id}`);
  }

  onFavoritesClick(e: Event): void {
    e.stopPropagation();

    this.store.dispatch(this.isFavorite ?
      FavoritesStateActions.RemoveFromFavorites({ payload: this.movie.id }) :
      FavoritesStateActions.SaveFavorites({ payload: this.movie })
    );
  }

  isInFavorites(item: Movie): boolean {
    this.favorites$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(favorites => {
      this.isFavorite = favorites.some(favorite => favorite.id === item.id);
    });

    return this.isFavorite;
  }
}
