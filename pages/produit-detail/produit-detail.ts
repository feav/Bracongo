import { Component } from '@angular/core';
import { LoadingController,IonicPage, ToastController,ModalController, ViewController,NavController ,NavParams  } from 'ionic-angular';

/**
 * Generated class for the ProduitDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produit-detail',
  templateUrl: 'produit-detail.html',
})
export class ProduitDetailPage {
   cardItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public viewCtrl: ViewController) {
    this.cardItems = [

        {
          name: 'WORLD COLA',
          date: 'Nov 5, 1955',
          image: 'assets/images/produit/250x275djino.jpg',
          volume: '50 CL, 33 CL, 30 CL',
          nom: 'Cola',
          alcool: '0%',
          content: 'Réveille la star qui est en toi Réalise tes rèves'
        },
        {
          name: 'BIERRES',
          date: 'Nov 5, 1955',
          image: 'assets/images/produit/BEAUFORT.png',
          volume: '50 CL, 33 CL, 30 CL',
          nom: 'Cola',
          alcool: '0%',
          content: 'Réveille la star qui est en toi Réalise tes rèves'
        },
        {
          name: "D'JINO (bouteille plastique)",
          date: 'Nov 5, 1955',
          image: 'assets/images/produit/Bracongo-Djino-PET.png',
          volume: '50 CL, 33 CL, 30 CL',
          nom: 'Cola',
          alcool: '0%',
          content: 'Réveille la star qui est en toi Réalise tes rèves'
        },
        {
          name: 'XXL ENERGIE',
          date: 'May 12, 1984',
          image: 'assets/images/produit/BRACONGO-WORLD-COLA-2.png',
          volume: '50 CL, 33 CL, 30 CL',
          nom: 'Cola',
          alcool: '0%',
          content: 'Réveille la star qui est en toi Réalise tes rèves'
        },
        {
          name: 'XXXL DOUBLE ENERGIE',
          date: 'Nov 5, 1955',
          image: 'assets/images/produit/NKOYI-BLONDE-p-2.png',
          volume: '50 CL, 33 CL, 30 CL',
          nom: 'Cola',
          alcool: '0%',
          content: 'Réveille la star qui est en toi Réalise tes rèves'
        },
        {
          name: 'ENERGIE',
          date: 'May 12, 1984',
          image: 'assets/images/produit/TEMBO-3.png',
          volume: '50 CL, 33 CL, 30 CL',
          nom: 'Cola',
          alcool: '0%',
          content: 'Réveille la star qui est en toi Réalise tes rèves'
        }
    ];
  }
   dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
 }
  openModal(e){
    const profileModal = this.modalCtrl.create('ProduitModalPage', { item: e },{enableBackdropDismiss:true});
    profileModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmenuPage');
  }

  cancel(){
    this.navCtrl.pop();
  }
  viewDetail(e){
    this.navCtrl.push('ProduitModalPage',{item:e});
  }

}
