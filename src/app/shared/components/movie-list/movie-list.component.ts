import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DataViewModule } from "primeng/dataview";
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { RouterLink } from "@angular/router";
import { Movie } from "../../../models/movies.model";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    DataViewModule,
    MovieCardComponent,
    RouterLink
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent {
  @Input() movieList: Movie[];
}
