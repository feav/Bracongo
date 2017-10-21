import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JeuPlayPage } from './jeu-play';

@NgModule({
  declarations: [
    JeuPlayPage,
  ],
  imports: [
    IonicPageModule.forChild(JeuPlayPage),
  ],
})
export class JeuPlayPageModule {}
