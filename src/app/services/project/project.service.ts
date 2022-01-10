import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {
  baseUrl,listproject,getproject,deleteproject , updateadress
} from '../../../environments/Config/AppConfig';
import { AddContact } from 'src/app/models/contact/Addcontact';
import { Contact } from 'src/app/models/contact/contact';
import { Addformation } from 'src/app/models/formation/addformation';
import { Formation } from 'src/app/models/formation/formation';
import {AuthService} from '../../services/auth/auth.service';
import { Project } from 'src/app/models/project/project';



@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private  http: HttpClient , private auth :AuthService) { }

  
  getproject(id:number) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

    const url = baseUrl.url + getproject + "/" +id;
    return this.http.get(url,  {headers : headers});
}



  listproject() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

        const url = baseUrl.url + listproject;
        return this.http.get(url , {headers : headers});
    } 

   
    delete(id:number) {
      const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

      const url = baseUrl.url + deleteproject +"/"+id ;
      return this.http.delete(url, {headers : headers});
  } 


  update(proj:Project,id:number) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

    /*  let optionRequete = {
        params:new HttpParams().      };*/
      const url = baseUrl.url + updateadress +"/"+id;
      return this.http.post(url,proj,{headers : headers});
  }

 
}
