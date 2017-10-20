import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProduitModalPage } from './produit-modal';

@NgModule({
  declarations: [
    ProduitModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ProduitModalPage),
  ],
})
export class ProduitModalPageModule {}
