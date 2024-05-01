import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from "@angular/common";
import { ThemeService } from './theme.service';
import { Theme } from "../../models/theme.model";
import { Store } from "@ngrx/store";
import { AppStateActions } from "../../store/app-state/app-state.actions";

describe('ThemeService', () => {
  let themeService: ThemeService;
  let storeSpy: jasmine.SpyObj<Store>;

  beforeEach(() => {
    const storeSpyObj = jasmine.createSpyObj('Store', ['dispatch']);

    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        { provide: Store, useValue: storeSpyObj },
        { provide: DOCUMENT, useValue: document }
      ]
    });

    themeService = TestBed.inject(ThemeService);
    storeSpy = TestBed.inject(Store) as jasmine.SpyObj<Store>;
  });

  it('should switch theme and load theme', () => {
    themeService.switchTheme();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(AppStateActions.ChangeTheme({ payload: Theme.Dark }));
  });

  it('should load initial theme', () => {
    const initialTheme = themeService.getInitTheme();
    expect(initialTheme).toEqual(Theme.Light);
  });
});
