import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { AppStateSelectors } from "../../store/app-state/app-state.selectors";
import { map, take } from "rxjs";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const store = inject(Store);

  return store.select(AppStateSelectors.selectIsLoggedIn).pipe(
    take(1),
    map(isLoggedIn => {
      if (!isLoggedIn) {
        router.navigate(['/login']);
        return false;
      }
      return true;
    })
  );
};
