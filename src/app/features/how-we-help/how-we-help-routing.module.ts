import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowWeHelpComponent } from './how-we-help.component';

const routes: Routes = [{ path: '', component: HowWeHelpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowWeHelpRoutingModule { }
