import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataIntelligenceRoutingModule } from './data-intelligence-routing.module';
import { DataIntelligenceComponent } from './data-intelligence.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { AuthInterceptor } from 'src/app/shared/utils/interceptor/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DataIntelligenceComponent
  ],
  imports: [
    CommonModule,
    DataIntelligenceRoutingModule,
    UikitModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
})
export class DataIntelligenceModule { }
