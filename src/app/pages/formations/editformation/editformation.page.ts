import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Platform, NavController,LoadingController,ToastController, IonList } from '@ionic/angular';
import { Formationservice } from 'src/app/services/formation/formation.service';
import { Formation } from 'src/app/models/formation/formation';
import { Addformation } from 'src/app/models/formation/addformation';
import { IonItemSliding } from '@ionic/angular';
import {  ViewChild } from '@angular/core';
import { isNull, isUndefined } from 'util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-editformation',
  templateUrl: './editformation.page.html',
  styleUrls: ['./editformation.page.scss'],
})
export class EditformationPage implements OnInit {
  detformation = new Formation(); 
  idr:number ;   leave = false 
  
  updated = new Addformation() ;  
  constructor(public activatedRoute:ActivatedRoute, public toastCtrl: ToastController,
    public loadingCtrl: LoadingController, private actionSheetController :ActionSheetController ,
    private formationservice:Formationservice ,private navCtrl:NavController ,private router:Router) { 

      
    this.activatedRoute.params.subscribe(params => {
      this.idr = params['id'] })
     }


  



  ngOnInit() {
    this.getformation(); 
  }

  close(){
    this.navCtrl.back();
    
  }  



  updateformation(){
 this.update()
 this.leave=true ; 
  this.getformation(); 
   

          
  }

  
 //loading

 async loading() {

  let loader = await this.loadingCtrl.create({
    duration: 500
  });
          loader.present();
          loader.onWillDismiss().then(async l => {
            const toast = await this.toastCtrl.create({
              message: 'formation updated',
              duration : 1000 ,
              position: 'bottom'
            }); 
 
            setTimeout(() => {
              toast.dismiss();
              this.close(); 
            }, 500);
          
toast.present();
            
          });

              
        }
   

    
 

  getformation(){
    this.formationservice.getformation(this.idr).subscribe((value: any) => {
      this.detformation=value;
      
    }, error1 => {

    }, () => {
    });

  }

 
   
  update(){   
    this.loading(); 
        console.log('updated',this.updated)
            this.formationservice.updateformation(this.updated,this.idr).subscribe((value: any) => {

            }, error1 => {
          
            }, () => {
            });
          
          }
   


}
