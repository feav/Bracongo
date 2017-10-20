import { Component } from '@angular/core';
import { LoadingController,IonicPage, ToastController,ModalController, ViewController,NavController ,NavParams  } from 'ionic-angular';
/**
 * Generated class for the ProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produit',
  templateUrl: 'produit.html',
})
export class ProduitPage {
    cardItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public viewCtrl: ViewController) {
    this.cardItems = [
      [
        {
          name: 'BOISSONS GAZEUSES',
          date: 'Nov 5, 1955',
          image: 'assets/images/produit/250x275djino.jpg',
          content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        },
        {
          name: 'BIERES',
          date: 'May 12, 1984',
          image: 'assets/images/produit/BEAUFORT.png',
          content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
        }
      ],
      [
        {
          name: 'Marty McFly',
          date: 'Nov 5, 1955',
          image: 'assets/images/produit/Bracongo-Djino-PET.png',
          content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        },
        {
          name: 'Sarah Connor',
          date: 'May 12, 1984',
          image: 'assets/images/produit/BRACONGO-WORLD-COLA-2.png',
          content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
        }
      ]
    ];
  }
   dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
 }
  openModal(e){
    const profileModal = this.modalCtrl.create('ModalPage', { item: e },{enableBackdropDismiss:true});
    profileModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmenuPage');
  }

  cancel(){
    this.navCtrl.pop();
  }
  viewDetail(e){
    this.navCtrl.push('ProduitDetailPage',{item:e});
  }
}
