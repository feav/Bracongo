import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvenementDetailPage } from './evenement-detail';

@NgModule({
  declarations: [
    EvenementDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EvenementDetailPage),
  ],
})
export class EvenementDetailPageModule {}
