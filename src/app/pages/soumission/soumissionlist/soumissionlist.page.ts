import { Component, OnInit } from '@angular/core';
import { SoumissionService } from 'src/app/services/soumission/soumission.service';
import { Soumission  } from 'src/app/models/soumission/soumission';
import { isNull, isUndefined } from 'util';
import { Platform, NavController,LoadingController,ToastController, ModalController, IonList } from '@ionic/angular';
import { SoumdetailsPage } from '../soumdetails/soumdetails.page';


@Component({
  selector: 'app-soumissionlist',
  templateUrl: './soumissionlist.page.html',
  styleUrls: ['./soumissionlist.page.scss'],
})
export class SoumissionlistPage implements OnInit {

     search:string
  async presentModal(idd :number) {

  const modal = await this.modalController.create({
    backdropDismiss :false ,

    component: SoumdetailsPage ,
    componentProps: {
      'id': idd
    }
  });
  modal.onDidDismiss().then((data) => {
    if(this.list.length != 0){
      this.getallsoumission(); 

    }
    else{
      this.list = []
    }
});

  return await modal.present();
}


  empty:boolean=false

  list:Soumission[]=[];  
  
    constructor( private soumservice: SoumissionService ,private modalController: ModalController)  { }
  
    ngOnInit() {
      this.getallsoumission()
    }
     
  
  
    getallsoumission(){
      this.soumservice.listSoumission().subscribe((value: any) => {
        
        this.list=value.reverse();
       
      }, error1 => {
        this.list = []
        this.empty = true
  
      }, () => {
      });
  
    }

    showable(name:string , name2:string ){
      if(isUndefined(name2)){
        return true ; 
      }
      return name===name2 || name2 === '' || name.toLowerCase().indexOf(name2.toLowerCase()) > -1  ; 
     
     }

     doRefresh(event) {
     
      setTimeout(() => {
        event.target.complete();
      }, 500);
    
      this.getallsoumission(); 
    }

}
