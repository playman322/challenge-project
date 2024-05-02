import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from "@ngrx/store";
import { AsyncPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MovieListComponent } from "../../shared/components/movie-list/movie-list.component";
import { InputTextModule } from "primeng/inputtext";
import { LoaderComponent } from "../../shared/components/loader/loader.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { ListStateSelectors } from "../../store/list-state/list-state.selectors";
import { ListStateActions } from "../../store/list-state/list-state.actions";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    AsyncPipe,
    MovieListComponent,
    InputTextModule,
    LoaderComponent,
    BannerComponent,
    FormsModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  private store = inject(Store);

  query = '';
  movieList$ = this.store.select(ListStateSelectors.selectMovieList);
  isLoading$ = this.store.select(ListStateSelectors.selectIsLoading);

  search(): void {
    this.store.dispatch(ListStateActions.SearchMovieList({ payload: this.query }));
  }
}
