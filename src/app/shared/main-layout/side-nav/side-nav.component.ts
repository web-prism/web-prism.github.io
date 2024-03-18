import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { SideNav } from 'src/app/types/models/side-nav';

@Component({
  selector: 'wp-side-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, AngularMaterialModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  sideNavUrls: SideNav[] = [
    {
      tabName: 'Home',
      icon: 'home',
      url: '/home',
    },
    {
      tabName: 'Users management',
      icon: 'people',
      url: '/users-management',
    },
  ];
}
