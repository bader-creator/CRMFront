import { Component, OnInit } from '@angular/core';
import { NavController , ModalController} from '@ionic/angular';
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';

@Component({
  selector: 'popmenu',
  templateUrl: './popmenu.component.html',
  styleUrls: ['./popmenu.component.scss']
})
export class PopmenuComponent implements OnInit {
  openMenu: Boolean = false;

  constructor(public navCtrl: NavController ,     public modalCtrl: ModalController,
    ) { }
  async contact() {

    this.navCtrl.navigateRoot('/contact');

  }
  gotoopp(){
     this.navCtrl.navigateRoot('/oport')

  }
  async formation() {

    this.navCtrl.navigateRoot('/formation');

  }
  
  ngOnInit() {
  }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

}
