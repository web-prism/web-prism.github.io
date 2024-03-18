import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UsersManagementComponent } from './components/users-management/users-management.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'users-management',
        component: UsersManagementComponent,
      },
    ],
  },
  {
    path: 'login',
    canActivate: [loginGuard],
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
