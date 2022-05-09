import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataIntelligenceComponent } from './data-intelligence.component';

const routes: Routes = [{ path: '', component: DataIntelligenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataIntelligenceRoutingModule { }
