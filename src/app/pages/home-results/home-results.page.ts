import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Formationservice } from 'src/app/services/formation/formation.service';
import { OppService } from 'src/app/services/opportunity/opp.service';
import { LocalisationPage } from '../localisation/localisation.page';

import {
  NavController, LoadingController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController
} from '@ionic/angular';
import { Pages } from '../../interfaces/pages';
import { Storage } from '@ionic/storage';

// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { ImagePage } from './../modal/image/image.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';
@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage implements OnInit {
  searchKey = '';
  nbrcontact: number
  nbrfor: number
  nbropp: number
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';


  public appPages: Array<any>;

  constructor(private formationservice: Formationservice,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController, public modalController: ModalController,
    public oppservice: OppService,
    public loadingCtrl: LoadingController,
    private auth: AuthService, private contactservice: ContactService,
    private storage: Storage
  ) {



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
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  async searchFilter() {
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

  async notifications() {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,

      animated: true,
      showBackdrop: true
    });
    return await popover.present();



  }

  goToEditProgile() {
    this.navCtrl.navigateRoot('/edit-profile');
  }


  async logoutloading() {

    let loader = await this.loadingCtrl.create({
      duration: 500
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateRoot('/');
    });
  }

  logout() {
    this.auth.logout();
    this.logoutloading();

  }
  goto(url: string) {
    console.log('url',url)
    this.navCtrl.navigateRoot(url);
  }






  countcontact() {
    this.contactservice.countcontact().subscribe((value: any) => {

      this.nbrcontact = value;
    }, error1 => {

    }, () => {
    });

  }

  countopp() {
    this.oppservice.countopp().subscribe((value: any) => {

      this.nbropp = value;
    }, error1 => {

    }, () => {
    });

  }

  async presentModal() {

    const modal = await this.modalController.create({
      backdropDismiss: false,

      component: LocalisationPage,

    });
    modal.onDidDismiss().then((data) => {

    });

    return await modal.present();
  }



  countformation() {
    this.formationservice.countformation().subscribe((value: any) => {

      this.nbrfor = value;
    }, error1 => {

    }, () => {
    });

  }



}
