import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {
  baseUrl,listallcontact,newcontact,deletecontact ,updatecontact,getcontact, countcontact ,getprospect
} from '../../../environments/Config/AppConfig';
import { AddContact } from 'src/app/models/contact/Addcontact';
import { Contact } from 'src/app/models/contact/contact';
import { Addformation } from 'src/app/models/formation/addformation';
import { Formation } from 'src/app/models/formation/formation';
import {AuthService} from '../../services/auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private  http: HttpClient , private auth :AuthService) { }

  
  getcontact(id:number) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

    const url = baseUrl.url + getcontact + "/" +id;
    return this.http.get(url,  {headers : headers});
}



  listcontact() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

        const url = baseUrl.url + listallcontact;
        return this.http.get(url , {headers : headers});
    } 

    listprospect() {
      const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });
  
          const url = baseUrl.url + getprospect;
          return this.http.get(url , {headers : headers});
      }

    addcontact(contact:AddContact,iduser) {
      const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

    /*  let optionRequete = {
        params:new HttpParams().      };*/
      const url = baseUrl.url + newcontact + '/' + iduser;
      console.log('url',url)
      return this.http.post(url,contact ,  {headers : headers});
     }


     updatecontact(contact:any,id:number) {
      const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

      /*  let optionRequete = {
          params:new HttpParams().      };*/
        const url = baseUrl.url + updatecontact + "/"+id;
        return this.http.post(url,contact, {headers : headers});
    }


    deletcontact(id:number) {
      const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

      const url = baseUrl.url + deletecontact +"/"+id ;
      return this.http.delete(url, {headers : headers});
  }

  countcontact(){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

    const url = baseUrl.url + countcontact;
    return this.http.get(url, {headers : headers});
  }
}
