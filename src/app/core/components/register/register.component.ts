import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";
import { catchError, of, tap } from "rxjs";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { RouterLink } from "@angular/router";
import { MessageBanner, MessageType } from "../../../models/auth.model";
import { MessageBannerService } from "../../../shared/services/message-banner.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    CardModule,
    PasswordModule,
    ButtonModule,
    RouterLink
  ],
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private messageBannerService = inject(MessageBannerService);

  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    const { username, email, password } = this.registerForm.value;

    this.authService.register(username, email, password).pipe(
      tap(() => {
        this.messageBannerService.displayMessage(MessageBanner.AuthSuccess, MessageType.Success);
      }),
      catchError(err => {
        console.error(err);
        this.messageBannerService.displayMessage(MessageBanner.AuthError, MessageType.Error);
        return of(null);
      })
    ).subscribe();
  }
}
