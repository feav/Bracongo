import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VinDetailPage } from './vin-detail';
@NgModule({
  declarations: [
    VinDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(VinDetailPage),
  ],
})
export class VinDetailPageModule {}
