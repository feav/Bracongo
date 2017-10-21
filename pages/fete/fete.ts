import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController,ModalController } from 'ionic-angular';
/**
 * Generated class for the FetePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fete',
  templateUrl: 'fete.html',
})
export class FetePage {

  
	slidos: any[] = [
		{
			title: "A",
			description: "AA",
			image: "assets/images/chateaux/chateau1.jpg"
		},
		{
			title: "A",
			description: "AA",
			image: "assets/images/chateaux/chateau2.jpg"
		},
		{
			title: "A",
			description: "AA",
			image: "assets/images/vins/champagnes.jpg"
		}
		, {
			title: "B",
			description: "BB",
			image: "assets/images/slider/accueil/nkoyi.jpg"
		}
	];
	constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController,public modalCtrl: ModalController) {
	}
	goToDetail(item) {
		this.navCtrl.push("VinDetailPage", { item: item });
	}

  openModal(e){
    const profileModal = this.modalCtrl.create('FeteDetailPage', { item: e },{enableBackdropDismiss:true});
    profileModal.present();
  }
	toggleMenu() {
		this.menuCtrl.toggle();
	  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FetePage');
  }

}
