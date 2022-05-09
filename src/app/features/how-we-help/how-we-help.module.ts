import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowWeHelpRoutingModule } from './how-we-help-routing.module';
import { HowWeHelpComponent } from './how-we-help.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';


@NgModule({
  declarations: [
    HowWeHelpComponent
  ],
  imports: [
    CommonModule,
    HowWeHelpRoutingModule,
    UikitModule
  ]
})
export class HowWeHelpModule { }
