import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Theme } from "../../models/theme.model";
import { Store } from "@ngrx/store";
import { AppStateActions } from "../../store/app-state/app-state.actions";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private store = inject(Store);

  private currentTheme = this.getInitTheme();

  switchTheme(): void {
    this.currentTheme = this.currentTheme === Theme.Light ? Theme.Dark : Theme.Light;

    this.loadTheme();
  }

  loadTheme(): void {
    this.store.dispatch(AppStateActions.ChangeTheme({ payload: this.currentTheme }));
    const themeLink = this.document.getElementById('theme-css') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = `${this.currentTheme}.css`;
      localStorage.setItem('theme', this.currentTheme);
    }
  }

  getInitTheme(): Theme | string {
    return localStorage.getItem('theme') || Theme.Light;
  }
}
