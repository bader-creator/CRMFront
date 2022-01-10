import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Contact } from 'src/app/models/contact/contact';
import { AddContact } from 'src/app/models/contact/Addcontact';
import { Platform, NavController,LoadingController,ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.page.html',
  styleUrls: ['./editcontact.page.scss'],
})
export class EditcontactPage implements OnInit {
   public onLoginForm: FormGroup;

  idr:number 
  contactrec = new Contact(); 
  
  updated = new AddContact() ; 



  constructor(public activatedRoute:ActivatedRoute,private formBuilder: FormBuilder,private navCtrl:NavController ,private contactservice: ContactService,public loadingCtrl: LoadingController, private toastCtrl:ToastController) {this.activatedRoute.params.subscribe(params => {
    this.idr = params['id'] }) }
  
  ngOnInit() {

   this.onLoginForm = this.formBuilder.group({
      'fullname': [null, Validators.compose([
        Validators.required
      ])],'mail': [null, Validators.compose([
         
       ])],
       'adresse': [null, Validators.compose([
         
      ])],
      'organisme': [null, Validators.compose([
         
      ])],
      'cadreDeRencontre': [null, Validators.compose([
         
      ])],
      'date': [null, Validators.compose([
         
      ])],
      'fonction': [null, Validators.compose([
         
      ])],
      'pays': [null, Validators.compose([
         
      ])],
      'tel': [null, Validators.compose([
         
      ])],
      'commentaire': [null, Validators.compose([
         
      ])],
      'nature': [null, Validators.compose([
        Validators.required
      ])]
    });

    this.getcontact() ; 
  }
   
