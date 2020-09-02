import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { OppService } from 'src/app/services/opportunity/opp.service';
import { Opportunity } from 'src/app/models/opp/opp';  
import { Contact } from 'src/app/models/contact/contact';import { ContactService } from 'src/app/services/contact/contact.service';
import { Addoppp } from 'src/app/models/opp/addopp';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform, NavController,LoadingController,ToastController } from '@ionic/angular';


@Component({
  selector: 'app-newopp',
  templateUrl: './newopp.page.html',
  styleUrls: ['./newopp.page.scss'],
})
export class NewoppPage implements OnInit {

  ports: Contact[];
  port: Contact;
  
  opportunityadd = new Addoppp() ; 
  public onLoginForm: FormGroup;


  constructor( private toastCtrl : ToastController,private loadingCtrl : LoadingController,private oppservice:OppService , private contactservice: ContactService  ,private formBuilder: FormBuilder, ){    }

  ngOnInit() {
    this.listprospect(); 

    
    this.onLoginForm = this.formBuilder.group({
      
      'prospect': [null, Validators.compose([
        Validators.required
      ])],
      'nomaffaire': [null, Validators.compose([
        Validators.required
      ])],
      'etape': [null, Validators.compose([
        Validators.required
      ])] ,
      
      'source': [null, Validators.compose([
      ])] 
      ,
      
      'brief': [null, Validators.compose([
      ])],
      
      'montant': [null, Validators.compose([
      ])],
      
      'devise': [null, Validators.compose([
      ])]
      ,
      
      'proba': [null, Validators.compose([
      ])]
      ,
      
      'dateech': [null, Validators.compose([
      ])]
      ,
      
      'societe': [null, Validators.compose([
      ])]
  
  
  
  
  
  
  
    });
  }

  async loading(msg ){
    let loader = await this.loadingCtrl.create({
      duration: 700
    });
            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                
                showCloseButton: true,
                message: msg,
                duration : 700 ,
                position: 'bottom'
              });
  
              toast.present();
            });
  
                
          }

 portChange(event: {
  component: IonicSelectableComponent,
  value: any
}) {
  console.log(this.port.fullname)
}

  
//list

listprospect(){
  this.contactservice.listprospect().subscribe((value: any) => {
    
    this.ports=value.reverse();
   
  }, error1 => {

  }, () => {
  });

}

newopp(){
     
  this.opportunityadd.idref = this.port.id  ; 
   this.opportunityadd.datecreation = new Date(); 

  this.opportunityadd.cprospect = this.port.fullname ; 
  this.opportunityadd.archive ="simple"
 


  
    
   this.oppservice.addopp(this.opportunityadd).subscribe((value: any) => {
      

    this.loading('Opportunity added')

    this.opportunityadd = new Addoppp();
  }, error1 => {

   
    this.loading('error ! ')

    
                  
            
 
   }, () => {
   });
 
 }







  


}
