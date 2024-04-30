import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProgressSpinnerModule } from "primeng/progressspinner";

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    ProgressSpinnerModule
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {

}
