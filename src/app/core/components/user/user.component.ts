import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CardModule } from "primeng/card";
import { TokenStorageService } from "../../../shared/services/token-storage.service";
import { DividerModule } from "primeng/divider";
import { ButtonModule } from "primeng/button";
import { Router, RouterLink } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppStateActions } from "../../../store/app-state/app-state.actions";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardModule,
    DividerModule,
    ButtonModule,
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  private tokenService = inject(TokenStorageService);
  private store = inject(Store);
  private router = inject(Router);

  userName: string | null;
  userToken: string | null;

  ngOnInit(): void {
    this.userName = this.tokenService.getUser();
    this.userToken = this.tokenService.getToken();
  }

  logout(): void {
    this.tokenService.signOut();
    this.store.dispatch(AppStateActions.LogIn({ payload: false }));
    this.router.navigate(['/login'])
  }
}
