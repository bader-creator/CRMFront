import { Component, OnInit } from '@angular/core';
import { Platform, NavController,LoadingController,ToastController, IonList } from '@ionic/angular';
import { Formationservice } from 'src/app/services/formation/formation.service';
import { Formation } from 'src/app/models/formation/formation';
import { Addformation } from 'src/app/models/formation/addformation';


@Component({
  selector: 'app-listformations',
  templateUrl: './listformations.page.html',
  styleUrls: ['./listformations.page.scss'],
})
export class ListformationsPage implements OnInit {
     addicon="add-circle-outline" 
     col ="red"
     nbformations:number 
  constructor(private formationservice:Formationservice) { }

  ngOnInit() {
   
  } 
  ionViewWillEnter() {
  }

  
  aaa(){
   
this.addicon="add-circle-outline" 
  }

  newicon(){
  
     this.addicon = "add-circle" ; 

  }






}



