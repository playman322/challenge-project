import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AutoCompleteModule } from "primeng/autocomplete";
import { AppStateSelectors } from "../../store/app-state/app-state.selectors";
import { Store } from "@ngrx/store";
import { AppStateActions } from "../../store/app-state/app-state.actions";
import { RouterLink } from "@angular/router";
import { AsyncPipe, NgClass } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DataViewModule } from "primeng/dataview";
import { RatingModule } from "primeng/rating";
import { TagModule } from "primeng/tag";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { MovieListComponent } from "../../shared/components/movie-list/movie-list.component";
import { InputTextModule } from "primeng/inputtext";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { LoaderComponent } from "../../shared/components/loader/loader.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    AutoCompleteModule,
    AsyncPipe,
    FormsModule,
    DataViewModule,
    NgClass,
    RatingModule,
    TagModule,
    ButtonModule,
    CardModule,
    RouterLink,
    MovieListComponent,
    InputTextModule,
    ProgressSpinnerModule,
    LoaderComponent,
    BannerComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  private store = inject(Store);

  query = '';
  movieList$ = this.store.select(AppStateSelectors.selectMovieList);
  isLoading$ = this.store.select(AppStateSelectors.selectIsLoading);

  search(): void {
    this.store.dispatch(AppStateActions.SearchMovieList({ payload: this.query }));
  }
}
