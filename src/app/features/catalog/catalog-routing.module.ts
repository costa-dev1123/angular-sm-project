import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallToActionComponent } from 'src/app/shared/uikit/components/call-to-action/call-to-action.component';
import { CatalogComponent } from './catalog.component';

const routes: Routes = [{ path: '', component: CatalogComponent, children:[{path: 'detail', component: CallToActionComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
