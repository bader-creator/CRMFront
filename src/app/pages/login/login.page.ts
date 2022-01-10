import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { UserLoginDto } from '../../models/User/UserLoginDto';
import { AuthService } from '../../services/auth/auth.service';
import { user } from 'src/app/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;

  username: string;
  password: string;
  error: string;

  userinf = new user();

  aaa: string;

  eye: string = "eye";
  inputtype: string = "password";

  showorhide() {
    this.eye = this.eye === "eye" ? "eye-off" : "eye";
    this.inputtype = this.inputtype === "password" ? "text" : "password";

  }

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private authenticationService: AuthService
  ) {
    this.authenticationService.logout();
  }

  async loading() {

    let loader = await this.loadingCtrl.create({
      duration: 1000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateRoot('/home-results');
    });
  }


  logininfo: UserLoginDto = new UserLoginDto();



  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {

    this.onLoginForm = this.formBuilder.group({
      'username': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }





  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter you email address to send a reset link password.',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                message: 'Email was sended successfully.',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }
// //
  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }

  goToHome() {

    this.navCtrl.navigateRoot('/home-results');
  }


  login() {
    this.authenticationService.login(this.username, this.password)
  }



}
