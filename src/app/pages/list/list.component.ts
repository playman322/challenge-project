import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AutoCompleteModule } from "primeng/autocomplete";
import { AppStateSelectors } from "../../store/app-state/app-state.selectors";
import { Store } from "@ngrx/store";
import { AppStateActions } from "../../store/app-state/app-state.actions";
import { Router } from "@angular/router";
import { KeyName } from "../../models/keyboard-navigation.model";
import { AsyncPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    AutoCompleteModule,
    AsyncPipe,
    FormsModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  private store = inject(Store);
  private router = inject(Router);


  query = '';
  suggestions$ = this.store.select(AppStateSelectors.selectSuggestions);

  onChange({ query }: { query: string }): void {
    this.store.dispatch(AppStateActions.SearchSuggestions({ payload: query }));
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

    this.router.navigateByUrl('/details');
    // this.store.dispatch(AppStateActions.SearchData({ payload: this.query }));
  }
}
