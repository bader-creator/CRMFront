import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {
  baseUrl,listallformation,newformation,deleteformation ,updateformation,getformation,countformation
} from '../../../environments/Config/AppConfig';

import { Addformation } from 'src/app/models/formation/addformation';
import { Formation } from 'src/app/models/formation/formation';
import {AuthService} from '../../services/auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class Formationservice {

  constructor(private  http: HttpClient, private auth : AuthService) { }


  listformation() { 
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

        const url = baseUrl.url + listallformation;
        return this.http.get(url ,{headers : headers});
    }
   

countformation(){
  console.log('this.auth.token',this.auth.token)
  const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

  const url = baseUrl.url + countformation;
  return this.http.get(url ,{headers : headers});
}
     
   
addformation(formation:Addformation,iduser) {
  const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });
  const url = baseUrl.url + newformation +'/'+ iduser;
  return this.http.post(url,formation ,{headers : headers});
 } 

        
       getformation(id:number){
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

        const url = baseUrl.url + getformation+"/"+id;
        return this.http.get(url ,{headers : headers});
              
       }





       deleteformation(id:number) {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

        const url = baseUrl.url + deleteformation +"/"+id ;
      return this.http.delete(url,{headers : headers});
  }


  updateformation(formation:Addformation,id:number) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

    /*  let optionRequete = {
        params:new HttpParams().      };*/
      const url = baseUrl.url + updateformation +"/"+id;
      return this.http.post(url,formation,{headers : headers});
  }

}
