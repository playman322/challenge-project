import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { AutoComplete, AutoCompleteModule } from "primeng/autocomplete";
import { AppStateSelectors, selectMovies } from "../../store/app-state/app-state.selectors";
import { Store } from "@ngrx/store";
import { AppStateActions } from "../../store/app-state/app-state.actions";
import { Router } from "@angular/router";
import { KeyName } from "../../models/keyboard-navigation.model";
import { AsyncPipe, NgClass, NgForOf, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DataViewModule } from "primeng/dataview";
import { RatingModule } from "primeng/rating";
import { TagModule } from "primeng/tag";
import { ButtonModule } from "primeng/button";
import { Theme } from "../../models/theme.model";
import { CardModule } from "primeng/card";

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
    NgIf,
    NgForOf,
    ButtonModule,
    CardModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  private store = inject(Store);
  private router = inject(Router);
  protected readonly Theme = Theme;

  query = '';
  movies$ = this.store.select(AppStateSelectors.selectMovies);

  @ViewChild('autoComplete') autoComplete!: AutoComplete;

  onChange({ query }: { query: string }): void {
    this.store.dispatch(AppStateActions.SearchMovies({ payload: query }));
  }

  onKeyUp(event: KeyboardEvent): void {
    if (event.key === KeyName.ENTER) {
      this.search();
    }
  }

  search(): void {
    if (!this.query) {
      return;
    }

    this.store.dispatch(AppStateActions.SearchMovies({ payload: this.query }));
  }

  focusAutoComplete() {
    this.autoComplete.inputEL!.nativeElement.focus();
  }

}
