import { Component, OnInit } from '@angular/core';
import { SoumissionService } from 'src/app/services/soumission/soumission.service';
import { Soumission  } from 'src/app/models/soumission/soumission';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  empty:boolean=false

  list:Soumission[]=[];  
  
    constructor( private soumservice: SoumissionService)  { }
  
    ngOnInit() {
      this.getallsoumission()
    }
     
    doRefresh(event) {
     
       setTimeout(() => {
         event.target.complete();
       }, 500);
     
       this.getallsoumission(); 
     }
  
    getallsoumission(){
      this.soumservice.listSoumission().subscribe((value: any) => {
        
        this.list=value.reverse();
       
      }, error1 => {
        this.list = []
        this.empty = true
  
      }, () => {
      });
  
    }
}
