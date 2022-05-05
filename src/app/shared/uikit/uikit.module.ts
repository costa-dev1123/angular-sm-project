import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ButtonComponent,
    CallToActionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    ButtonComponent,
    CallToActionComponent
  ]
})
export class UikitModule { }
