import { Component, OnInit ,ViewChild } from '@angular/core';
import { Platform, NavController, Config ,IonNav ,LoadingController ,ToastController} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { isNull, isUndefined  } from 'util';
import { IonSlides } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Addoppp } from 'src/app/models/opp/addopp';  
import {  DetailsoppPage  } from '../../crm/detailsopp/detailsopp.page';

import { OppService } from 'src/app/services/opportunity/opp.service';
import { Opportunity } from 'src/app/models/opp/opp';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.page.html',
  styleUrls: ['./pipeline.page.scss'],
})
export class PipelinePage implements OnInit {
  listopp : Opportunity[]= [] 
  updated = new Addoppp() ;
  emptypro:boolean = false ; 
  emptycon:boolean =false
  emptysuiv:boolean =false
  emptyren:boolean =false
  emptyneg:boolean =false




  constructor(private oppservice:OppService , private loadingCtrl:LoadingController, private toastCtrl :ToastController ,private modalController :ModalController ,private actionSheetController :ActionSheetController) { }
  @ViewChild(IonSlides) slides: IonSlides;

  ngOnInit() {
    this.getopp('prospect identifié')
  }
     
  async presentActionSheet(step1:string , step2:string ,step3:string ,step4:string ,idopp:number  ,curstep:string) {
    const actionSheet = await this.actionSheetController.create({
      header: "actions",
      cssClass: 'action-sheets-groups-page',

      buttons: [
        
        {
        text: 'View Opportunities',
        cssClass: 'EditionIcon',
        icon: 'search',
        handler: () => {
                 this.presentModal(idopp,false,curstep)

                 }
       } ,
        
       {
        text: 'Move to '+step1,
        cssClass: 'EditionIcon',
        icon: 'arrow-forward',
        handler: () => {

          this.update(idopp,step1,curstep)


                 }
       } ,
       
       {
        text: 'Move to '+step2,
        cssClass: 'EditionIcon',
        icon: 'arrow-forward',
        handler: () => {
          this.update(idopp,step2,curstep)


                 }
       } ,
       
       {
        text: 'Move to '+step3,
        cssClass: 'EditionIcon',
        icon: 'arrow-forward',
        handler: () => {
          this.update(idopp,step3,curstep)


                 }
       } ,
       
       {
        text: 'Move to '+step4,
        cssClass: 'EditionIcon',
        icon: 'arrow-forward',
        handler: () => {

          this.update(idopp,step4,curstep)

                 }
       } 
       
       
      


      ]
    });
    await actionSheet.present();
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
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
                duration : 500 ,
                position: 'bottom'
              });
              setTimeout(() => {
                toast.dismiss();
                this.dismiss
                
              }, 800);
              toast.present();
            });
  
                
          } 


  async presentModal(idd :number  , read :boolean , step:string) {
    const modal = await this.modalController.create({
      backdropDismiss: false,
      component: DetailsoppPage ,
      componentProps: {
        'read': read ,
        'id': idd
      }
    });
    modal.onDidDismiss().then((data) => {
      if(this.listopp.length != 0){
        this.getopp(step); 

      }
      else{
        this.listopp =[]
      }
  });

    return await modal.present();
  }


  getopp(step:string){
    this.oppservice.getoppbystep(step).subscribe((value: any) => {

       this.listopp = value.reverse() ;       
        
    }, error1 => {
     

      this.listopp=[]
    }, () => {
    });

  } 
  sliderChanges() {
    const context = this;
    this.slides.getActiveIndex().then(index => {

      if (index === 0) {
        this.getopp('prospect identifié')
      } 
      if (index === 1) {

        this.getopp('contact effectué')
      }
      if (index === 2) {

        this.getopp('suivi planifié')
      }
      if (index === 3) {

        this.getopp('rendez-vous pris')
      }
      if (index === 4) {

        this.getopp('negociation en cours')
      }

    });
  }

  

  
update(id :number , step:string ,cur:string){  

        this.updated.etape =step ; 
 

         this.oppservice.updateopp(this.updated,id).subscribe((value: any) => {
     

                 this.getopp(cur);  
                 this.loading('opportunity moved to '+step  )


 }, error1 => {
   this.loading('error ! ')

 }, () => {
 });

}



 

   
}
