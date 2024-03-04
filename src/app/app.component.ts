import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet, AngularMaterialModule],
  selector: 'wp-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
