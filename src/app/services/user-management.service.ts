import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../types/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  apiUrlGlitch = environment.firebaseConfig.apiUrlGlitch;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(`${this.apiUrlGlitch}/getUsers`);
  }
}
