import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampagnePage } from './campagne';

@NgModule({
  declarations: [
    CampagnePage,
  ],
  imports: [
    IonicPageModule.forChild(CampagnePage),
  ],
})
export class CampagnePageModule {}
