import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { secureuser } from 'src/app/user.model';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FCM } from 'plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM';
import {baseUrl,settoken} from '../../../environments/Config/AppConfig';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;
  username: string
  password: string


  constructor(private http: HttpClient,private http2:HTTP,private helper: JwtHelperService,private fcm:FCM,private nav:NavController, private loadingController: LoadingController,private storage:Storage, private toastController: ToastController) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }


  loading;
  async loadingFn() {
    this.loading = await this.loadingController.create({ message: "Chargement ..." });
    this.loading.present();
  }
  async dismissFn() {
    await this.loading.dismiss();
  }

  login(username: string, password: string) {
    this.loadingFn();
    
    let data={"username":username,"password":password}
    data.username = username;
    data.password = password;

    this.http2.post('http://vps662142.ovh.net/CRMBack-master/public/api/login_check', data, {"Content-Type": "application/json"}).then((response: any)=>{
      console.log('respose',response)
      let resultat = JSON.parse(response.data)
      console.log('resultat',resultat)

       this.token = resultat.data.token;

        let result={"id":null,"username":username,"email":null,"token":this.token}

        result.id=resultat.id;

        result.email=resultat.email;

        result.username=resultat.name;

        console.log('result',result)

        this.storage.set('currentUser', result)
        localStorage.setItem('currentUser', JSON.stringify({ username: username, token: this.token }));

        this.fcm.getToken().then(data => {
          console.log("mytokenfirebase: ", data);
          console.log('currentUser', result.id)
          this.setTokenFireBase(result.id, data);
        })
        this.dismissFn();
        this.presentToast("Authentification effectuée avec succès", "success");
        this.nav.navigateForward(`/home-results`);

     
    }).catch(error => {
      console.log(error);
       this.dismissFn();
      this.presentToast('le nom d\'utilisateur ou mot de passe est incorrect', "danger");

    });
  }

  public setTokenFireBase(id, token = null) {
    let data = { id: id, token: token }
    console.log("data", data);
    const url = baseUrl.url + settoken;

    this.http2.post(url, data, {
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.token,
    });
  }

  user
  checkToken() {
    this.storage.get('currentUser').then((val) => {
      console.log('heloootoken')
      if(val){
        console.log('Your token is', val.token);
        let decoded = this.helper.decodeToken(val.token);
        let isExpired = this.helper.isTokenExpired(val.token);
        console.log("decode", decoded);
        if (!isExpired) {
          this.token = val.token;
          console.log("decode", decoded);
          console.log('tokentoken', this.token)
          this.nav.navigateRoot(`/home-results`);
        } else {
          this.storage.remove('currentUser');
          this.nav.navigateRoot(``);
        }
      }else{
        console.log('helooologin')
        this.nav.navigateRoot(``);
      }
      
    })
  }

  async presentToast(msg: string, color: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color: color,
    });
    toast.present();
  }


  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  private handelError(error: Response) {

    return Observable.throw(error.json() || 'server error');

  }



}
