import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, NgIf } from "@angular/common";
import { AppStateSelectors } from "../../store/app-state/app-state.selectors";
import { Store } from "@ngrx/store";
import { AppStateActions } from "../../store/app-state/app-state.actions";
import { ActivatedRoute } from "@angular/router";
import { MovieCardComponent } from "../../shared/components/movie-card/movie-card.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    MovieCardComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit{
  private store = inject(Store);
  private route = inject(ActivatedRoute);

  movie$ = this.store.select(AppStateSelectors.selectMovie);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const selectedId = Number(params.get('id'));
      this.store.dispatch(AppStateActions.GetMovie({ payload: selectedId }));
    });
  }
}
