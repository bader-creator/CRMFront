import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/app/models/project/project';
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
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  @Input() id: number;
  list = new Project
  isinterne:string ;
  constructor(private soumservice :SoumissionService,public activatedRoute:ActivatedRoute ,  private alertctrl:AlertController,public toastCtrl: ToastController ,public  loadingCtrl: LoadingController ,public actionSheetController:ActionSheetController ,public modalCtrl :ModalController ,private navCtrl:NavController ,private router:Router,private projservice: ProjectService  ,private modalController: ModalController ) { }

  ngOnInit() {
    this.getproject()
  } 
  
  close(){
    this.modalController.dismiss()
  }

  getproject(){
    this.projservice.getproject(this.id).subscribe((value: any) => {
      
      this.list=value ; 
      this.list.interne === true ? this.isinterne = "Interne ": this.isinterne = "Externe" 
    }, error1 => {
      

    }, () => {
    });

  }

  delete(){
    this.projservice.delete(this.id).subscribe((value: any) => {
       
      this.loading('Project deleted')
     
    }, error1 => {
     
      this.loading('error')

    }, () => {
    });

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


          async  remove() {
            const  alert = await this.alertctrl.create({
           header: 'Confirm delete Project',
           message: 'Are you sure you want to permanently delete this project ?',
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
