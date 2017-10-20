import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VinModalPage } from './vin-modal';

@NgModule({
  declarations: [
    VinModalPage,
  ],
  imports: [
    IonicPageModule.forChild(VinModalPage),
  ],
})
export class VinModalPageModule {}
