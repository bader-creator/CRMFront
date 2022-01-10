import { Component, OnInit ,ViewChild } from '@angular/core';
import { Platform, NavController, Config  } from '@ionic/angular';
import { NewoppPage } from '../newopp/newopp.page';
import { ModalController } from '@ionic/angular';
import {  DetailsoppPage  } from '../../crm/detailsopp/detailsopp.page';
import { isNull, isUndefined } from 'util';
import { IonItemSliding } from '@ionic/angular';

import { OppService } from 'src/app/services/opportunity/opp.service';
import { Opportunity } from 'src/app/models/opp/opp';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.page.html',
  styleUrls: ['./archive.page.scss'],
})
export class ArchivePage implements OnInit {
  @ViewChild('dynamicList') dynamicList;
  empty:boolean = false ; 
    newopp = NewoppPage
    listopp:Opportunity[]=[];  
  search:string
    showable(name:string , name2:string ){
      if(isUndefined(name2)){
        return true ; 
      }
      return  name2 === '' || name.toLowerCase().indexOf(name2.toLowerCase()) > -1  ; 
     
     } 
  
  
     go(path:string){
       this.closesitem(); 
       this.nav.navigateRoot(path)
     }
  
  
  
    constructor( public modalController: ModalController ,public nav :NavController , private oppservice:OppService) { }
  
  
    async presentModal(idd :number ,slide :IonItemSliding ,read :boolean) { 


      slide.close()
      const modal = await this.modalController.create({
        backdropDismiss: false,
        component: DetailsoppPage ,
        componentProps: {
          'read':read, 
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
  
    ngOnInit() { 
  
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
      this.oppservice.listarchive().subscribe((value: any) => {
        
        this.listopp=value.reverse();
       this.empty=false
      }, error1 => {
        this.listopp=[]
        this.empty = true 
      }, () => {
      });
  
    }
    delete(id:number){
      this.closesitem(); 
      this.oppservice.deleteopp(id).subscribe((value: any) => {
        this.getallopp(); 
     
       
      }, error1 => {
      }, () => {
      });
  
    }
    
  
  
}
