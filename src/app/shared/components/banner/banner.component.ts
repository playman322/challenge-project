import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardModule } from "primeng/card";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {
  @Input() text: string;
}
