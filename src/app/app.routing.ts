import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AppComponent } from './app.component'

const appRoutes: Routes = [
  {
  path: '',
  component: CustomerComponent
}
// {
//   path: '',
//   component: AppComponent
// }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
