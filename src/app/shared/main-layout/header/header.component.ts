import { Component } from '@angular/core';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'wp-header',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  signOut() {
    this.authService.signOut();
  }
}
