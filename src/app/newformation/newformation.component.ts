import { Component, OnInit } from '@angular/core';
import { Addformation } from 'src/app/models/formation/addformation';
import { Formationservice } from '../services/formation/formation.service'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-newformation',
  templateUrl: './newformation.component.html',
  styleUrls: ['./newformation.component.scss']
})
export class NewformationComponent implements OnInit {

  constructor(private formationservice:Formationservice,private storage:Storage) { }
     
    newformation = new Addformation(); 
    

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
     

  addformation(){

    this.formationservice.addformation(this.newformation,this.user.id).subscribe((value: any) => {
      console.log(value);
      
    }, error1 => {
  
    }, () => {
    });
  
  }

}
