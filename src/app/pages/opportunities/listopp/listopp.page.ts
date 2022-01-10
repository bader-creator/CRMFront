import { Component, OnInit ,ViewChild } from '@angular/core';
import { Platform, NavController, Config ,ToastController ,LoadingController, AlertController  } from '@ionic/angular';
import { NewoppPage } from '../newopp/newopp.page';
import { ModalController } from '@ionic/angular';
import {  DetailsoppPage  } from '../../crm/detailsopp/detailsopp.page';
import { isNull, isUndefined } from 'util';
import { IonItemSliding } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { OppService } from 'src/app/services/opportunity/opp.service';
import { Opportunity } from 'src/app/models/opp/opp';

@Component({
  selector: 'app-listopp',
  templateUrl: './listopp.page.html',
  styleUrls: ['./listopp.page.scss'],
})
export class ListoppPage implements OnInit {
  search:string ;
  @ViewChild('dynamicList') dynamicList;
empty:boolean = false ; 
  newopp = NewoppPage
  listopp:Opportunity[]=[];  

  showable(name:string , name2:string ){
    if(isUndefined(name2)){
      return true ; 
    }
    return  name2 === '' || name.toLowerCase().indexOf(name2.toLowerCase()) > -1  ; 
   
   } 



   async  remove(idd:number) {
    const  alert = await this.alertctrl.create({
   header: 'Confirm delete Opportunity',
   message: 'Are you sure you want to permanently delete this opportunity ?',
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

  constructor( public modalController: ModalController ,public nav :NavController , private storage:Storage,private alertctrl:AlertController , private oppservice:OppService , private toastCtrl :ToastController , private loadingCtrl:LoadingController) { }


  async presentModal(idd :number ,  slide:IonItemSliding , read :boolean) {

      slide.close()
      const modal = await this.modalController.create({
        backdropDismiss :false ,
        component: DetailsoppPage ,
        componentProps: {
          'read': read ,
          'id': idd
        }
      });
      modal.onDidDismiss().then((data) => {
        if(this.listopp.length != 0){
          this.getallopp(); 
  
        }
        else{
          this.listopp =[]
        }
    });
  
      return await modal.present();
   

  }

  
closesitem(){
  if(this.listopp.length > 0){
    this.dynamicList.closeSlidingItems()
      }
}
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

  
  async loading(msg :string) {
    let loader = await this.loadingCtrl.create({
      duration: 500
    });
            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                message: msg,
                duration : 500 ,
                position: 'bottom'
              });
              setTimeout(() => {
                toast.dismiss();
                
              }, 800);
              toast.present();
            });
  
                
          } 

  


  ionViewWillEnter() {
    this.getallopp();

  }


  doRefresh(event) {
  
     setTimeout(() => {
       event.target.complete();
     }, 500);
   
     this.getallopp(); 
   }
      //listopp

  getallopp(){
    this.oppservice.listopp().subscribe((value: any) => {
      
      this.listopp=value.reverse();
     this.empty=false
    }, error1 => {
      this.listopp=[]
      this.empty = true 
    }, () => {
    });

  }
  delete(id:number){
         this.closesitem()

    this.oppservice.deleteopp(id).subscribe((value: any) => {
      this.getallopp(); 
      this.loading('opportunity deleted !')
   
     
    }, error1 => {
      this.loading('error ! ')
    }, () => {
    });

  }
  



}
