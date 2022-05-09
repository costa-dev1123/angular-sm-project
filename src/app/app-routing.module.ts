import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }, 
  { path: 'catalog', loadChildren: () => import('./features/catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'contacts', loadChildren: () => import('./features/contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'how-we-help', loadChildren: () => import('./features/how-we-help/how-we-help.module').then(m => m.HowWeHelpModule) },
  { path: 'data-intelligence', loadChildren: () => import('./features/data-intelligence/data-intelligence.module').then(m => m.DataIntelligenceModule) },
  { path: 'intelligent-automation', loadChildren: () => import('./features/intelligent-automation/intelligent-automation.module').then(m => m.IntelligentAutomationModule) },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
