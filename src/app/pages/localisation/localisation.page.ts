import { Component, OnInit } from '@angular/core';import {Geolocation} from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.page.html',
  styleUrls: ['./localisation.page.scss'],
})
export class LocalisationPage implements OnInit {

  lnginput:number ;
  latinput:number
  map: any;
 
  constructor(public geolocation: Geolocation , public  modalController:ModalController) {
      this.load();
  }
ngOnInit(){}
    
close(){
  this.modalController.dismiss()
}

addInfoWindowToMarker(marker) {

  
    const infoWindowContent = '<div id="content">' + marker.title + '</div>';
    const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent
    });
    marker.addListener('click', () => {
        infoWindow.open(this.map, marker);
    });
}
  

addMyPosition(latLng) {
  const marker = new google.maps.Marker({
      map: this.map,
      position: latLng,
      animation: google.maps.Animation.DROP,
      title: 'My position'
  });
  this.addInfoWindowToMarker(marker);
}

  load() {
      this.geolocation.getCurrentPosition().then((resp) => {
        let lat = resp.coords.latitude;
        let lng = resp.coords.longitude;
          const latLng = new google.maps.LatLng(lat, lng);
          this.map = new google.maps.Map(document.getElementById('map_canvas'), {
              zoom: 5,
              center: latLng,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              mapTypeControl: false
          });
      this.addMyPosition(latLng);

      });

  } 

  reload(latcor:number , lngcor : number) {
    this.geolocation.getCurrentPosition().then((resp) => {
      let lat = latcor;
      let lng = lngcor;
        const latLng = new google.maps.LatLng(lat, lng);
        this.map = new google.maps.Map(document.getElementById('map_canvas'), {
            zoom: 5,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false
        });
    this.addMyPosition(latLng);

    });

}

}
