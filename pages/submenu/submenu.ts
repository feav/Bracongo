import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController,IonicPage, ToastController,ModalController, ViewController   } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-submenu',
  templateUrl: 'submenu.html',
})
export class SubmenuPage {
    cardItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public viewCtrl: ViewController) {
    this.cardItems = [
      [
        {
          name: 'Marty McFly',
          date: 'Nov 5, 1955',
          image: 'assets/images/event/500x500jazzkif.jpg',
          content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        },
        {
          name: 'Sarah Connor',
          date: 'May 12, 1984',
          image: 'assets/images/event/redone2.JPG',
          content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
        }
      ],
      [
        {
          name: 'Marty McFly',
          date: 'Nov 5, 1955',
          image: 'assets/images/fete/fete1.jpg',
          content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        },
        {
          name: 'Sarah Connor',
          date: 'May 12, 1984',
          image: 'assets/images/fete/fete2.jpg',
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
    this.navCtrl.push('ItemDetailPage',{item:e});
  }
}
