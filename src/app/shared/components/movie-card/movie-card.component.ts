import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass, NgIf } from "@angular/common";
import { Movie } from "../../../models/movies.model";
import { MappingService } from "../../services/mapping.service";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent {
  @Input() movie: Movie;
  @Input() isFirst: boolean;


  getCountryFullName(abbreviation: string): string {
    return MappingService.getCountryFullName(abbreviation) || 'N/A';
  }
}
