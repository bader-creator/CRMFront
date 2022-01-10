import { Component, OnInit } from '@angular/core';

import { Platform, NavController,LoadingController,ToastController, IonList } from '@ionic/angular';
import { Formationservice } from 'src/app/services/formation/formation.service';
import { Formation } from 'src/app/models/formation/formation';
import { Addformation } from 'src/app/models/formation/addformation';
import { IonItemSliding } from '@ionic/angular';
import {  ViewChild } from '@angular/core';
import { isNull, isUndefined } from 'util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-newformation',
  templateUrl: './newformation.page.html',
  styleUrls: ['./newformation.page.scss'],
})
export class NewformationPage implements OnInit {
  public onLoginForm: FormGroup;


   newformation = new Addformation(); 

  constructor(private formationservice:Formationservice,private storage:Storage ,private formBuilder: FormBuilder, public navctrl : NavController, public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) { }
 
       
    user
  ngOnInit() {
    this.storage.get('currentUser').then((val: any) => {
      console.log('val', val)
      if (val) {
        this.user = val;
        console.log('user', this.user)
      }
    })
    this.onLoginForm = this.formBuilder.group({
      'titre': [null, Validators.compose([
        Validators.required
      ])],'lieu': [null, Validators.compose([
         
       ])],
       'formateur': [null, Validators.compose([
         
      ])],
      'date': [null, Validators.compose([
         
      ])],
      'timebegin': [null, Validators.compose([
         
      ])],
      'timeend': [null, Validators.compose([
         
      ])],
      'commentaire': [null, Validators.compose([
         
      ])]
  
    });
  }
  
  async loading() {
    let loader = await this.loadingCtrl.create({
      duration: 300
    });
            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                message: 'Training added ',
                duration : 100 ,
                position: 'bottom'
              });
  
              toast.present();
            });
  
                
          }
  //add formation 

  newcontact(){
    this.loading(); 
     this.formationservice.addformation(this.newformation,this.user.id).subscribe((value: any) => {
        
          this.newformation =new Addformation();
 
 
 
     }, error1 => {
   
     }, () => {
     });
   
   }

}
