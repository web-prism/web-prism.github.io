import { Component } from '@angular/core';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'wp-login',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  signIn() {
    this.authService.signIn();
  }
}
