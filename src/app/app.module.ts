import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { IonicSelectableModule } from 'ionic-selectable';
import {Geolocation} from '@ionic-native/geolocation/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Modal Pages
import { ImagePageModule } from './pages/modal/image/image.module';
import { SearchFilterPageModule } from './pages/modal/search-filter/search-filter.module';

// Components
import { NotificationsComponent } from './components/notifications/notifications.component';
import { DataService } from './data.service';
import { FormationComponent } from './pages/formation/formation.component';

import { AllcontactComponent } from './pages/allcontact/allcontact.component';
import { NewformationComponent } from './newformation/newformation.component';
import { AllformationComponent } from './allformation/allformation.component';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { HometComponent } from './homet/homet.component';
import { DashComponent } from './dash/dash.component';


@NgModule({
  declarations: [AppComponent, NotificationsComponent, FormationComponent ,AllcontactComponent, NewformationComponent, AllformationComponent, HometComponent, DashComponent, ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,IonicSelectableModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ImagePageModule,
    SearchFilterPageModule,
    FormsModule,
    SuperTabsModule.forRoot()
    
  ],
  entryComponents: [NotificationsComponent],
  providers: [
    IonicModule,
    DataService,NativeGeocoder,
    StatusBar,EmailComposer ,
    SplashScreen,        Geolocation,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
