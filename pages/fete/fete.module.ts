import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FetePage } from './fete';

@NgModule({
  declarations: [
    FetePage,
  ],
  imports: [
    IonicPageModule.forChild(FetePage),
  ],
})
export class FetePageModule {}
