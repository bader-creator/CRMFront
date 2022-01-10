import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {
  baseUrl,listsoumission,getsoumission,deletesoumission
} from '../../../environments/Config/AppConfig';
import { AddContact } from 'src/app/models/contact/Addcontact';
import { Contact } from 'src/app/models/contact/contact';
import { Addformation } from 'src/app/models/formation/addformation';
import { Formation } from 'src/app/models/formation/formation';
import {AuthService} from '../../services/auth/auth.service';
import { Soumission } from 'src/app/models/Soumission/Soumission';



@Injectable({
  providedIn: 'root'
})
export class SoumissionService {

  constructor(private  http: HttpClient , private auth :AuthService) { }

  
  getSoumission(id:number) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

    const url = baseUrl.url + getsoumission  + "/" +id;
    return this.http.get(url,  {headers : headers});
}



  listSoumission() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

        const url = baseUrl.url + listsoumission;
        return this.http.get(url , {headers : headers});
    } 

   
    delete(id:number) {
      const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

      const url = baseUrl.url + deletesoumission +"/"+id ;
      return this.http.delete(url, {headers : headers});
  }

 
}
