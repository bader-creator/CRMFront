import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './user.model'; 
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _htttp: HttpClient) { }

  getusers(){
    
  }
}
