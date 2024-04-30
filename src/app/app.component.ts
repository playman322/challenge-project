import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { Store } from "@ngrx/store";
import { ThemeService } from "./shared/services/theme.service";
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { HeaderComponent } from "./core/components/header/header.component";
import { AppStateSelectors } from "./store/app-state/app-state.selectors";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressSpinnerModule, NavbarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
  store = inject(Store);
  private themeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.loadTheme();
  }
}
