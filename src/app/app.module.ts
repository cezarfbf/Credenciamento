import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule, routingComonents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FwModule } from 'src/fw/fw.module';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user.service';
import { UserApi } from 'src/fw/users/user-api';
import { AuthGuard } from './services/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReqresDataService } from './services/reqres-data.service';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerPanelComponent } from './panels/customer-panel/customer-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';
import { ChartPanelComponent } from './panels/chart-panel/chart-panel.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { RatingModule } from 'ngx-bootstrap/rating'

@NgModule({
  declarations: [
    AppComponent,
    routingComonents,
    AuthenticatedUserComponent,
    CustomerListComponent,
    CustomerPanelComponent,
    ImagePanelComponent,
    ChartPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    FwModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    RatingModule.forRoot()    
  ],
  providers: [
    UserService,
    {provide:UserApi, useExisting: UserService},
    AuthGuard,
    ReqresDataService,
    BsLocaleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
