import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Formationservice } from 'src/app/services/formation/formation.service';
import { OppService } from 'src/app/services/opportunity/opp.service';
import { LocalisationPage } from '../pages/localisation/localisation.page';

import {
  NavController,LoadingController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';
  import { Pages } from '../interfaces/pages';

// Modals
import { SearchFilterPage } from '../pages/modal/search-filter/search-filter.page';
import { ImagePage } from '../pages/modal/image/image.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../components/notifications/notifications.component';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  searchKey = '';
  nbrcontact:number
  nbrfor:number
  nbropp:number
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
     user= JSON.parse(localStorage.getItem("currentUser") );
     public appPages: Array<any>;

     constructor(private formationservice:Formationservice,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController, public  modalController:ModalController ,
    public oppservice:OppService , 
    public loadingCtrl:LoadingController,
    private auth : AuthService,private contactservice: ContactService ,
  ) {
      
  

  }

  ngOnInit(){

    
 
    
  }

  ionViewWillEnter() {
    this.countcontact(); 
    this.countformation(); 
    this.countopp(); 
    this.menuCtrl.enable(true);
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Change Location',
      message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();

  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
       


  }

  goToEditProgile() {
    this.navCtrl.navigateRoot('/edit-profile');
  }
       

  async logoutloading (){

    let loader = await this.loadingCtrl.create({
      duration: 500
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateRoot('/');
    });     
  }

  logout() {
    this.auth.logout() ; 
    this.logoutloading();
    
  }
  goto(url:string){
    this.navCtrl.navigateRoot(url);
  }

 

      

  
     countcontact(){
      this.contactservice.countcontact().subscribe((value: any) => {
        
       this.nbrcontact =value ; 
      }, error1 => {
  
      }, () => {
      });
   
    }  

    countopp(){
      this.oppservice.countopp().subscribe((value: any) => {
        
       this.nbropp =value ; 
      }, error1 => {
  
      }, () => {
      });
  
    }  

    async presentModal() {

      const modal = await this.modalController.create({
        backdropDismiss :false ,
      
        component: LocalisationPage ,
       
      });
      modal.onDidDismiss().then((data) => {
      
      });
      
      return await modal.present();
      }
      
     

    countformation(){
      this.formationservice.countformation().subscribe((value: any) => {
        
       this.nbrfor =value ; 
      }, error1 => {
  
      }, () => {
      });
  
    }
}
