import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'wp-main-layout',
  standalone: true,
  imports: [RouterOutlet, AngularMaterialModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  constructor(private authService: AuthService) {}

  signOut() {
    this.authService.signOut();
  }
}
