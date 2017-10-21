import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JeuMenuPage } from './jeu-menu';

@NgModule({
  declarations: [
    JeuMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(JeuMenuPage),
  ],
})
export class JeuMenuPageModule {}
