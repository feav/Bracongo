import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';
import { Settings } from '../providers/providers';

@Component({
  selector: 'page-root',
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;
  color: string = '#ee0d1c';

  pages: any[] = [
    { title: 'Menu', component: 'HomePage',icon:'ios-home-outline' , image: false, show: false },
    { title: 'Evenement', component: 'EvenementPage',icon:'assets/images/menu/event.png' , image: true, show: false },
    { title: 'Campagne', component: 'ProduitPage',icon:'assets/images/menu/campagne.png', image: true, show: false  },    
    { title: 'Produits', component: 'CampagnePage' ,icon:'assets/images/menu/bouteille.png', image: true, show: false },
    { title: 'Cle', component: 'VinPage',icon:'assets/images/menu/cle.png' , image: true, show: false },
    { title: 'Contact', component: 'ProduitPage',icon:'assets/images/menu/contact.png' , image: true, show: false },
    { title: 'Info', component: 'ProduitPage',icon:'assets/images/menu/infos.png' , image: true, show: false }
  ]


  constructor(private translate: TranslateService, private platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.initTranslate();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /*
    user to set shades for the menu section
   */
  colorLuminance(hex, lum, type?) {
    if (!type) {
      // validate hex string
      hex = String(hex).replace(/[^0-9a-f]/gi, '');
      if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      lum = lum || 0;
      // convert to decimal and change luminosity
      let rgb = '#', c, i;
      for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ('00' + c).substr(c.length);
      }
      return rgb;
    } else {
      let num = parseInt(hex.slice(1), 16), amt = Math.round(2.55 * lum), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
      return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }
  }
  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
