import { Component, OnInit ,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { OppService } from 'src/app/services/opportunity/opp.service';import { Platform, AlertController, NavController,LoadingController,ToastController } from '@ionic/angular';
import { Opportunity } from 'src/app/models/opp/opp';
import { Contact } from 'src/app/models/contact/contact';import { ContactService } from 'src/app/services/contact/contact.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Addoppp } from 'src/app/models/opp/addopp';  
import { isNull, isUndefined } from 'util';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import * as moment from 'moment/moment.js';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-detailsopp',
  templateUrl: './detailsopp.page.html',
  styleUrls: ['./detailsopp.page.scss'],
})
export class DetailsoppPage implements OnInit {

  ports: Contact[];
  port: Contact;
  @Input() id: number;
  @Input() read: boolean;
  alphas: string[]
  
  oppdet = new Opportunity(); 
  updated = new Addoppp() ;

  leave = false 
  newpros:string;
  datecr :string
  
  nomph :string ; 
  dateph:string ; 
  montantph:string ;
  probaph:string ; 
  socph:string ;
  briefph :string ; 

  constructor(private contactservice:ContactService,private alertCtrl :AlertController,private storage:Storage,private composer :EmailComposer,private loadingCtrl:LoadingController,private toastCtrl: ToastController,private modalCtrl :ModalController,private oppservice :OppService ,private actionSheetController :ActionSheetController) { 

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
    this.getallopp()
    this.listprospect(); 

  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
 
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "actions",
      cssClass: 'action-sheets-groups-page',

      buttons: [{
        text: 'Delete',
        cssClass: 'EditionIcon',
        role: 'destructive',
        icon: 'trash',
        handler: () => {


          this.deleteopp()
   }
       } ,
       {
        text: 'edit',
        role: '',
        icon: 'create',
        handler: () => {
          this.read === true ? this.read = false : this.read = true ;     
          this.montantph ="entrez le nom d'affaire" ,
          this.dateph ="entrez la date d'échéance" , 
          this.montantph="entrez le montant"
          this.probaph =" entrez la probabilité "
          this.socph ="nom de la société"
          this.briefph = "brief"
            
                    

          }
       },{
        text: 'Prendre des notes',
        role: '',
        icon: 'book',
        handler: () => {
        
            
                this.newnotes()
          }
       },
       {
        text: 'envoyer un mail',
        role: '',
        icon: 'send',
        handler: () => {
        
            
          this.opengmail()


          }
       },{
        text: 'Uploader des fichiers',
        role: '',
        icon: 'download',
        handler: () => {
          this.alphas = ["1pzenizenpizengnzeipnze,,zeofkozekfkzeopfkpozekfoekpfozekpoz,efzepf","2","3","4"] 
          this.oppdet.comments = this.alphas

            


          }
       },{
        text: 'Commentaires',
        role: '',
        icon: 'clipboard',
        handler: () => {
        
            
          this.newcomment()

          }
       },{
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
   
  nomcol(){
    if(this.canleave()){
      return 'danger'
    }
    return 'black' ; 
  }
 
  updateopp(oppid){

    this.read === true ? this.read = false : this.read = true ;     
      this.leave =true
      this.update(oppid); 
      



  }
  getallopp(){
    this.oppservice.getopportunitybyid(this.id).subscribe((value: any) => {
    console.log('prospect',value['0'].cprospect)
    
    this.oppdet = value['0'] ;
    this.updated = value['0'] ;
    //this.port=this.updated.cprospect
    console.log('this.updated',this.updated)
    //this.oppdet.dateecheance=new Date(this.oppdet.dateecheance).getFullYear()+"/"+"0"+(new Date(this.oppdet.dateecheance).getMonth() + 1)+"/"+new Date(this.oppdet.dateecheance).getDate()
    ///this.updated.dateecheance=new Date(this.oppdet.dateecheance).getFullYear()+"/"+"0"+(new Date(this.oppdet.dateecheance).getMonth() + 1)+"/"+new Date(this.oppdet.dateecheance).getDate()
    this.updated.dateecheance=moment(this.updated.dateecheance).format('YYYY-MM-DD')
    console.log('this.updated.dateecheance',this.updated.dateecheance)
  
   console.log('oppdet',this.oppdet)       

        if(!isUndefined(this.oppdet['0'].datecreation) || !isNull(this.oppdet['0'].datecreation) ){
         this.datecr = this.oppdet['0'].datecreation.toString().substr(0,10)}
     
    }, error1 => {

    }, () => {
    });

  }  

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log(this.port.fullname)
  }
    
  async loading(msg :string) {
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
                
                this.dismiss(); 
              }, 1000);
              toast.present();
            });
  
                
          }
      
     
          async loadingcomnote(msg :string) {
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
                        
                      }, 500);
                      toast.present();
                    });
          
                        
                  }
           

  deleteopp(){
    this.oppservice.deleteopp(this.id).subscribe((value: any) => {
      
       
       this.leave = true  
       this.loading('opportunity deleted')
       
     
    }, error1 => {
      this.leave= true; 
      this.loading('error !  '); 
           



    }, () => {
    });

  }

  //list

