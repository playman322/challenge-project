import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from "@angular/common";
import { AppStateSelectors } from "../../store/app-state/app-state.selectors";
import { Store } from "@ngrx/store";
import { AppStateActions } from "../../store/app-state/app-state.actions";
import { ActivatedRoute } from "@angular/router";
import { MovieCardComponent } from "../../shared/components/movie-card/movie-card.component";
import { LanguageMapperPipe } from "../../shared/pipes/language-mapper.pipe";
import { LoaderComponent } from "../../shared/components/loader/loader.component";
import { CardModule } from "primeng/card";
import { BannerComponent } from "../../shared/components/banner/banner.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    AsyncPipe,
    MovieCardComponent,
    LanguageMapperPipe,
    LoaderComponent,
    CardModule,
    BannerComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit{
  private store = inject(Store);
  private route = inject(ActivatedRoute);

  movie$ = this.store.select(AppStateSelectors.selectMovie);
  isLoading$ = this.store.select(AppStateSelectors.selectIsLoading);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const selectedId = Number(params.get('id'));

      if (selectedId) {
        this.store.dispatch(AppStateActions.GetMovie({ payload: selectedId }));
      }
    });
  }
}
