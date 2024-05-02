import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DataViewModule } from "primeng/dataview";
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { Movie } from "../../../models/movies.model";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    DataViewModule,
    MovieCardComponent
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent {
  @Input() movieList: Movie[];
}
