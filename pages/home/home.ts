import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController,MenuController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface Sld  { title: string; description: string; image: string; }
export interface  Menu{ title: string; description: string; image: string; color: string;menu : number; }
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  menus:any[][];
  slidos:Sld[];
  account: { name: string, phone: string, password: string } ;
  isGetter:boolean = true;
  isManager:boolean = true;
  baba:string="mama";
  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public translateService: TranslateService
  ) {
    if(!parseInt(localStorage.getItem("ICON_IS_CONNECT"))){    
      let loader = this.loadingCtrl.create({
          content: "Connectez vous...",
          duration: 1500
        });
        loader.present();
      this.navCtrl.push('LoginPage');
    }
    this.account = {
      name: localStorage.getItem("ICON_PROD_NAME"),
      phone: localStorage.getItem("ICON_PROD_PHONE"),
      password: localStorage.getItem("ICON_PROD_CODE")
    };
    this.menus = [
      [
        {
          title:"EVENEMENTS",
          description:"AA",
          image:"assets/images/black/event.png",
          color:'green',
          page:"EvenementPage"
        },
        {
          title:"CAMPAGNES",
          description:"BB",
          image:"assets/images/black/campagne.png",
          color:'bleu',
          page:"CampagnePage"
        }
        ,{
          title:"PRODUIT",
          description:"BB",
          image:"assets/images/black/produits.png",
          color:'red',
          page:"ProduitPage"
        }
      ],
      [
        {
          title:"VINS",
          description:"BB",
          image:"assets/images/black/cle.png",
          color:'black',
          page:"VinPage"
        },
        {
          title:"BAR PROCHE",
          description:"BB",
          image:"assets/images/black/bar.png",
          color:'yellow',
          page:"BarPage"
        },
        {
          title:"FETE",
          description:"BB",
          image:"assets/images/black/fete.png",
          color:'pink',
          page:"FetePage"
        }
      ],
      [
        {
          title:"REALITE AUGMENTE ",
          description:"BB",
          image:"assets/images/black/bouteille.png",
          color:'red',
          page:"ProduitPage"
        },
        {
          title:"CONTACT",
          description:"BB",
          image:"assets/images/black/contact.png",
          color:'grey',
          page:"ProduitPage"
        },
        {
          title:"JEU",
          description:"BB",
          image:"assets/images/black/jeux.png",
          color:'red',
          page:"JeuPage"
        }
      ]
    ];
    this.slidos = [
      {
        title:"A",
        description:"AA",
        image:"assets/images/slider/accueil/djino.jpg"
      }
      ,{
        title:"B",
        description:"BB",
        image:"assets/images/slider/accueil/nkoyi.jpg"
      }
    ];
  	console.log(this.menus);
  }
  goToMenu(e){
    if(e.page)
      this.navCtrl.push(e.page);
    else
      this.navCtrl.push('HomePage');
  }
  addTransaction(){
  	this.navCtrl.push('ItemCreatePage');
  }
  manageCount(){
  	this.navCtrl.push('TabsPage');
  }
  searchList(){
    this.navCtrl.push('SearchPage');
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
