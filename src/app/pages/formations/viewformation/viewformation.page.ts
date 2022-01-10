import { Component, OnInit ,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Platform, NavController,LoadingController,ToastController,ModalController ,  IonList } from '@ionic/angular';
import { Formationservice } from 'src/app/services/formation/formation.service';
import { Formation } from 'src/app/models/formation/formation';
import { Addformation } from 'src/app/models/formation/addformation';
import { IonItemSliding } from '@ionic/angular';
import {  ViewChild } from '@angular/core';
import { isNull, isUndefined } from 'util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-viewformation',
  templateUrl: './viewformation.page.html',
  styleUrls: ['./viewformation.page.scss'],
})
export class ViewformationPage implements OnInit {


  @Input() id: number;

  detformation = new Formation(); 
  idr:number = this.id ; 
  read :boolean =false ; 
  updated = new Addformation() ;  
  trainerplaceh:string ; 
  trainingaddressh:string ;
  trainingdateplaceh:string ; 
  trainigbeginplaceh:string ;
  trainigendplaceh:string ;
  trcomments:string ;
  trainingendplaceh:string
  leave = false 
  showmenu = true ; 
  constructor(public activatedRoute:ActivatedRoute, public toastCtrl: ToastController, public modalCtrl :ModalController ,
    public loadingCtrl: LoadingController, private actionSheetController :ActionSheetController ,
    private formationservice:Formationservice ,private navCtrl:NavController ,private router:Router,private storage:Storage) {  }


    user
    ngOnInit() {
      this.storage.get('currentUser').then((val: any) => {
        console.log('val', val)
        if (val) {
          this.user = val;
          console.log('user', this.user)
        }
      })
      this.getformation(); 
     
    }

  


   async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: this.detformation.titre,
      cssClass: 'action-sheets-groups-page',

      buttons: [{
        text: 'Delete',
        cssClass: 'EditionIcon',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.leave === true ? this.leave = false : this.leave = true ;     

               this.delete(this.id) ;         }
       } ,
       {
        text: 'edit',
        role: '',
        icon: 'create',
        handler: () => {
            this.read === true ? this.read = false : this.read = true ;     
            this.trainerplaceh =  "trainer fullname" ;    
            this.trainingaddressh = "training address" ; 
            this.trainingdateplaceh = "training date" ; 
            this.trainigbeginplaceh = "start time"; 
            this.trainigendplaceh = "end time"; 
            this.trcomments = "add comments"
            


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



  close(){
 this.modalCtrl.dismiss({
      'dismissed': true
    });


   
    
  }  



  updateformation(){
 this.update()
 this.leave= true ; 
  this.getformation(); 
    this.read === true ? this.read = false : this.read = true ; 
    this.trainigbeginplaceh = this.trainigendplaceh = this.trainerplaceh =this.trainingdateplaceh =this.trcomments = this.trainingaddressh =""; 

          
  }

  
 //loading

 async loading(msg : string ) {

  let loader = await this.loadingCtrl.create({
    duration: 500
  });
          loader.present();
          loader.onWillDismiss().then(async l => {
            const toast = await this.toastCtrl.create({
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
   
        canleave(){
          return this.leave ===true  || this.updated.titre ==='' 
        }
        
    
  //delete

  delete(id:number){
    this.loading('formation deleted'); 
    
    this.formationservice.deleteformation(id).subscribe((value: any) => {
     
        
    }, error1 => {
      this.loading('error ! '); 
    }, () => {
    });
       
   
  
  }


  getformation(){
    this.formationservice.getformation(this.id).subscribe((value: any) => {
      this.detformation=value['0'];
      this.updated=value['0'];
      console.log('this.updated',this.updated)
      console.log('this.detformation',this.detformation)
      
    }, error1 => {

    }, () => {
    });

  }

  nomcol(){
    if(this.canleave()){
      return 'danger'
    }
    return 'black' ; 
  }
   
  update(){   
    this.loading('formation updated '); 
            this.formationservice.updateformation(this.updated,this.id).subscribe((value: any) => {

            }, error1 => {
          
            }, () => {
            });
          
          }
   

}
