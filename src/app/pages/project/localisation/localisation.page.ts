import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController,LoadingController,ToastController, ModalController ,IonList } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import {  ViewChild } from '@angular/core';
import { findComponentView } from '@angular/core/src/render3/util';

import { isNull, isUndefined } from 'util';

import { ActionSheetController } from '@ionic/angular';
import { stringify } from 'querystring';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.page.html',
  styleUrls: ['./localisation.page.scss'],
})
export class LocalisationPage implements OnInit {
  @Input() city: string;

  constructor() { }

  ngOnInit() {
  }

}
