import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CampagneDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-campagne-detail',
  templateUrl: 'campagne-detail.html',
})
export class CampagneDetailPage {
  item: any;
  relationship:string; 
  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.item = navParams.get('item');
    if(!this.item){
          this.item ={
           name: 'Sarah Connor',
          date: 'May 12, 1984',
          image: 'assets/images/campagnes/500X500C.jpg',
          content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
        };
    }
  }
  
  cancel(){
    this.navCtrl.pop();
  }
}
