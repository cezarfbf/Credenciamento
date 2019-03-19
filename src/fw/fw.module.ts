import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { FrameworkConfigService } from './service/framework-config.service';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FrameworkBodyComponent
  ],
  providers: [
    FrameworkConfigService
  ]
})
export class FwModule { }
