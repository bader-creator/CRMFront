import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation/formation';
import { Addformation } from 'src/app/models/formation/addformation';
import { Formationservice } from '../services/formation/formation.service'
import { listallformation } from 'src/environments/Config/AppConfig';
@Component({
  selector: 'app-allformation',
  templateUrl: './allformation.component.html',
  styleUrls: ['./allformation.component.scss']
})
export class AllformationComponent implements OnInit {

  constructor(private formationservice :Formationservice ) { }
       
  listformation:Array<Formation> ;   
 
  ngOnInit() {
  this.getallformation(); 
  }

     
  delete(id:number){
    this.formationservice.deleteformation(id).subscribe((value: any) => {
      
      this.getallformation();
      
    }, error1 => {
    
    }, () => {
    });
  }

  
  getallformation(){
    this.formationservice.listformation().subscribe((value: any) => {
      this.listformation=value;
      
    }, error1 => {

    }, () => {
    });

  }


  

}
