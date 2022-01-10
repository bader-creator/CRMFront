import { Component, OnInit } from '@angular/core';
import { Platform, NavController,LoadingController,ToastController } from '@ionic/angular';
import { ContactService } from 'src/app/services/contact/contact.service';
import { AddContact } from 'src/app/models/contact/Addcontact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.page.html',
  styleUrls: ['./newcontact.page.scss'],
})
export class NewcontactPage implements OnInit {
    ttel:string ; 
   public onLoginForm: FormGroup;
   newcontact:AddContact=new AddContact();
  constructor(private navCtrl:NavController ,  private formBuilder: FormBuilder,  public toastCtrl: ToastController,
    public loadingCtrl: LoadingController, private contactservice: ContactService,private storage:Storage ) { }
    addnewphone:boolean = false ;
    phoneicon:string = "add";
    ressoc:boolean = false ; 
    ressocicon:string ="add";
    addnewmail = false ; 
    mailicon ="add"
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
      'fullname': [null, Validators.compose([
        Validators.required
      ])],'mail': [null, Validators.compose([
         
       ])],
       'adresse': [null, Validators.compose([
         
      ])],
      'organisme': [null, Validators.compose([
         
      ])],
      'cadreDeRencontre': [null, Validators.compose([
         
      ])],
      'date': [null, Validators.compose([
         
      ])],
      'fonction': [null, Validators.compose([
         
      ])],
      'pays': [null, Validators.compose([
         
      ])],
      'tel': [null, Validators.compose([
         
      ])],
      'commentaire': [null, Validators.compose([
         
      ])],
      'nature': [null, Validators.compose([
        Validators.required
      ])],
      'tel1': [null, Validators.compose([
      ])],
      'tel2': [null, Validators.compose([
      ])],
      'mail2': [null, Validators.compose([
      ])]
      ,
      'fb': [null, Validators.compose([
      ])]
      ,
      'twitt': [null, Validators.compose([
      ])]
      ,
      'link': [null, Validators.compose([
      ])]
      ,
      'vim': [null, Validators.compose([
      ])]
    });
  }
  addnewphones(){
this.addnewphone === true ? this.addnewphone =false : this.addnewphone =true ; 
this.phoneicon ==="add" ? this.phoneicon ="remove":this.phoneicon ="add"

  } 

  addres(){
   this.ressoc === true ? this.ressoc =false : this.ressoc =true ; 
   this.ressocicon ==="add" ? this.ressocicon ="remove":this.ressocicon ="add"
   
     }
   async loading() {
  let loader = await this.loadingCtrl.create({
    duration: 1000
  });
          loader.present();
          loader.onWillDismiss().then(async l => {
            const toast = await this.toastCtrl.create({
              message: 'contact added ',
              duration : 500 ,
              position: 'bottom'
            });

            toast.present();
          });

              
        }
    
        
        addmail(){
          this.addnewmail === true ? this.addnewmail =false : this.addnewmail =true ; 
this.mailicon ==="add" ? this.mailicon ="remove":this.mailicon ="add"
        }
  
  newcontacts(){
    console.log('this.user',this.user.id)
   this.loading(); 
    this.contactservice.addcontact(this.newcontact,this.user.id).subscribe((value: any) => {
       
         this.newcontact =new AddContact();



    }, error1 => {
  
    }, () => {
    });
  
  }
 

}
