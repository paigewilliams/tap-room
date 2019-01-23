import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tap-room';
  selectedKeg: Keg = null;

  masterKegsList: Keg[] = [];

  addKeg(newKeg: Keg){
    this.masterKegsList.push(newKeg);
    console.log(this.masterKegsList);
  }
  // addKeg(name, brand, price, alcContent){
  //   this.kegs.push(new Keg(name, brand, price, alcContent))
  //   console.log(this.kegs);
  // }



}
