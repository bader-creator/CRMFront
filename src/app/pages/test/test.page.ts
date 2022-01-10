
import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import leaflet from 'leaflet';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

ngOnInit(){
  
}

@ViewChild('map') mapContainer: ElementRef;
map: any;
constructor(public navCtrl: NavController , private nativeGeocoder: NativeGeocoder) { 

  let  target = {
    clicked: 0,
    currentFollowers: 90,
    btn: document.querySelector("a.btn"),
    fw: document.querySelector("span.followers")
  };
  
  let  follow = () => {
    target.clicked += 1;
    target.btn.innerHTML = 'Following <i class="fas fa-user-times"></i>';
  
    if (target.clicked % 2 === 0) {
      target.currentFollowers -= 1;
      target.btn.innerHTML = 'Follow <i class="fas fa-user-plus"></i>';
    }
    else {
      target.currentFollowers += 1;
    }
  
  
  }

}




ionViewDidEnter() {
  this.loadmap();
  this.addmarker()
  
}

loadmap() {
  this.map = leaflet.map("map").fitWorld();
  leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attributions: 'www.tphangout.com',
    maxZoom: 50
    
  }).addTo(this.map);
}

addmarker(){
         this.geocodeandadd('bardo,tunisia');
}

geocodeandadd(city){
  this.nativeGeocoder.forwardGeocode(city)
  .then((coordinates: NativeGeocoderResult[]) => {

    let markerGroup = leaflet.featureGroup();
    let marker: any = leaflet.marker([coordinates[0].latitude, coordinates[0].longitude]).on('click', () => {
      alert('Marker clicked');
    })
    markerGroup.addLayer(marker);
    this.map.addLayer(markerGroup);
    


})
  .catch((error: any) => console.log(error) );
} 



}
