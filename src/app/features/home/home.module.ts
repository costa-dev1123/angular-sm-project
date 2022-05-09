import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { CardComponent } from './components/card/card.component';
import { HighlightDirective } from 'src/app/shared/utils/highlight.directive';




@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UikitModule,
 
  ]
})
export class HomeModule { }
