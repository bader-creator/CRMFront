import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/app/models/project/project';
import { Component, OnInit } from '@angular/core';
import { SoumissionService } from 'src/app/services/soumission/soumission.service';
import { Soumission  } from 'src/app/models/soumission/soumission';
import { isNull, isUndefined } from 'util';
import { Platform, NavController,LoadingController,ToastController, ModalController, IonList, AlertController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';
import { LocalPage } from '../local/local.page';
import { projection } from '@angular/core/src/render3';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
search:string
  showable(name:string , name2:string ){
    if(isUndefined(name2)){
      return true ; 
    }
    return name===name2 || name2 === '' || name.toLowerCase().indexOf(name2.toLowerCase()) > -1  ; 
   
   }
empty:boolean=false
updated  =  new Project()
listproject:Project[]=[];  

  constructor( private projservice: ProjectService  ,private modalController: ModalController , private alertCtrl:AlertController, private toastCtrl:ToastController)  { }

  ngOnInit() {
    this.getallproject()
  } 
  
  async toastpop(){
    const toast = await this.toastCtrl.create({
                
      showCloseButton: true,
      message: 'adresse is undefined ! ',
      duration : 500 ,
      position: 'bottom'
      });

      toast.present();
  }


  


  async addadress(idd ,place , title) {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false ,
      header: 'Address is not yet set',
      message: 'Type  project address',
      inputs: [
        {
          name: 'name2',
          type: 'text',
          placeholder :'enter Adresse'
        }],    
  
        buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                this.toastpop();
              }
            }, {
              text: 'Add',
              handler: (alertData) => { 
                  
                if(isUndefined(alertData.name2) ||isNull(alertData) || alertData.name2 === ''){
                  this.toastpop()
                } 
                else{
                  this.updated.adresse =  alertData.name2

                this.update(this.updated, idd) 

                this.getlocal(place,title)
                  
                }
                
            }
            }
          ]
  });
  await alert.present();
  }


  async presentModal(idd :number) {

    const modal = await this.modalController.create({
      backdropDismiss :false ,
  
      component: DetailsPage ,
      componentProps: {
        'id': idd
      }
    });
    modal.onDidDismiss().then((data) => {
      if(this.listproject.length != 0){
        this.getallproject(); 
  
      }
      else{
        this.listproject = []
      }
  });
  
    return await modal.present();
  }
    

  async showlocalisation(place:string ,title :string , idproj:number) {  
   
    if( isNull(place) || isUndefined(place) || place ==='') {
         

        
          this.addadress(idproj ,place , title);
        
      
  


       
    }


     else { 


      this.getlocal(place,title)

    
}
  }
     


  async getlocal(place , title){
    const modal = await this.modalController.create({
      backdropDismiss :false ,
  
      component: LocalPage ,
      componentProps: {
        'city': place ,
        'name' : title
      }
    });
    modal.onDidDismiss().then((data) => {
      
  });
  
    return await modal.present(); 
  }

  doRefresh(event) {
   
     setTimeout(() => {
       event.target.complete();
     }, 500);
   
     this.getallproject(); 
   }


  getallproject(){
    this.projservice.listproject().subscribe((value: any) => {
      
      this.listproject=value.reverse();
     
    }, error1 => {
      this.listproject = []
      this.empty = true

    }, () => {
    });

  }  

  update(project, idd){
    this.projservice.update(project, idd).subscribe((value: any) => {
      
      this.getallproject();
     
    }, error1 => {
 

    }, () => {
    });

  } 
  

  

}
