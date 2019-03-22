import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user/user.component';
import { CustomerOptionsComponent } from './customer-options/customer-options.component';
import { CustomerSelectionComponent } from './customer-selection/customer-selection.component';
import { AccessComponent } from './access/access.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { SingInComponent } from 'src/fw/users/sing-in/sing-in.component';
import { RegisterUserComponent } from 'src/fw/users/register-user/register-user.component';
import { AuthGuard } from './services/auth-guard.service';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

const appRoutes: Routes = [
    { path: 'singin', component: SingInComponent },
    { path: 'register', component: RegisterUserComponent },
    { path: 'authenticated', component: AuthenticatedUserComponent, 
      canActivate: [AuthGuard],
       children: [
         {path: '', canActivateChild: [AuthGuard],
           children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            { path: 'dashboard', component: DashboardComponent },
            { path: 'customer-options', component: CustomerOptionsComponent
            //    children: [
            //     { path: 'customer', component: CustomerComponent }
            //    ] 
            },
            { path: 'customer-selection/:select', component: CustomerSelectionComponent },
            { path: 'access', component: AccessComponent },
            { path: 'settings', component: SettingsComponent },       
            { path: 'user', component: UserComponent }, 
            { path: 'customer-detail/:id/:operation', component: CustomerDetailComponent},
            { path: 'customer', component: CustomerComponent }
           ]
          }               
        ] 
    },  
    { path: '', component: SingInComponent },
    { path: '**', component: SingInComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComonents = [AuthenticatedUserComponent,
                                 DashboardComponent,
                                 CustomerComponent,
                                 SettingsComponent,
                                 UserComponent,
                                 CustomerOptionsComponent,
                                 CustomerSelectionComponent,
                                 AccessComponent,
                                 CustomerDetailComponent
                                ]
