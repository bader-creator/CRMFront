import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Contact } from 'src/app/models/contact/contact';
import { AddContact } from 'src/app/models/contact/Addcontact';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-allcontact',
  templateUrl: './allcontact.component.html',
  styleUrls: ['./allcontact.component.scss']
})
export class AllcontactComponent implements OnInit {
  


  constructor(    private contactservice: ContactService
    ) { }

    lisctcontact:Array<Contact>;
    newcontact:AddContact=new AddContact();
  


  ngOnInit() {
  this.getallcontact();
  }
  
  delete(id:number , item:IonItemSliding){
    this.contactservice.deletcontact(id).subscribe((value: any) => {
      
      this.getallcontact();
      
    }, error1 => {
    
    }, () => {
    });

    item.close(); 
    
      }

              
             
        

      update(id:number){  
/*
           this.newcontact.fullname="fakhri" ; 
           this.newcontact.adresse="fakhri" ; 
           this.newcontact.tel=212 ; 
           this.newcontact.pays="fakhri" ; 
           this.newcontact.organisme="fakhri" ; 
           this.newcontact.fonction="fakhri" ; 
           this.newcontact.mail="fakhri" ; 
           this.newcontact.commentaire="fakhrazefaefi azr azr azr " ; 
           this.newcontact.dateDeNaissance= new Date; 
           this.newcontact.natureDeContact="fakhri" ; 
           this.newcontact.cadreDeRencontre="fakhri" ; 
*/

        this.contactservice.updatecontact(this.newcontact,id).subscribe((value: any) => {
          this.getallcontact();    
        }, error1 => {
      
        }, () => {
        });
      
      }

  getallcontact(){
    this.contactservice.listcontact().subscribe((value: any) => {
      this.lisctcontact=value;
      
    }, error1 => {

    }, () => {
    });

  }

}
