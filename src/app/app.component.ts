import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from 'src/fw/services/framework-config.service';
import { MenuService } from 'src/fw/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private frameworkConfigService: FrameworkConfigService,
              private menuService: MenuService) {

    let config:FrameworkConfigSettings = {
      socialIcons: [
        {imageFile: 'assets/facebook.png', alt: 'Facebook', link: 'https://pt-br.facebook.com/sesipeoficial/'},
        {imageFile: 'assets/youtube.png', alt: 'Youtube', link: 'https://www.youtube.com/channel/UC6VRuvR9oLPSassuoGC5qww'},
        {imageFile: 'assets/twitter.png', alt: 'Twitter', link: 'https://twitter.com/sousesi'}
      ],
      showLanguageSelector: true,
      showStatusBar: true,
      showUserControls: true,
      showStatusBarBreakpoint: 800
    };
    frameworkConfigService.configure(config);

    menuService.items = initialMenuItems;

  }
}
