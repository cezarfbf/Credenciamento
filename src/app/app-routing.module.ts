import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'customers', component: CustomerComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'user', component: UserComponent },
    { path: '', component: DashboardComponent },
    { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComonents = [DashboardComponent,CustomerComponent,SettingsComponent,UserComponent]
