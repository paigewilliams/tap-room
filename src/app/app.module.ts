import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { ListKegComponent } from './list-keg/list-keg.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { PricePipe } from './price.pipe';
import { VolumePipe } from './volume.pipe';
import { CustomerComponent } from './customer/customer.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddKegComponent,
    ListKegComponent,
    EditKegComponent,
    PricePipe,
    VolumePipe,
    CustomerComponent,
    HomeComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
