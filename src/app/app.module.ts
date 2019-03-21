import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComonents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FwModule } from 'src/fw/fw.module';
import { CustomerSelectionComponent } from './customer-selection/customer-selection.component';
import { CustomerOptionsComponent } from './customer-options/customer-options.component';
import { AccessComponent } from './access/access.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComonents,
    CustomerSelectionComponent,
    CustomerOptionsComponent,
    AccessComponent,
    AuthenticatedUserComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    FwModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
