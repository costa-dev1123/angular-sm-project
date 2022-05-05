import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ImmagineFullScreenComponent } from './immagine-full-screen/immagine-full-screen.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';



@NgModule({
  declarations: [
    HomeComponent,
    ImmagineFullScreenComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UikitModule
  ]
})
export class HomeModule { }
