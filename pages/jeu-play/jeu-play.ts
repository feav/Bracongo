import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

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

  menus: any[][];
  item: any;
  matrice: any;
  name: any;
  coups: number = 0;
  min: number = 0;
  sec: number = 0;
  hour: number = 0;
  constructor(public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    this.setConfigGame(3, "bobleponge");
    var _this = this;
    setInterval(
      function () {
        _this.sec++;
        if (_this.sec == 60) {
          _this.min++;
          _this.sec = 0;
        }
        if (_this.min == 60) {
          _this.hour++;
          _this.min = 0;
        }
      }, 1000);
  }
  setConfigGame(matrice, name) {
    this.matrice = matrice;
    this.name = name;
    let i,j;
    /*
    for(i=0;i<matrice;i++){
      var row = [];
      for(j=0;i<matrice;j++){
        row.push(
          {
            case: i+j,
            index: i+j,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/"+(i+j)+".jpg",
          }
        );
      }
      // this.menus.push(row);
    }
    */
    if (matrice == 3) {
  
      this.menus = [
        [
          {
            case: 0,
            index: 0,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/0.jpg",
          },
          {
            case: 1,
            index: 1,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/1.jpg"
          },
          {
            case: 2,
            index: 2,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/2.jpg"
          }
        ],
        [
          {
            case: 3,
            index: 3,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/3.jpg"
          },
          {
            case: 4,
            index: 4,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/4.jpg"
          },
          {
            case: 5,
            index: 5,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/5.jpg"
          }
        ],
        [
          {
            case: 6,
            index: 6,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/6.jpg"
          },
          {
            case: 7,
            index: 7,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/7.jpg"
          },
          {
            case: 8,
            index: 8,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/8.jpg"
          }
        ]
      ];
  
    }else if(matrice == 4){

      this.menus = [
        [
          {
            case: 0,
            index: 0,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/0.jpg",
          },
          {
            case: 1,
            index: 1,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/1.jpg"
          },
          {
            case: 2,
            index: 2,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/2.jpg"
          },
          {
            case: 3,
            index: 3,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/2.jpg"
          }
        ],
        [
          {
            case: 4,
            index: 4,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/4.jpg"
          },
          {
            case: 5,
            index: 5,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/5.jpg"
          },
          {
            case: 6,
            index: 6,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/3.jpg"
          },
          {
            case: 7,
            index: 7,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/3.jpg"
          }
        ],
        [
          {
            case: 8,
            index: 8,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/8.jpg"
          },
          {
            case: 9,
            index: 9,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/6.jpg"
          },
          {
            case: 10,
            index: 10,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/7.jpg"
          },
          {
            case: 11,
            index: 11,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/7.jpg"
          }
        ],
        [
          {
            case: 12,
            index: 12,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/8.jpg"
          },
          {
            case: 13,
            index: 13,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/6.jpg"
          },
          {
            case: 14,
            index: 14,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/7.jpg"
          },
          {
            case: 15,
            index: 15,
            click: 0,
            image: "assets/images/jeu/" + matrice + "/" + name + "/7.jpg"
          }
        ]
      ];
    }

  }
  viewDetail(e) {
    const profileModal = this.navCtrl.push('JeuMenuPage', { item: e });
  }
  canMove(e) {
    let i: number, j: number, x: number, y: number, cases: number;
    for (i = 0; i < this.menus.length; i++) {
      for (j = 0; j < this.menus[i].length; j++) {
        if (this.menus[i][j].index == 0) {
          cases = this.menus[i][j].case;
          x = cases % this.matrice;
          y = (cases - x) / this.matrice;
          var permited = [];
          permited.push((x + 1) + y * this.matrice);
          permited.push((x - 1) + y * this.matrice);
          permited.push(x + (y + 1) * this.matrice);
          permited.push(x + (y - 1) * this.matrice);
          return permited.indexOf(e.case) >= 0;
        }
      }
    }
    return 0;
  }
  click(e) {
    if (!this.canMove(e))
      return;
    let i: number, j: number, continuer: boolean = true, image: string;
    for (i = 0; i < this.menus.length && continuer; i++) {
      for (j = 0; j < this.menus[i].length; j++) {
        if (this.menus[i][j].index == 0) {
          this.menus[i][j].index = e.index;
          image = this.menus[i][j].image;
          this.menus[i][j].image = e.image;
          e.image = image;
          e.index = 0;
          this.coups++;
          continuer = false;
          break;
        }
      }
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmenuPage');
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
  cancel() {
    this.navCtrl.pop();
  }
}
