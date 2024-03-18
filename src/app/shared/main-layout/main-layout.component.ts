import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'wp-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    AngularMaterialModule,
    HeaderComponent,
    SideNavComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
