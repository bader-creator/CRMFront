import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, LoadingController } from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
import { User } from 'src/app/models/User/User';
import { usertoreg } from 'src/app/models/User/User';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;
    
  eye :string ="eye"; 
  inputtype : string = "password";

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public toastCtrl: ToastController

    
  ) { }

  logininfo: usertoreg = new usertoreg();

  showorhide(){
    this.eye = this.eye=== "eye"?"eye-off":"eye"; 
    this.inputtype = this.inputtype=== "password"?"text":"password"; 

}
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'username': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async signUp() {
    this.authService.registeruser(this.logininfo).subscribe((value: any) => {


 }, error1 => {
this.loading(); 

 }, () => {

  this.loadingerror(); 
 });


  }
             
  async loading() {
    let loader = await this.loadingCtrl.create({
      duration: 1500
    });
            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                message: 'account created successfully !',
                duration : 2500 ,
                position: 'bottom'
              });

              toast.present();
            });

                
          }  

          async loadingerror() {
            let loader = await this.loadingCtrl.create({
              duration: 1500
            });
                    loader.present();
                    loader.onWillDismiss().then(async l => {
                      const toast = await this.toastCtrl.create({
                        
                        message: 'user exists already !',
                        duration : 2500 ,
                        position: 'bottom'
                      });
        
                      toast.present();
                    });
        
                        
                  } 
    
    goToLogin() {
    this.navCtrl.navigateRoot('/');
  }
  }

  // // //
  

