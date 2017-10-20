import { Component } from '@angular/core';
import { LoadingController,IonicPage, ToastController,ModalController, ViewController,NavController ,NavParams  } from 'ionic-angular';

/**
 * Generated class for the CampagnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-campagne',
  templateUrl: 'campagne.html',
})
export class CampagnePage {
    cardItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public viewCtrl: ViewController) {
    this.cardItems = [
      [
        {
          name: 'Marty McFly',
          date: 'Nov 5, 1955',
          image: 'assets/images/campagnes/500X500C.jpg',
          content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        },
        {
          name: 'Sarah Connor',
          date: 'May 12, 1984',
          image: 'assets/images/campagnes/500X500D.jpg',
          content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
        }
      ],
      [
        {
          name: 'Marty McFly',
          date: 'Nov 5, 1955',
          image: 'assets/images/campagnes/500X500-IBENGE.jpg',
          content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        },
        {
          name: 'Sarah Connor',
          date: 'May 12, 1984',
          image: 'assets/images/campagnes/500X500C.jpg',
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
    this.navCtrl.push('CampagneDetailPage',{item:e});
  }

}
