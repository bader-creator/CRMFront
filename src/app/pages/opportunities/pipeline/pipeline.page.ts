import { Component, OnInit ,ViewChild } from '@angular/core';
import { Platform, NavController, Config ,IonNav ,LoadingController ,ToastController, AlertController} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { isNull, isUndefined  } from 'util';
import { IonSlides } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Addoppp } from 'src/app/models/opp/addopp';  
import {  DetailsoppPage  } from '../../crm/detailsopp/detailsopp.page';
import { Storage } from '@ionic/storage';

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




  constructor(private oppservice:OppService ,private storage:Storage,public toastController: ToastController,public alertController: AlertController, private loadingCtrl:LoadingController, private toastCtrl :ToastController ,private modalController :ModalController ,private actionSheetController :ActionSheetController) { }
  @ViewChild(IonSlides) slides: IonSlides;
  etatsOfOpportunity=["Prise de rendez vous","Présentation du produit","Démo live","POC","Proposition budgétaire","AMI","AO","Contrat","Perdu"]

  ngOnInit() {
    this.etatsOfOpportunity
    this.getopp('Prise de rendez vous')
    this.listUsers()
    this.storage.get('currentUser').then((val: any) => {
      console.log('val', val)
      if (val) {
        this.user = val;
        console.log('user', this.user)
      }
    })
  }
  user 
  async presentActionSheet(idopp:number  ,curstep:string,user:number) {


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
        text: 'Affecter',
        cssClass: 'EditionIcon',
        icon: 'arrow-forward',
        handler: () => {

          this.Affecter(idopp,user)


          }
       } ,
      
       {
        text: 'Move to '+this.etatsOfOpportunity['0'],
        cssClass: 'EditionIcon',
        icon: 'arrow-forward',
        handler: () => {

          this.update(idopp,this.etatsOfOpportunity['0'],curstep)


                 }
       } ,
       
       {
        text: 'Move to '+this.etatsOfOpportunity['1'],
        cssClass: 'EditionIcon',
        icon: 'arrow-forward',
        handler: () => {

          this.update(idopp,this.etatsOfOpportunity['1'],curstep)


                 }
       } ,
       {
        text: 'Move to '+this.etatsOfOpportunity['2'],
        cssClass: 'EditionIcon',
        icon: 'arrow-forward',
        handler: () => {

          this.update(idopp,this.etatsOfOpportunity['2'],curstep)


                 }
       } ,
       {
        text: 'Move to '+this.etatsOfOpportunity['3'],
        cssClass: 'EditionIcon',
        icon: 'arrow-forward',
        handler: () => {

          this.update(idopp,this.etatsOfOpportunity['3'],curstep)


                 }
       } ,
       {
        text: 'Move to '+this.etatsOfOpportunity['4'],
        cssClass: 'EditionIcon',
        icon: 'arrow-forward',
        handler: () => {

          this.update(idopp,this.etatsOfOpportunity['4'],curstep)


                 }
       } ,
       {
        text: 'Move to '+this.etatsOfOpportunity['5'],
        cssClass: 'EditionIcon',
        icon: 'arrow-forward',
        handler: () => {

          this.update(idopp,this.etatsOfOpportunity['5'],curstep)


                 }
       } ,
       {
        text: 'Move to '+this.etatsOfOpportunity['6'],
        cssClass: 'EditionIcon',
        icon: 'arrow-forward',
        handler: () => {

          this.update(idopp,this.etatsOfOpportunity['6'],curstep)


                 }
       } ,
       {
        text: 'Move to '+this.etatsOfOpportunity['7'],
        cssClass: 'EditionIcon',
        icon: 'arrow-forward',
        handler: () => {

          this.update(idopp,this.etatsOfOpportunity['7'],curstep)


                 }
       } ,
       {
        text: 'Move to '+this.etatsOfOpportunity['8'],
        cssClass: 'EditionIcon',
        icon: 'arrow-forward',
        handler: () => {

          this.update(idopp,this.etatsOfOpportunity['8'],curstep)


                 }
       } ,
      
       
      


      ]
    });
    await actionSheet.present();

  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  

  async Affecter(idopp,createur) {
    let inputs=[]

    this.listusers.forEach(element => {
      inputs.push({
        type: "radio",
        label: element.username,
        value: element.id,
     
      })
      
    });

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Affecter une opportunité',
      inputs,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: iduser  =>  {
            console.log('iduser',iduser)
            this.oppservice.reaffecteropp(idopp,iduser).subscribe((data) => {
              console.log('data',data)
              this.oppservice.presentToast("Opportunité affectée");
            })
          }
        }
      ]
    });

    await alert.present();
  }
  listusers
  listUsers(){
    this.oppservice.getlistUsers().subscribe((value: any) => {

      this.listusers = value.reverse() ;       
         console.log('this.listusers',this.listusers)
   }, error1 => {

   }, () => {
   });
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
          console.log('this.listopp',this.listopp)
    }, error1 => {
     

      this.listopp=[]
    }, () => {
    });

  } 
  sliderChanges() {
    const context = this;
    this.slides.getActiveIndex().then(index => {

      if (index === 0) {
        this.getopp('Prise de rendez vous')
      } 
      if (index === 1) {

        this.getopp('Présentation du produit')
      }
      if (index === 2) {

        this.getopp('Démo live')
      }
      if (index === 3) {

        this.getopp('POC')
      }
      if (index === 4) {

        this.getopp('Proposition budgétaire')
      }
      if (index === 5) {

        this.getopp('AMI')
      }
      if (index === 6) {

        this.getopp('AO')
      }
      if (index === 7) {

        this.getopp('Contrat')
      }
      if (index === 8) {

        this.getopp('Perdu')
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
