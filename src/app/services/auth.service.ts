import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // example
  // test() {
  //   return this.http.get(`${environment.firebaseConfig.apiUrl}/test.json`);
  // }
}
