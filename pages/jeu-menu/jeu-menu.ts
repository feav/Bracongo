import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

/**
 * Generated class for the JeuMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jeu-menu',
  templateUrl: 'jeu-menu.html',
})
export class JeuMenuPage {
  menus:any[][];
  item:any;
  constructor(public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {
  	this.item = navParams.get('item');
    this.menus = [
      [
        {
          title:"BOB L EPONGE",
          image:"assets/images/jeu/bobleponge.jpg",
          page:"EvenementPage"
        },
        {
          title:"DORE L'EXPLORATRICE",
          description:"BB",
          image:"assets/images/jeu/dora_exploratrice.jpg",
          color:'bleu',
          page:"CampagnePage"
        }
      ],
      [
        {
          title:"INDESTRUCTIBLES",
          description:"BB",
          image:"assets/images/jeu/indestructibles.jpg",
          color:'black',
          page:"VinPage"
        },
        {
          title:"MINIONS",
          description:"BB",
          image:"assets/images/jeu/minimos.jpg",
          color:'yellow',
          page:"BarPage"
        }
      ],
      [
        {
          title:"POKEMON",
          description:"BB",
          image:"assets/images/jeu/pokemon.jpg",
          color:'red',
          page:"ProduitPage"
        },
        {
          title:"SIMPSON",
          description:"BB",
          image:"assets/images/jeu/simpson.jpg",
          color:'grey',
          page:"ProduitPage"
        }
      ]
    ];
  }
  goToGame(cat){
    this.navCtrl.push("JeuPlayPage",{item:cat});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad JeuMenuPage');
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
