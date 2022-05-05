import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ImmagineFullScreenComponent } from './components/immagine-full-screen/immagine-full-screen.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { CardComponent } from './components/card/card.component';
import { HelperCardComponent } from './components/helper-card/helper-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    ImmagineFullScreenComponent,
    CardComponent,
    HelperCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UikitModule
  ]
})
export class HomeModule { }
