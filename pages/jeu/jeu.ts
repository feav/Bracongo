import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JeuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jeu',
  templateUrl: 'jeu.html',
})
export class JeuPage {
  cardItems: any[];
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.cardItems = [
          {
            name: 'PREMIER NIVEAU',
            matrice:3,
            image: 'assets/images/jeu/bobleponge.jpg',
            nom: 'bobleponge',
            alcool: '0%',
            content: 'Réveille la star qui est en toi Réalise tes rèves'
          },
          {
            name: 'DEUXIEME NIVEAU',
            matrice:4,
            image: 'assets/images/jeu/pokemon.jpg',
            volume: '50 CL, 33 CL, 30 CL',
            nom: 'Cola',
            alcool: '0%',
            content: 'Réveille la star qui est en toi Réalise tes rèves'
          },
          {
            name: "TROISIEME NIVEAU",
            matrice:5,
            image: 'assets/images/jeu/simpson.jpg',
            volume: '50 CL, 33 CL, 30 CL',
            nom: 'Cola',
            alcool: '0%',
            content: 'Réveille la star qui est en toi Réalise tes rèves'
          }
      ];
    }
    viewDetail(e){
      const profileModal = this.navCtrl.push('JeuMenuPage', { item: e });
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
