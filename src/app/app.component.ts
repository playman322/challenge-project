import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ThemeService } from "./shared/services/theme.service";
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { HeaderComponent } from "./core/components/header/header.component";
import { RegisterComponent } from "./core/components/register/register.component";
import { AsyncPipe } from "@angular/common";
import { LoaderComponent } from "./shared/components/loader/loader.component";
import { LoginComponent } from "./core/components/login/login.component";
import { MessagesModule } from "primeng/messages";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressSpinnerModule, NavbarComponent, HeaderComponent, RegisterComponent, AsyncPipe, LoaderComponent, LoginComponent, MessagesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
  private themeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.loadTheme();
  }
}
