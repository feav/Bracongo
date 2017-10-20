import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProduitModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produit-modal',
  templateUrl: 'produit-modal.html',
})
export class  ProduitModalPage {
    item:any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.item = navParams.get('item');
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad ModalPage');
    }
    cancel(){
      this.navCtrl.pop();
    }
}
