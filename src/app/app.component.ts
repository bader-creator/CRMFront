import { Component, OnInit, ViewChild } from '@angular/core';

import { Platform, NavController,LoadingController, ModalController, IonProgressBar, IonRouterOutlet, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthService} from '../../src/app/services/auth/auth.service';

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
  )
       
  {
    

    this.initializeApp();
     
    this.location.onPopState(async() => {

const modal = await this.modalctrl.getTop() ; 
 if(modal){
   modal.dismiss()
 }
    });

         
  }
       

 

   ngOnInit(){
    


   } 

   
  initializeApp() {      
    

    this.platform.ready().then(() => {

      this.statusBar.styleDefault();  
        this.splashScreen.hide();

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
