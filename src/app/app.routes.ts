import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
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
        path: 'user-management',
        component: UserManagementComponent,
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
