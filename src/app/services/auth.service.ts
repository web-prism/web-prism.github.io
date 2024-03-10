import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.firebaseConfig.apiUrl;
  serverUrl = environment.firebaseConfig.serverUrl;

  constructor(private http: HttpClient, private fireAuth: AngularFireAuth) {}

  // example
  // create() {
  //   return this.fireAuth
  //     .createUserWithEmailAndPassword('test@gmail.com', '123456')
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       window.alert(error.message);
  //     });
  // }
  // fn() {
  //   return this.http.get(`${environment.firebaseConfig.apiUrl}/test.json`);
  // }
}
