import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { FooterComponent } from './components/footer/footer.component';
import { MegaMenuComponent } from './components/mega-menu/mega-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ImmagineFullScreenComponent } from './components/immagine-full-screen/immagine-full-screen.component';
import { HelperCardComponent } from './components/helper-card/helper-card.component';
import { LoaderComponent } from './components/loader/loader.component';







@NgModule({
  declarations: [
    NavbarComponent,
    ButtonComponent,
    CallToActionComponent,
    FooterComponent,
    MegaMenuComponent,
    ImmagineFullScreenComponent,
    HelperCardComponent,
    LoaderComponent


  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

  ],
  exports:[
    NavbarComponent,
    ButtonComponent,
    CallToActionComponent, 
    FooterComponent,
    MegaMenuComponent,
    ImmagineFullScreenComponent,
    HelperCardComponent,
    LoaderComponent
  ],
  providers:[]
})
export class UikitModule { }
