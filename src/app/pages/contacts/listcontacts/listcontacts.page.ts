import { Component, OnInit } from '@angular/core';
import { Platform, NavController,LoadingController,ToastController, ModalController, IonList ,AlertController } from '@ionic/angular';
import { empty } from 'rxjs';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Contact } from 'src/app/models/contact/contact';
import { AddContact } from 'src/app/models/contact/Addcontact';
import {  ViewChild } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { isNull, isUndefined } from 'util';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { Storage } from '@ionic/storage';

import {DetailcontactPage} from '../detailcontact/detailcontact.page'


@Component({
  selector: 'app-listcontacts',
  templateUrl: './listcontacts.page.html',
  styleUrls: ['./listcontacts.page.scss'],
})



export class ListcontactsPage implements OnInit {
  search:string ;
@ViewChild('dynamicList') dynamicList;

empty :boolean =false



     //goto details   



     async presentModal(idd :number ,  slide:IonItemSliding  , read :boolean) {
      slide.close();          

    const modal = await this.modalController.create({
      backdropDismiss :false ,

      component: DetailcontactPage ,
      componentProps: {
        'read':read ,
        'id': idd
      }
    });
    modal.onDidDismiss().then((data) => {
      if(this.lisctcontact.length != 0){
        this.getallcontact(); 

      }
      else{
        this.lisctcontact = []
      }
  });

    return await modal.present();
  }




 //loading

 async loading() {

  let loader = await this.loadingCtrl.create({
    duration: 500
  });
          loader.present();
          loader.onWillDismiss().then(async l => {
            const toast = await this.toastCtrl.create({

              message: 'contact deleted ',
              duration : 2500 ,
              position: 'bottom'
            }); 
 
            setTimeout(() => {
              toast.dismiss();
            }, 1000);
          

            toast.present();
          });

              
        }
   

back(){
  this.closesitem(); 
  this.navCtrl.navigateRoot('/home-results')
}



//search

showable(name:string , name2:string ){
 if(isUndefined(name2)){
   return true ; 
 }
 return name===name2 || name2 === '' || name.toLowerCase().indexOf(name2.toLowerCase()) > -1  ; 

}



closesitem(){
  if(this.lisctcontact.length > 0){
    this.dynamicList.closeSlidingItems()
      }
}
  


doRefresh(event) {
 this.closesitem(); 
  setTimeout(() => {
    event.target.complete();
  }, 500);

  this.getallcontact(); 
}




  constructor(private navCtrl:NavController , private storage:Storage,   private alertctrl:AlertController,public toastCtrl: ToastController,public modalController:ModalController,
    public loadingCtrl: LoadingController, private contactservice: ContactService ,private router:Router ) { }
   
  lisctcontact:Contact[]=[];  
  filtred:Contact[]=[];  

  gotonewcon(){
    if(this.lisctcontact.length != 0){
  this.dynamicList.closeSlidingItems()
    }
  
    this.navCtrl.navigateRoot('newcontact')
  }
  gotoeditcon(id:number){
    this.dynamicList.closeSlidingItems()
    this.router.navigate(['/editcontact', id]);
  }
     
  intitsearch:boolean ; 
  user
  ngOnInit() {
    this.storage.get('currentUser').then((val: any) => {
      console.log('val', val)
      if (val) {
        this.user = val;
        console.log('user', this.user)
      }
    })
    this.getallcontact(); 


  }
 async  remove(idd:number) {
     const  alert = await this.alertctrl.create({
    header: 'Confirm delete contact',
    message: 'Are you sure you want to permanently delete this contact?',
    buttons: [
        {
            text: 'cancel',
            handler: () => {
            }
        },
        {
            text: 'Yes',
            handler: () => {
                     this.delete(idd) 
            }
        }
    ]
})
alert.present()
}
  
  
 
  //delete

  delete(id:number){
    this.loading(); 
    
    this.contactservice.deletcontact(id).subscribe((value: any) => {
      this.dynamicList.closeSlidingItems()
      this.lisctcontact.length--; 
      if(this.lisctcontact.length !=  0 ){
        this.getallcontact();
      }
      else 
      this.empty =true 
     
    }, error1 => {
    
    }, () => {
    });
       
   
  
  }



//list

  getallcontact(){
    this.contactservice.listcontact().subscribe((value: any) => {
      
      this.lisctcontact=value.reverse();
      console.log('lisctcontact',this.lisctcontact)
    }, error1 => {
      this.lisctcontact = []
      this.empty = true

    }, () => {
    });

  }


}
