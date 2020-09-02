import { Component, OnInit } from '@angular/core';
import { Addformation } from 'src/app/models/formation/addformation';
import { Formationservice } from '../services/formation/formation.service'
@Component({
  selector: 'app-newformation',
  templateUrl: './newformation.component.html',
  styleUrls: ['./newformation.component.scss']
})
export class NewformationComponent implements OnInit {

  constructor(private formationservice:Formationservice) { }
     
    newformation = new Addformation(); 
    


  ngOnInit() {
  }
     

  addformation(){

    this.formationservice.addformation(this.newformation).subscribe((value: any) => {
      console.log(value);
      
    }, error1 => {
  
    }, () => {
    });
  
  }

}
