import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { AutoComplete, AutoCompleteModule } from "primeng/autocomplete";
import { AppStateSelectors } from "../../store/app-state/app-state.selectors";
import { Store } from "@ngrx/store";
import { AppStateActions } from "../../store/app-state/app-state.actions";
import { Router, RouterLink } from "@angular/router";
import { AsyncPipe, NgClass } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DataViewModule } from "primeng/dataview";
import { RatingModule } from "primeng/rating";
import { TagModule } from "primeng/tag";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { MovieCardComponent } from "../../shared/components/movie-card/movie-card.component";
import { MovieListComponent } from "../../shared/components/movie-list/movie-list.component";

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
    MovieCardComponent,
    MovieListComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  private store = inject(Store);
  private router = inject(Router);

  query = '';
  recentSearches: string[] = [];
  movieList$ = this.store.select(AppStateSelectors.selectMovieList);

  @ViewChild('autoComplete') autoComplete!: AutoComplete;

  onKeyUp(): void {
    this.search();
    this.recentSearches.push(this.query);
  }

  search(): void {
    if (!this.query) {
      return;
    }

    this.store.dispatch(AppStateActions.SearchMovieList({ payload: this.query }));
  }

  focusAutoComplete() {
    this.autoComplete.inputEL!.nativeElement.focus();
  }

  showRecentSearches() {
    this.recentSearches = [...this.recentSearches];
  }
}
