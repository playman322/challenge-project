import { Component, inject } from '@angular/core';
import { ToolbarModule } from "primeng/toolbar";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Store } from "@ngrx/store";
import { AsyncPipe } from "@angular/common";
import { DetailsStateSelectors } from "../../../store/details-state/details-state.selectors";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ToolbarModule,
    RouterLink,
    RouterLinkActive,
    AsyncPipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {
  private store = inject(Store)

  movie$ = this.store.select(DetailsStateSelectors.selectMovie);
}
