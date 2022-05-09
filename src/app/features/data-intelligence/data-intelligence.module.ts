import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataIntelligenceRoutingModule } from './data-intelligence-routing.module';
import { DataIntelligenceComponent } from './data-intelligence.component';


@NgModule({
  declarations: [
    DataIntelligenceComponent
  ],
  imports: [
    CommonModule,
    DataIntelligenceRoutingModule
  ]
})
export class DataIntelligenceModule { }
