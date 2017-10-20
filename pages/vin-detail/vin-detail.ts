import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,MenuController } from 'ionic-angular';
/**
 * Generated class for the VinDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vin-detail',
  templateUrl: 'vin-detail.html',
})
export class VinDetailPage {
  filtre:number=0;
  cardItems: any[];
  sort : any = false;
  cardItem : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public menuCtrl:MenuController) {
    this.cardItems = [
      
              {
                name: 'WORLD COLA',
                date: 'Nov 5, 1955',
                image: 'assets/images/vins/rouge/AC0B8F7F3E25AFB8.png',
                volume: '50 CL, 33 CL, 30 CL',
                nom: 'Cola',
                prix: '1500$',
                content: 'Réveille la star qui est en toi Réalise tes rèves'
              },
              {
                name: 'BIERRES',
                date: 'Nov 5, 1955',
                image: 'assets/images/vins/rouge/CAC911266B683AD3.png',
                volume: '50 CL, 33 CL, 30 CL',
                nom: 'Cola',
                prix: '1500$',
                content: 'Réveille la star qui est en toi Réalise tes rèves'
              },
              {
                name: "D'JINO (bouteille plastique)",
                date: 'Nov 5, 1955',
                image: 'assets/images/vins/blanc/4F3D31C943CA6AC9.png',
                volume: '50 CL, 33 CL, 30 CL',
                nom: 'Cola',
                prix: '2500 $',
                content: 'Réveille la star qui est en toi Réalise tes rèves'
              },
              {
                name: 'XXL ENERGIE',
                date: 'May 12, 1984',
                image: 'assets/images/vins/blanc/E902BF9175C68941.png',
                volume: '50 CL, 33 CL, 30 CL',
                nom: 'Cola',
                prix: '4500$',
                content: 'Réveille la star qui est en toi Réalise tes rèves'
              },
              {
                name: 'XXXL DOUBLE ENERGIE',
                date: 'Nov 5, 1955',
                image: 'assets/images/vins/roses/A4A00511472FF26B.png',
                volume: '50 CL, 33 CL, 30 CL',
                nom: 'Cola',
                prix: '500$',
                content: 'Réveille la star qui est en toi Réalise tes rèves'
              },
              {
                name: 'ENERGIE',
                date: 'May 12, 1984',
                image: 'assets/images/vins/roses/C84B9923220CD291.png',
                volume: '50 CL, 33 CL, 30 CL',
                nom: 'Cola',
                prix: '1500$',
                content: 'Réveille la star qui est en toi Réalise tes rèves'
              },
              {
                name: 'XXXL DOUBLE ENERGIE',
                date: 'Nov 5, 1955',
                image: 'assets/images/vins/compal/3A7D27D353BC6229.png',
                volume: '50 CL, 33 CL, 30 CL',
                nom: 'Cola',
                prix: '500$',
                content: 'Réveille la star qui est en toi Réalise tes rèves'
              },
              {
                name: 'ENERGIE',
                date: 'May 12, 1984',
                image: 'assets/images/vins/compal/B750DEAA7B18D855.png',
                volume: '50 CL, 33 CL, 30 CL',
                nom: 'Cola',
                prix: '5500$',
                content: 'Réveille la star qui est en toi Réalise tes rèves'
              }
          ];
    this.cardItem = this.cardItems;
  }

 openModal(e){
    const profileModal = this.modalCtrl.create('ProduitModalPage', { item: e },{enableBackdropDismiss:true});
    profileModal.present();
  }
  sortResult(){
    this.cardItems.sort();
    this.sort = !this.sort;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VinDetailPage');
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
