import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComonents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FwModule } from 'src/fw/fw.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComonents    
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
