import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { MiscPageActions } from '../+state/actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.firebaseConfig.apiUrl;
  serverUrl = environment.firebaseConfig.serverUrl;

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private store: Store
  ) {}

  signIn() {
    this.store.dispatch(MiscPageActions.toggleLoader({ isLoaderShown: true }));

    return this.fireAuth
      .signInWithEmailAndPassword('nasko.1806@gmail.com', '123456')
      .then((result) => {
        this.router.navigateByUrl('/home');
        this.store.dispatch(
          MiscPageActions.toggleLoader({ isLoaderShown: false })
        );
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signOut() {
    this.store.dispatch(MiscPageActions.toggleLoader({ isLoaderShown: true }));

    return this.fireAuth
      .signOut()
      .then(() => {
        this.router.navigateByUrl('/login');
        this.store.dispatch(
          MiscPageActions.toggleLoader({ isLoaderShown: false })
        );
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
