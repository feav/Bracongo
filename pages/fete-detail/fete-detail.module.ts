import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeteDetailPage } from './fete-detail';

@NgModule({
  declarations: [
    FeteDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FeteDetailPage),
  ],
})
export class FeteDetailPageModule {}
