import { Component, OnInit, ViewChild } from '@angular/core';

import { Platform, NavController,LoadingController, ModalController, ToastController,IonProgressBar, IonRouterOutlet, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthService} from '../../src/app/services/auth/auth.service';
import { FCM } from 'plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM';
import { Pages } from './interfaces/pages';
import { DataService } from './data.service';
import {user} from './user.model'; 
import { isNull } from 'util';
import { PlatformLocation } from '@angular/common';
import { async } from '@angular/core/testing';
import { viewClassName } from '@angular/compiler';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
@ViewChild(IonRouterOutlet, {})  routerOutlet : IonRouterOutlet

 users$ :user[]; 
  public appPages: Array<Pages>;

  constructor(
    private dataservice: DataService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public loadingCtrl: LoadingController,
    private auth:AuthService, 
    public navCtrl: NavController,
    private location :PlatformLocation,
    private modalctrl: ModalController , 
    private alertctrl:AlertController ,
    private router:Router ,
    private fcm: FCM,
    private toastController:ToastController
  )
       
  {
    

    this.initializeApp();
    this.auth.checkToken()
     
    this.location.onPopState(async() => {

const modal = await this.modalctrl.getTop() ; 
 if(modal){
   modal.dismiss()
 }
    });

         
  }
       

 

   ngOnInit(){
    


   } 

   async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
   
  initializeApp() {      
    

    this.platform.ready().then(() => {

      this.statusBar.styleDefault();  
        this.splashScreen.hide();
        this.fcm.onNotification().subscribe(data => {
          console.log('datafcm',data)
          if (data.wasTapped) {
            this.navCtrl.navigateRoot(`/home-results`);
          } else {
            this.presentToast(data.title);
          }
        });
      
        this.platform.backButton.subscribeWithPriority(0 ,async() =>{
      
          if(this.routerOutlet && this.routerOutlet.canGoBack()){
            this.routerOutlet.pop();
            
          }
          else if( this.router.url === "/home-results"){
const alert = await this.alertctrl.create({
 header :"Close SFM application " ,
 message :"Do you really want to close the app  ?",
 buttons: [
  {
    text:"cancel",
    role:"cancel"
  },
  {
    text :"close app",
    handler :() => {
      navigator["app"].exitApp(); 
    }
  }

 ]




}) ; 
await alert.present();

          }
          else if(this.navCtrl ){
 this.navCtrl.pop()          }


        }) ;

    }).catch(() => {});
  }


}
