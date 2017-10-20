import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampagneDetailPage } from './campagne-detail';

@NgModule({
  declarations: [
    CampagneDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CampagneDetailPage),
  ],
})
export class CampagneDetailPageModule {}
