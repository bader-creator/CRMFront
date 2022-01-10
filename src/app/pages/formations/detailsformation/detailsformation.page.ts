import { Component, OnInit } from '@angular/core';
import { Platform, NavController,LoadingController,ToastController, IonList, AlertController } from '@ionic/angular';
import { Formationservice } from 'src/app/services/formation/formation.service';
import { Formation } from 'src/app/models/formation/formation';
import { Addformation } from 'src/app/models/formation/addformation';
import { IonItemSliding } from '@ionic/angular';
import {  ViewChild } from '@angular/core';
import { isNull, isUndefined } from 'util';
import { Router } from '@angular/router'
import { newformation } from 'src/environments/Config/AppConfig';
import { ModalController } from '@ionic/angular';
import {  ViewformationPage  } from '../viewformation/viewformation.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-detailsformation',
  templateUrl: './detailsformation.page.html',
  styleUrls: ['./detailsformation.page.scss'],
})
export class DetailsformationPage implements OnInit {
  empty :boolean 
  @ViewChild('dynamicList') dynamicList;
search:string
  listformations:Formation[]=[];  

  constructor(private formationservice:Formationservice,private storage:Storage,private  alertctrl:AlertController  ,public modalController:ModalController ,public navctrl : NavController  ,public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,private router:Router) { }
    user
  ngOnInit() {
    this.storage.get('currentUser').then((val: any) => {
      console.log('val', val)
      if (val) {
        this.user = val;
        console.log('user', this.user)
      }
    })

  }
  ionViewWillEnter() {
    this.getallformation();
  }


        //goto details   



    async presentModal(idd :number ,  slide:IonItemSliding ) {
      slide.close();          

    const modal = await this.modalController.create({
      component: ViewformationPage ,
      componentProps: {
      
        'id': idd
      }
    });
    modal.onDidDismiss().then((data) => {
      if(this.listformations.length != 0){
        this.getallformation(); 

      }
      else{
        this.listformations = []
      }
  });

    return await modal.present();
  }



      
  
  showable(name:string , name2:string ){
    if(isUndefined(name2)){
      return true ; 
    }
    return  name2 === '' || name.toLowerCase().indexOf(name2.toLowerCase()) > -1  ; 
   
   }
   
back(){
  this.closesitem(); 
  this.navctrl.navigateRoot('/home-results')
}

  closesitem(){
    if(this.listformations.length > 0){
      this.dynamicList.closeSlidingItems()
        }
  }


  doRefresh(event) {
    this.closesitem(); 
     setTimeout(() => {
       event.target.complete();
     }, 500);
   
     this.getallformation(); 
   }
   

 //loading

 async loading() {

  let loader = await this.loadingCtrl.create({
    duration: 500
  });
          loader.present();
          loader.onWillDismiss().then(async l => {
            const toast = await this.toastCtrl.create({
              message: 'formation deleted ',
              duration : 2500 ,
              position: 'bottom'
            }); 
 
            setTimeout(() => {
              toast.dismiss();
            }, 1000);
          

            toast.present();
          });

              
        }
   

    
  //delete

  delete(id:number){
    this.loading(); 
    
    this.formationservice.deleteformation(id).subscribe((value: any) => {
      this.dynamicList.closeSlidingItems()
      this.listformations.length--; 
      if(this.listformations.length !=  0 ){
        this.getallformation();
      }
      else 
      this.empty=true
     
    }, error1 => {
    
    }, () => {
    });
       
   
  
  }

  async  remove(idd:number) {
    const  alert = await this.alertctrl.create({
   header: 'Confirm delete training',
   message: 'Are you sure you want to permanently delete this training?',
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

  
//list

getallformation(){
  this.formationservice.listformation().subscribe((value: any) => {
    this.listformations=value.reverse();
    console.log('this.value',value)
    console.log('this.listformations',this.listformations)
   this.empty=false
  }, error1 => { 

    this.listformations=[]
    this.empty =true

  }, () => {
  });

}

}
