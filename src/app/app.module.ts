import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UikitModule } from './shared/uikit/uikit.module';





@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UikitModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
