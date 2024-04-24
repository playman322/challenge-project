import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToolbarModule } from "primeng/toolbar";
import { Router, RouterLink } from "@angular/router";
import { AppStateSelectors } from "../../../store/app-state/app-state.selectors";
import { ThemeService } from "../../../shared/services/theme.service";
import { Store } from "@ngrx/store";
import { Theme } from '../../../models/theme.model';
import { AsyncPipe, NgClass, NgStyle } from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ToolbarModule,
    RouterLink,
    AsyncPipe,
    NgClass,
    NgStyle
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private themeService = inject(ThemeService);
  private router = inject(Router);
  store = inject(Store);

  currentTheme$ = this.store.select(AppStateSelectors.selectTheme);

  protected readonly Theme = Theme;

  toggleTheme(): void {
    this.themeService.switchTheme();
  }
}