    /*
  countryData  :string[] = [
     
        "Afghanistan" ,
    
      
         "Albania"    ,
      
      
        
         "Algeria" ,
      
      
      
         "American Samoa"
      ,
      
        
         "Andorra"
      ,
      
        
         "Angola"
      ,
      
         "Anguilla"
      ,
      
         "Antarctica"
      ,
      
         "Antigua and Barbuda"
      ,
      
        
         "Argentina"
      ,
      
         "Armenia"
      ,
      
         "Aruba"
      ,
      
         "Australia"
      ,
      
         "Austria"
      ,
      
         "Azerbaijan"
      ,
      
         "Bahamas"
      ,
      
         "Bahrain"
      ,
      
         "Bangladesh"
      ,
      
         "Barbados"
      ,
      
       
         "Belarus"
      ,
      
        
         "Belgium"
      ,
      
        
         "Belize"
      ,
      
        
         "Benin"
      ,
      
        
         "Bermuda"
      ,
      
        
         "Bhutan"
      ,
      
        
         "Bolivia"
      ,
      
        
         "Bosnia and Herzegovina"
      ,
      
        
         "Botswana"
      ,
      
        
         "Bouvet Island"
      ,
      
        
         "Brazil"
      ,
      
        
         "British Indian Ocean Territories"
      ,
      
        
         "Brunei Darussalam"
      ,
      
        
         "Bulgaria"
      ,
      
        
         "Burkina Faso"
      ,
      
        
         "Burundi"
      ,
      
        
         "Cambodia"
      ,
      
        
         "Cameroon"
      ,
      
        
         "Canada"
      ,
      
        
         "Cape Verde"
      ,
      
      
         "Cayman Islands"
      ,
      
       
         "Central African Republic"
      ,
      
        
         "Chad"
      ,
      
        
         "Chile"
      ,
      
        
         "China, People's Republic of"
      ,
      
        
         "Christmas Island"
      ,
      
        
         "Cocos Islands"
      ,
      
        
         "Colombia"
      ,
      
        
         "Comoros"
      ,
      
        
         "Congo"
      ,
      
        
         "Cook Islands"
      ,
      
        
         "Costa Rica"
      ,
      
        
         "Cote D'ivoire"
      ,
      
        
         "Croatia"
      ,
      
        
         "Cuba"
      ,
      
        
         "Cyprus"
      ,
      
        
         "Czech Republic"
      ,
      
        
         "Denmark"
      ,
    
        
         "Djibouti"
      ,
      
        
         "Dominica"
      ,
      
        
         "Dominican Republic"
      ,
      
        
         "East Timor"
      ,
      
        
         "Ecuador"
      ,
      
        
         "Egypt"
      ,
      
        
         "El Salvador"
      ,
      
        
         "Equatorial Guinea"
      ,
      
        
         "Eritrea"
      ,
      
        
         "Estonia"
      ,
      
        
         "Ethiopia"
      ,
      
        
         "Falkland Islands"
      ,
      
        
         "Faroe Islands"
      ,
      
     
         "Fiji"
      ,
      
        
         "Finland"
      ,
      
        
         "France"
      ,
      
    
         "France, Metropolitan"
      ,
      
    
         "French Guiana"
      ,
      
        
         "French Polynesia"
      ,
      
    
         "French Southern Territories"
      ,
      
    
         "FYROM"
      ,
      
    
         "Gabon"
      ,
      
        
         "Gambia"
      ,
      
        
         "Georgia"
      ,
      
        
         "Germany"
      ,
      
        
         "Ghana"
      ,
      
        
         "Gibraltar"
      ,
    
        
         "Greece"
      ,
      
        
         "Greenland"
      ,
      
        
         "Grenada"
      
      
        ,
         "Guadeloupe"
      ,
      
        
         "Guam"
      ,
      
        
         "Guatemala"
      ,
      
        
         "Guinea"
      ,
      
        
         "Guinea-Bissau"
      ,
      
        
         "Guyana"
      ,
      
        
         "Haiti"
      ,
      
       
         "Heard Island And Mcdonald Islands"
      ,
      
        
         "Honduras"
      ,
      
        
         "Hong Kong"
      ,
      
        
         "Hungary"
      ,
      
        
         "Iceland"
      ,
      
        
         "India"
      ,
      
        
         "Indonesia"
      ,
      
        
         "Iran"
      ,
      
      
         "Iraq"
      ,
      
        
         "Ireland"
      ,
      
        
         "Israel"
      ,
      
        
         "Italy"
      ,
      
        
         "Jamaica"
      ,
      
        
         "Japan"
      ,
      
        
         "Jordan"
      ,
      
        
         "Kazakhstan"
      ,
      
        
         "Kenya"
      ,
      
        
         "Kiribati"
      ,
      
        
         "North Korea"
      ,
      
        
         "South Korea"
      ,
      
        
         "Kuwait"
      ,
      
        
         "Kyrgyzstan"
      ,
      
        
         "Lao Peoples Democratic Republic"
      ,
      
        
         "Latvia"
      ,
      
         "Lebanon"
      ,
      
        
         "Lesotho"
      ,
      
        
         "Liberia"
      ,
      
        
         "Libyan Arab Jamahiriya"
      ,
      
        
         "Liechtenstein"
      ,
      
        
         "Lithuania"
      ,
      
        
         "Luxembourg"
      ,
      
        
         "Macau"
      ,
      
        
         "Madagascar"
      ,
      
        
         "Malawi"
      ,
      
        
         "Malaysia"
      ,
      
      
         "Maldives"
      ,
      
        
         "Mali"
      ,
      
         "Malta"
      ,
      
        
         "Marshall Islands"
      ,
      
        
         "Martinique"
      ,
      
        
         "Mauritania"
      ,
      
        
         "Mauritius"
      ,
      
        
         "Mayotte"
      ,
      
        
         "Mexico"
      ,
      
        
         "Micronesia"
      ,
      
        
         "Moldova"
      ,
      
          "Monaco"
      ,
      
          "Mongolia"
      ,
      
         
         "Montserrat"
      ,
      
         
         "Morocco"
      ,
      
          "Mozambique"
      ,
      
         
         "Myanmar"
      ,
      
         
         "Namibia"
      ,
      
          "Nauru"
      ,
      
         
         "Nepal"
      ,
      
          "Netherlands"
      ,
      
          "Netherlands Antilles"
      ,
      
          "New Caledonia"
      ,
      
         
         "New Zealand"
      ,
      
          "Nicaragua"
      ,
      
          "Niger"
      ,
      
          "Nigeria"
      ,
      
         
         "Niue"
      ,
      
         
         "Norfolk Island"
      ,
      
         
         "Northern Mariana Islands"
      ,
      
         
         "Norway"
      ,
      
        
         "Oman"
      ,
      
          "Pakistan"
      ,
      
          "Palau"
      ,
      
         
         "Panama"
      ,
      
          "Papua New Guinea"
      ,
      
         
         "Paraguay"
      ,
      
      
         "Peru"
      ,
      
      
         "Philippines"
      ,
      
   
         "Pitcairn"
      ,
      
   
         "Poland"
      ,
      
      
         "Portugal"
      ,
      
   
         "Puerto Rico"
      ,
      
    
         "Qatar"
      ,
      
        
         "Reunion"
      ,
      
       
         "Romania"
      ,
      
     
         "Russian Federation"
      ,
      
      
         "Rwanda"
      ,
      
         
         "Saint Helena"
      ,
      
      
         "Saint Kitts and Nevis"
      ,
      
     
         "Saint Lucia"
      ,
      
        
         "Saint Pierre and Miquelon"
      ,
      
      
         "Saint Vincent and The Grenadines"
      ,
      
         
         "Samoa"
      ,
      
      
         "San Marino"
      ,
      
       
         "Sao Tome and Principe"
      ,
      
      
         "Saudi Arabia"
      ,
      
      
         "Senegal"
      ,
      
      
         "Seychelles"
      ,
      
   
         "Sierra Leone"
      ,
      
       
         "Singapore"
      ,
      
      
         "Slovakia"
      ,
      
       
         "Slovenia"
      ,
      
       
         "Solomon Islands"
      ,
      
        
         "Somalia"
      ,
      
      
         "South Africa"
      ,
      
       
         "South Georgia and Sandwich Islands"
      ,
      
         
         "Spain"
      ,
      
        
         "Sri Lanka"
      ,
      
       
         "Sudan"
      ,
      
        
         "Suriname"
      ,
      
         
         "Svalbard and Jan Mayen"
      ,
      
         
         "Swaziland"
      ,
      
       
         "Sweden"
      ,
      
         
         "Switzerland"
      ,
      
        
         "Syrian Arab Republic"
      ,
      
       
         "Taiwan"
      ,
      
       
         "Tajikistan"
      ,
      
   
         "Tanzania"
      ,
      
    
         "Thailand"
      ,
      
        
         "Togo"
      ,
      
        
         "Tokelau"
      ,
      
     
         "Tonga"
      ,
      
     
         "Trinidad and Tobago"
      ,
      
    
         "Tunisia"
      ,
      
 
         "Turkey"
      ,
      
          "Turkmenistan"
      ,
      
      
         "Turks and Caicos Islands"
      ,
      
  
         "Tuvalu"
      ,
      
        
         "Uganda"
      ,
      
        
         "Ukraine"
      ,
      
     
         "United Arab Emirates"
      ,
      
          "United Kingdom"
      ,
      
    
         "United States"
      ,
      
          "United States Minor Outlying Islands"
      ,
      
       
         "Uruguay"
      ,
      
      
         "Uzbekistan"
      ,
      
     
         "Vanuatu"
      ,
      
      
         "Vatican City State"
      ,
      
       
         "Venezuela"
      ,
      
        
         "Vietnam"
      ,
      
        
         "Virgin Islands (British)"
      ,
      
       
         "Virgin Islands (U.S.)"
      ,
      
    
         "Wallis And Futuna Islands"
      ,
      
         
         "Western Sahara"
      ,
      
          "Yemen"
      ,
      
        
         "Yugoslavia"
      ,
      
        
         "Zaire"
      ,
      
      
         "Zambia"
      ,
      
   
         "Zimbabwe"
      
    ] ;*/
  

  async loading() {
    let loader = await this.loadingCtrl.create({
      duration: 1000
    });
            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                
                message: 'contact updated ',
                duration : 500 ,
                position: 'bottom'
              });
              setTimeout(() => {
                toast.dismiss();
                this.navCtrl.navigateRoot('/listcontacts')
              }, 1000);
              toast.present();
            });
  
                
          }

  getcontact(){
    this.contactservice.getcontact(this.idr).subscribe((value: any) => {
      this.contactrec=value;
      
    }, error1 => {

    }, () => {
    });

  }


  
  update(){   
    this.loading(); 

            this.contactservice.updatecontact(this.updated,this.idr).subscribe((value: any) => {
              this.updated =new AddContact();

            }, error1 => {
          
            }, () => {
            });
          
          }



}
