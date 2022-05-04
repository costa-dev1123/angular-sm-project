import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    ButtonComponent
  ]
})
export class UikitModule { }
