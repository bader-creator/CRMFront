import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Contact } from 'src/app/models/contact/contact';
import { AddContact } from 'src/app/models/contact/Addcontact';
import { Platform, NavController,LoadingController,ToastController, ModalController ,IonList } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import {  ViewChild } from '@angular/core';
import { findComponentView } from '@angular/core/src/render3/util';

import { isNull, isUndefined } from 'util';

import { ActionSheetController } from '@ionic/angular';
import { stringify } from 'querystring';


@Component({
  selector: 'app-detailcontact',
  templateUrl: './detailcontact.page.html',
  styleUrls: ['./detailcontact.page.scss'],
})





export class DetailcontactPage implements OnInit {
  leave : boolean =  false ; 

  mailph:string ; 
  orgph:string  ; 
  fonph:string 
  telph:string 
  payph:string 
  commph :string ;
  cadph:string 
  adrph: string 
  birph :string 

  @ViewChild('slides') slides;


  @Input() id: number;
  @Input() read: boolean;


  updated = new AddContact() ; 

  contactrec = new Contact(); 
  datecr :string
  constructor(public activatedRoute:ActivatedRoute ,public toastCtrl: ToastController ,public  loadingCtrl: LoadingController ,public actionSheetController:ActionSheetController ,public modalCtrl :ModalController ,private navCtrl:NavController ,private contactservice: ContactService ,private router:Router ) { 
    





  }

     


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: this.contactrec.fullname,
      cssClass: 'action-sheets-groups-page',

      buttons: [{
        text: 'Delete',
        cssClass: 'EditionIcon',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.read === true ? this.read = false : this.read = true ;     

          this.delete(this.id) ; 

        }
       } ,
       {
        text: 'edit',
        role: '',
        icon: 'create',
        handler: () => {
          this.read === true ? this.read = false : this.read = true ;     
             
             this.mailph = "contact mail" 
             this.orgph ="contact organisme "
             this.fonph ="contact fonction"
             this.telph ="contact phone"
             this.payph = "contact pays" 
             this.commph="comments" 
             this.cadph="event , mission ... "
             this.adrph =" contact adresse"
             this.birph ="select date "

          }
       } ,{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }





  canleave(){
    return this.leave === true  || this.updated.fullname ==='' 
  }
  

  nomcol(){
    if(this.updated.fullname===''){
      return 'danger'
    }
    return 'black' ; 
  }
      
  
      


  ngOnInit() {
    this. getcontact();
   
    
    
    

  }

  close(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    
  }  
   
//loading

async loading(msg : string ) {

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
  
  getcontact(){
    this.contactservice.getcontact(this.id).subscribe((value: any) => {
      this.contactrec=value;
      
    }, error1 => {

    }, () => {
    });

  }
//list 

update(){   
           


                if(isNull(this.updated.natureDeContact)  || isUndefined(this.updated.natureDeContact)){
                  this.updated.natureDeContact = this.contactrec.natureDeContact
                } 
                   
                

          this.contactservice.updatecontact(this.updated,this.id).subscribe((value: any) => {

                this.loading('updated contact ');  
                 this.leave= true
                 this.read = false 
          }, error1 => {
            this.leave= true
                 this.read = false 

            this.loading('error ! '); 
          }, () => {
          });
        
        }



delete(id:number){
  this.read = false ; 
  this.leave = true ; 
  
  this.loading('contact deleted ')
  
  this.contactservice.deletcontact(id).subscribe((value: any) => {
   
   
  }, error1 => {
      this.loading('error ! ')
  }, () => {
  });
     
 

}


}
