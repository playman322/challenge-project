import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from "@angular/common";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { MovieCardComponent } from "../../shared/components/movie-card/movie-card.component";
import { LoaderComponent } from "../../shared/components/loader/loader.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { DetailsStateSelectors } from "../../store/details-state/details-state.selectors";
import { DetailsStateActions } from "../../store/details-state/details-state.actions";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    LoaderComponent,
    AsyncPipe,
    MovieCardComponent,
    BannerComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit{
  private store = inject(Store);
  private route = inject(ActivatedRoute);

  movie$ = this.store.select(DetailsStateSelectors.selectMovie);
  isLoading$ = this.store.select(DetailsStateSelectors.selectIsLoading);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const selectedId = Number(params.get('id'));

      if (selectedId) {
        this.store.dispatch(DetailsStateActions.GetMovie({ payload: selectedId }));
      }
    });
  }
}
