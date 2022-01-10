import { Component, OnInit } from '@angular/core';
import { ModalController ,NavController } from '@ionic/angular';
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  }; 

  conbutt = true;  
  showallformation(){
      this.conbutt= false ; 
     
  } 
  showformation(){
    this.conbutt= true ; 
   
}

  constructor( private navctrl: NavController) { }

  ngOnInit() {
  }

  closeModal() {
    this.navctrl.navigateRoot('/home-results');
  }


}
