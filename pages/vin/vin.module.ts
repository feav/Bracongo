import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VinPage } from './vin';

@NgModule({
  declarations: [
    VinPage,
  ],
  imports: [
    IonicPageModule.forChild(VinPage),
  ],
})
export class VinPageModule {}
