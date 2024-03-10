import { inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivateFn, Router } from '@angular/router';
import { from } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const fireAuth = inject(AngularFireAuth);
  const router = inject(Router);

  return from(
    new Promise<boolean>((resolve) => {
      const unsubscribe = fireAuth.onAuthStateChanged(async (user) => {
        if (user) {
          resolve(true);
        } else {
          router.navigateByUrl('/login');
          resolve(false);
        }
        (await unsubscribe)();
      });
    })
  );
};
