import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

/**
 * Generated class for the JeuPlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jeu-play',
  templateUrl: 'jeu-play.html',
})
export class JeuPlayPage {

  menus:any[][];
  item:any;
  matrice:any;
  name:any;
  constructor(public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {
  	this.item = navParams.get('item');
      this.matrice = 3;
      this.name = "bobleponge";
      this.menus = [
        [
          {
            index:0,
            image:"assets/images/jeu/"+this.matrice+"/"+this.name+"/0.jpg",
          },
          {
            index:1,
            image:"assets/images/jeu/"+this.matrice+"/"+this.name+"/1.jpg"
          },
          {
            index:2,
            image:"assets/images/jeu/"+this.matrice+"/"+this.name+"/2.jpg"
          }
        ],
        [
          {
            index:3,
            image:"assets/images/jeu/"+this.matrice+"/"+this.name+"/3.jpg"
          },
          {
            index:4,
            image:"assets/images/jeu/"+this.matrice+"/"+this.name+"/4.jpg"
          },
          {
            index:5,
            image:"assets/images/jeu/"+this.matrice+"/"+this.name+"/5.jpg"
          }
        ],
        [
          {
            index:6,
            description:"BB",
            image:"assets/images/jeu/"+this.matrice+"/"+this.name+"/6.jpg"
          },
          {
            index:7,
            description:"BB",
            image:"assets/images/jeu/"+this.matrice+"/"+this.name+"/7.jpg"
          },
          {
            index:8,
            description:"BB",
            image:"assets/images/jeu/"+this.matrice+"/"+this.name+"/8.jpg"
          }
        ]
      ];
    }
    viewDetail(e){
      const profileModal = this.navCtrl.push('JeuMenuPage', { item: e });
    }
    click(e){
      
    }
    ionViewDidLoad() {
      console.log('ionViewDidLoad SubmenuPage');
    }
    toggleMenu(){

    }
    cancel(){
      this.navCtrl.pop();
    }
}
