import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SoumissionService } from 'src/app/services/soumission/soumission.service';
import { Soumission  } from 'src/app/models/soumission/soumission';
import { Platform, NavController,LoadingController,ToastController, ModalController ,IonList, AlertController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import {  ViewChild } from '@angular/core';
import { findComponentView } from '@angular/core/src/render3/util';

import { isNull, isUndefined } from 'util';

import { ActionSheetController } from '@ionic/angular';
import { stringify } from 'querystring';
@Component({
  selector: 'app-soumdetails',
  templateUrl: './soumdetails.page.html',
  styleUrls: ['./soumdetails.page.scss'],
})
export class SoumdetailsPage implements OnInit {
  @Input() id: number;
  tuneps:string ;
  list = new Soumission()
  constructor(private soumservice :SoumissionService,private alertctrl:AlertController,public activatedRoute:ActivatedRoute ,public toastCtrl: ToastController ,public  loadingCtrl: LoadingController ,public actionSheetController:ActionSheetController ,public modalCtrl :ModalController ,private navCtrl:NavController ,private router:Router) { 


   }


   async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: this.list.title,
      cssClass: 'action-sheets-groups-page',

      buttons: [{
        text: 'Delete',
        cssClass: 'EditionIcon',
        role: 'destructive',
        icon: 'trash',
        handler: () => {

          this.remove() ; 

        }
       } ]
    });
    await actionSheet.present();
  }
close(){
  this.modalCtrl.dismiss()
}
  ngOnInit() {
    this.getsoum()
  } 
   
  async loading(msg :string) {
    let loader = await this.loadingCtrl.create({
      duration: 500
    });
            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                
                showCloseButton: true,
                message: msg,
                duration : 1000 ,
                position: 'bottom'
              });
              setTimeout(() => {
                toast.dismiss();
                
                this.close(); 
              }, 1000);
              toast.present();
            });
  
                
          }


  getsoum(){
    this.soumservice.getSoumission(this.id).subscribe((value: any) => {
      
      this.list=value
      this.list.isTuneps === true ? this.tuneps ="yes": this.tuneps ="NO"
     
    }, error1 => {
     

    }, () => {
    });

  } 

  delete(){
    this.soumservice.delete(this.id).subscribe((value: any) => {
      
     this.loading('project deleted')
    }, error1 => {
     
 this.loading('error !')
    }, () => {
    });

  }

  async  remove() {
    const  alert = await this.alertctrl.create({
   header: 'Confirm delete Submission',
   message: 'Are you sure you want to permanently delete this submission ?',
   buttons: [
       {
           text: 'cancel',
           handler: () => {
           }
       },
       {
           text: 'Yes',
           handler: () => {
                    this.delete() 
           }
       }
   ]
})
alert.present()
}


}
