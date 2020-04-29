import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CabinetComponent } from './pages/dashcomponents/cabinet/cabinet.component';
import { CashinComponent } from './pages/dashcomponents/cashin/cashin.component';
import { CashoutComponent } from './pages/dashcomponents/cashout/cashout.component';
import { HistoryComponent } from './pages/dashcomponents/history/history.component';
import { RefsysComponent } from './pages/dashcomponents/refsys/refsys.component';
import { WalletsComponent } from './components/wallets/wallets.component';
import { PaschangeComponent } from './components/paschange/paschange.component';
import { SettingsComponent } from './pages/dashcomponents/settings/settings.component';



const itemRoutes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cashin',
    component: CashinComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cashout',
    component: CashoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'refsys',
    component: RefsysComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  }

];

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: itemRoutes
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
