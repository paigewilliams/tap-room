import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'

const appRoutes: Routes = [
  {
  path: '',
  component: HomeComponent
},
{
  path: 'customer',
  component: CustomerComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
