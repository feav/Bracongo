import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../providers/providers';
import { LoadingController } from 'ionic-angular';
import { Http, HttpModule } from '@angular/http';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  account: { name: string, phone: string, password: string } = {
    name: '',
    phone: '',
    password: ''
  };
  logo : { email: string, password: string,facebook: string, gmail: string,app:string }  = {
    email:"assets/images/btn/message.PNG",
    password:"assets/images/btn/lock.PNG",
    facebook:"assets/images/btn/facebook.PNG",
    gmail:"assets/images/btn/gmail.PNG",
    app:"assets/images/logo/logo3.png"
  }; 
  SignupPage:string = "#/signup"; 
  isConnect : boolean = false;
  loginUrl:string="http://www.mapossa.com/api/connect/";

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private http: HttpModule,
    public translateService: TranslateService,
    // private http: HTTP
    ) {
      console.log(http);
      this.account.phone = localStorage.getItem("ICON_PROD_PHONE");
      this.account.password = localStorage.getItem("ICON_PROD_CODE");
      this.account.name = localStorage.getItem("ICON_PROD_NAME");
      if(parseInt(localStorage.getItem("ICON_IS_CONNECT")))
        this.isConnect = true;
      this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
      
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    let loader = this.loadingCtrl.create({
      content: "Connexion en  cours..."
    });
    loader.present();
      var name = this.account.name;
      var phone = this.account.phone;
      var password = this.account.password;
      var toast_ = this.toastCtrl;  
      localStorage.setItem("ICON_PROD_PHONE",phone);
      localStorage.setItem("ICON_PROD_CODE",password);
      localStorage.setItem("ICON_PROD_NAME","USER_NAME");
      loader.dismiss();
      localStorage.setItem("ICON_IS_CONNECT",'1');
      this.navCtrl.push('HomePage');
  }
  disconnect(){
    localStorage.setItem("ICON_IS_CONNECT",'0');
          localStorage.setItem("ICON_PROD_CODE",'');
    this.navCtrl.push('LoginPage');
  }
  signup() {
    this.navCtrl.push('SignupPage');
  }
  nothing(){
    let toast = this.toastCtrl.create({
      message: "NOT IMPLEMENT",
      duration: 3000,
      position: 'top'
      });
    toast.present();
  }
}
