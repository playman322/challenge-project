import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { Store } from "@ngrx/store";
import { ThemeService } from "./shared/services/theme.service";
import { Observable } from "rxjs";
import { AppStateActions } from "./store/app-state/app-state.actions";
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { HeaderComponent } from "./core/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressSpinnerModule, NavbarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  store = inject(Store);
  private themeService = inject(ThemeService);

  isLoaded$: boolean = true;

  ngOnInit(): void {
    this.themeService.loadTheme();
    // this.store.dispatch(AppStateActions.LoadData());
  }
}
