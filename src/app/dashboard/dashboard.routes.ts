import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { StateofpageGuard } from '../guards/stateofpage.guard';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate: [StateofpageGuard] },
      { path: 'employee_list', component: HomeComponent, canActivate: [StateofpageGuard] },
      { path: 'employee_add', component: HomeComponent, canActivate: [StateofpageGuard] },
    ]
  }];
