import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {
  baseUrl,listopp ,updateopp,addnewopp,deleteopp ,archivelist ,getbystep , getoppbyid , archiver ,countopp, listusers
} from '../../../environments/Config/AppConfig';
import {AuthService} from '../../services/auth/auth.service';

import { Opportunity } from 'src/app/models/opp/opp';
import { Addoppp } from 'src/app/models/opp/addopp';  
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class OppService { 



  constructor(private  http: HttpClient , private auth :AuthService,public toastController: ToastController) { }




  listopp() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

        const url = baseUrl.url + listopp;
        return this.http.get(url , {headers : headers});
    } 

    getoppbystep(step :string){
      const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

        const url = baseUrl.url  + getbystep  +"/"+ step;
        return this.http.get(url , {headers : headers});
         
    } 

    getopportunitybyid(id :number){
      const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

        const url = baseUrl.url  + getoppbyid  +"/"+ id;
        return this.http.get(url , {headers : headers});
         
    }
    reaffecteropp(idopp,iduser){
      console.log('idopp',idopp)
      const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

        let opp={"idopp":idopp,"iduser":iduser}
        const url = baseUrl.url + 'api/opportunity/affecteropp' ;
        return this.http.post(url,opp, {headers : headers});
    }

    listarchive() {
      const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });
  
          const url = baseUrl.url + archivelist;
          return this.http.get(url , {headers : headers});
      } 

      getlistUsers(){
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });
  
        const url = baseUrl.url + listusers;
        return this.http.get(url , {headers : headers});
      }
      countopp() {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });
    
            const url = baseUrl.url + countopp;
            return this.http.get(url , {headers : headers});
        }


    addopp(opp:Addoppp,iduser) {
      const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

    /*  let optionRequete = {
        params:new HttpParams().      };*/
      const url = baseUrl.url + addnewopp +'/'+ iduser;
      return this.http.post(url,opp ,  {headers : headers});
     }


     updateopp(opp:Addoppp,id:number) {
      const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

      /*  let optionRequete = {
          params:new HttpParams().      };*/
        const url = baseUrl.url + updateopp + "/"+id;
        return this.http.post(url,opp, {headers : headers});
    }


    deleteopp(id:number) {
      const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token });

      const url = baseUrl.url + deleteopp +"/"+id ;
      return this.http.delete(url, {headers : headers});
  } 
  
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  
}
