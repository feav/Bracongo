import { Component,ViewChild } from '@angular/core';
import { IonicPage, MenuController,ModalController,Loading,LoadingController, NavController,Slides, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  loading: Loading;
  slides: Array<{ image: string, title: string, paragraph: string, button: string }>
  walkthroughSlider: any;
  @ViewChild('walkthroughSlider') slider: Slides;

  constructor(
    private navCtrl: NavController,
        private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { }

  configureSlides() {
    this.walkthroughSlider = {
      initialSlide: 0,
      loop: true,
      autoplay: 5000,
      pager: true,
      speed: 500
    };
    this.slides = [{
      image: 'assets/images/produit/Bracongo-Djino-PET.png',
      title: 'JUS NATURELS',
      paragraph: 'Full Starter Template<br> (Ionic. Angular 2. Loopback. Mongo DB)',
      button: 'Skip'
    }, {
      image: 'assets/images/produit/BRACONGO-WORLD-COLA-2.png',
      title: 'BIERRRE A PRESSION',
      paragraph: 'Full Starter Template<br> (Ionic. Angular 2. Loopback. Mongo DB)',
      button: 'Skip'
    }, {
      image: 'assets/images/produit/NKOYI-BLONDE-p-2.png',
      title: 'BIERRE DE CONSERVE',
      paragraph: 'Boudin frankfurter ribeye prosciutto bacon venison, cow ham hock.',
      button: 'Skip'
    }, {
      image: 'assets/images/logo/logo1.png',
      title: 'BRACONGO',
      paragraph: '',
      button: 'Skip'
    }]
  }

  ionViewDidLoad() {
    this.configureSlides();
  }

  openLogin() {
    let modal = this.navCtrl.push('LoginPage');
  }

  openSignUp() {
    let modal = this.modalCtrl.create('LoginPage');
    modal.onDidDismiss((auth: Account) => {
      if (auth) {
        // this.events.publish('isLoggedIn');
        // this.navCtrl.setRoot(NewsComponent);
      }
    });
    modal.present();
  }

  getAccountDetails(id) {
  }

  goToSlide() {
    this.slider.slideNext(500);
  }
}
