import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { LoadingController } from 'ionic-angular';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without phone, make
  // sure to add it to the type
  account: { name: string, phone: string, password: string } = {
    name: 'Test Human',
    phone: 'test@example.com',
    password: 'test'
  };
  isConnect:boolean;
  logo : { email: string, password: string,facebook: string, gmail: string,app:string }  = {
    email:"assets/images/btn/message.PNG",
    password:"assets/images/btn/lock.PNG",
    facebook:"assets/images/btn/facebook.PNG",
    gmail:"assets/images/btn/gmail.PNG",
    app:"assets/images/logo/logo3.png"
  };  
  slides:Slide[]=[
    {
      title: "",
      description: "",
      image: 'assets/images/produit/Bracongo-Djino-PET.png',
    },
    {
      title: "",
      description: "",
      image: 'assets/images/produit/BRACONGO-WORLD-COLA-2.png',
    }
  ];
  loginUrl:string="http://www.mapossa.com/api/user/add/";
  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public translateService: TranslateService) {
      this.account.phone = localStorage.getItem("ICON_PROD_PHONE");
      this.account.password = localStorage.getItem("ICON_PROD_CODE");
      this.account.name = localStorage.getItem("ICON_PROD_NAME");
      console.log(parseInt(localStorage.getItem("ICON_IS_CONNECT")));
      if(parseInt(localStorage.getItem("ICON_IS_CONNECT"))){
        this.isConnect = true;

        alert("DECONNECTER VOUS POUR CREER UN AUTRE COMPTE");
        this.navCtrl.push('LoginPage');
      }
    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }
  goToLogin(){
    this.navCtrl.push("LoginPage");
  }
  doSignup() {
    let loader = this.loadingCtrl.create({
      content: "Ajout en  cours..."
    });
    loader.present();
      var request = new XMLHttpRequest();
      var name = this.account.name;
      var phone = this.account.phone;
      var password = this.account.password;
      var toast_ = this.toastCtrl;  
      var navCtrl_ = this.navCtrl;
      var formData = "?name="+name+"&phone="+phone+"&password="+password;
      request.open("GET", this.loginUrl+formData);    
      request.onload = function (oEvent) {
        console.log(request);
        if (request.status == 200) {
          localStorage.setItem("ICON_PROD_PHONE",phone);
          localStorage.setItem("ICON_PROD_CODE",password);
          localStorage.setItem("ICON_PROD_NAME",name);
          loader.dismiss();
          localStorage.setItem("ICON_IS_CONNECT",'1');
          navCtrl_.push('HomePage');
        } else {
          loader.dismiss();
          let toast = toast_.create({
            message: "echec de connexion",
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }
      };
      request.send(formData);
  }
}
