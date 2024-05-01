import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";
import { TokenStorageService } from "../../../shared/services/token-storage.service";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { catchError, map, of } from "rxjs";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { Router, RouterLink } from "@angular/router";
import { MessageBanner, MessageType } from "../../../models/auth.model";
import { MessageBannerService } from "../../../shared/services/message-banner.service";
import { Store } from "@ngrx/store";
import { AppStateActions } from "../../../store/app-state/app-state.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    CardModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RouterLink,
  ],
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private store = inject(Store);
  private formBuilder = inject(FormBuilder);
  private tokenStorageService = inject(TokenStorageService);
  private messageBannerService = inject(MessageBannerService);

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).pipe(
      map((data) => {
        this.tokenStorageService.saveToken(data.access_token);
        this.tokenStorageService.saveUser(username);
        this.store.dispatch(AppStateActions.LogIn({ payload: true }));
        this.router.navigate([''])
      }),
      catchError(err => {
        console.error(err);
        this.messageBannerService.displayMessage(MessageBanner.LoginError, MessageType.Error);
        return of(null);
      })
    ).subscribe();
  }
}