listprospect(){
  this.contactservice.listprospect().subscribe((value: any) => {
    
    this.ports=value.reverse();
   
  }, error1 => {

  }, () => {
  });

}  


canleave(){
  return this.leave ===true  || this.updated.nomaffaire ==='' 
}


update(oppid){  

 
   if(isUndefined(this.port) || isNull(this.port)   ){
     this.updated.cprospect = this.oppdet.cprospect
   }
   else{
    this.updated.cprospect = this.port.fullname ; 
    this.updated.idref = this.port.id ; 


   }
   console.log('this.oppdet.id',oppid)
  this.oppservice.updateopp(this.updated,oppid).subscribe((value: any) => {
      
    this.oppdet.cprospect = this.updated.cprospect ;
    this.oppdet.nomaffaire = this.updated.nomaffaire
    this.oppdet.etape = this.updated.etape 
    

    this.loading(' Opportunity updated')
    this.leave =true
  }, error1 => {
    this.loading(' error ! ')
      this.leave =true
  }, () => {
  });

}  

email = {
  to: 'fakhriam017@gmail.com',
  cc: 'fakhriam017@gmail.com',
  bcc: ['fakhriam017@gmail.com'],
  attachments: [
  ],
  subject: 'Opportunity details',
  body:  '<b style="color: blue">Opportunity Details </b> <br>     <img shape="round"  style="width: 40% ; height: 40%;"  src="assets/img/oppav.jfif"/> <ion-label color="dark">montant</ion-label><br>'
  
  
 ,

  isHtml: true

}
opengmail(){
  this.composer.open(this.email);
  this.loading("sent");
}

archiver(){  

 
let archopp = new Addoppp()
archopp.archive ='archive'; 

 this.oppservice.updateopp(archopp,this.oppdet.id).subscribe((value: any) => {
     
   
   

   this.loading(' Opportunity moved to archive')
   this.leave =true
 }, error1 => {
   this.loading(' error ! ')
     this.leave =true
 }, () => {
 });

}


async newnotes() {
  const alert = await this.alertCtrl.create({
    backdropDismiss: false ,
    header: 'ADD Note',
    message: 'Type your Note.',
    inputs: [
      {
        name: 'name2',
        type: 'text',
        placeholder :'enter your new note '
      }],    

      buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
            }
          }, {
            text: 'Add',
            handler: (alertData) => {
              this.updatenotes(alertData.name2) //takes the data 
          }
          }
        ]
});
await alert.present();
}



async newcomment() {
  const alert = await this.alertCtrl.create({
    backdropDismiss:false ,
    header: 'ADD Comment',
    message: 'Type your Comment.',
    
    inputs: [
      {
        name: 'name1',
        type: 'text',
        placeholder :'enter your new comment '
      }],    
     buttons: [
          { 
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
            }
          }, {
            
            text: 'Add',
            handler: (alertData) => { //takes the data 
              console.log(alertData.name1);
              this.updatecomments(alertData.name1) ;
          }
          }
        ]
});
await alert.present();
}

  

updatenotes(note:string){
  

  
this.updated.notes = new Array()
this.updated.notes = this.oppdet.notes || []
this.updated.notes.push(note);
  this.oppservice.updateopp(this.updated,this.oppdet.id).subscribe((value: any) => {
     
    this.loadingcomnote(' note added ')


   

  }, error1 => {
    this.loadingcomnote(' error ! ')
      this.leave =true
  }, () => {
  });
 



}



updatecomments(comment:string){
  
  this.updated.comments = new Array()
this.updated.comments = this.oppdet.comments || []
this.updated.comments.push(comment);
            

  this.oppservice.updateopp(this.updated,this.oppdet.id).subscribe((value: any) => {
     
    this.loadingcomnote(' Comment added  ')

   

  }, error1 => {
    this.loadingcomnote(' error ! ')
      this.leave =true
  }, () => {
  });
 



}

}
