import { Platform, NavController, LoadingController, ToastController, ModalController, IonList } from '@ionic/angular';


import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import leaflet from 'leaflet';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {
  @Input() city: string;
  @Input() name: string;


  ngOnInit() {
  }



  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, private nativeGeocoder: NativeGeocoder, private modalctrl: ModalController) {

  }




  ionViewDidEnter() {
    this.loadmap();
    this.addmarker()

  }

  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',
      minZoom: 2,
      maxZoom: 50

    }).addTo(this.map);
  }

  addmarker() {
    this.geocodeandadd();
  }

  geocodeandadd() {
    this.nativeGeocoder.forwardGeocode(this.city)
      .then((coordinates: NativeGeocoderResult[]) => {

        let markerGroup = leaflet.featureGroup();
        let marker: any = leaflet.marker([coordinates[0].latitude, coordinates[0].longitude]).on('click', () => {
          alert('Marker clicked');
        })
        markerGroup.addLayer(marker);
        this.map.addLayer(markerGroup);



      })
      .catch((error: any) => console.log(error));
  }

  close() {
    this.modalctrl.dismiss();
  }


}
