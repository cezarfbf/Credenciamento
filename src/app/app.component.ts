import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from 'src/fw/services/framework-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private frameworkConfigService: FrameworkConfigService) {

    let config:FrameworkConfigSettings = {
      socialIcons: [
        {imageFile: '', alt: 'Facebook', link: ''},
        {imageFile: '', alt: 'Youtube', link: ''},
        {imageFile: '', alt: 'Twitter', link: ''}
      ],
      showLanguageSelector: true,
      showStatusBar: true,
      showUserControls: true,
      showStatusBarBreakpoint: 800
    };
    frameworkConfigService.configure(config);

  }
}
