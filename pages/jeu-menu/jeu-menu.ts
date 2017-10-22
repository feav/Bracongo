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
    this.setConfig(this.item.matrice);
  }
  setConfig(matrice){
    if(matrice==3){
      this.menus = [
        [
          {
            title:"BOB L'EPONGE",
            image:"assets/images/jeu/bobleponge.jpg",
            name:"bobleponge",
            matrice:matrice
          },
          {
            title:"DORE L'EXPLORATRICE",
            image:"assets/images/jeu/dora_exploratrice.jpg",
            name:"bobleponge",
            matrice:matrice
          }
        ],
        [
          {
            title:"INDESTRUCTIBLES",
            image:"assets/images/jeu/indestructibles.jpg",
            name:"bobleponge",
            matrice:matrice
          },
          {
            title:"MINIONS",
            image:"assets/images/jeu/minimos.jpg",
            name:"bobleponge",
            matrice:matrice
          }
        ],
        [
          {
            title:"POKEMON",
            image:"assets/images/jeu/pokemon.jpg",
            name:"bobleponge",
            matrice:matrice
          },
          {
            title:"SIMPSON",
            image:"assets/images/jeu/simpson.jpg",
            name:"bobleponge",
            matrice:matrice
          }
        ]
      ];
    }else if(matrice==4){
      this.menus = [
        [
          {
            title:"BOB L'EPONGE",
            image:"assets/images/jeu/bobleponge.jpg",
            name:"bobleponge",
            matrice:matrice
          },
          {
            title:"DORE L'EXPLORATRICE",
            image:"assets/images/jeu/dora_exploratrice.jpg",
            name:"bobleponge",
            matrice:matrice
          }
        ],
        [
          {
            title:"INDESTRUCTIBLES",
            image:"assets/images/jeu/indestructibles.jpg",
            name:"bobleponge",
            matrice:matrice
          },
          {
            title:"MINIONS",
            image:"assets/images/jeu/minimos.jpg",
            name:"bobleponge",
            matrice:matrice
          }
        ],
        [
          {
            title:"POKEMON",
            image:"assets/images/jeu/pokemon.jpg",
            name:"bobleponge",
            matrice:matrice
          },
          {
            title:"SIMPSON",
            image:"assets/images/jeu/simpson.jpg",
            name:"bobleponge",
            matrice:matrice
          }
        ]
      ];
    }
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
