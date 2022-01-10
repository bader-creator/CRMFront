import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PopmenuComponent } from './../../components/popmenu/popmenu.component';
import { LocalisationPage } from '../localisation/localisation.page';

import { HomeResultsPage } from './home-results.page';
import { LocalisationPageModule } from '../localisation/localisation.module';

const routes: Routes = [
  {
    path: '',
    component: HomeResultsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,LocalisationPageModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeResultsPage, PopmenuComponent]
})
export class HomeResultsPageModule {}
