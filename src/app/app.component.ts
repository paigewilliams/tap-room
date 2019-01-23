import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tap-room';

  kegs: Keg[] = [];
  selectedKeg: Keg = null;
  // addKeg(name, brand, price, alcContent){
  //   this.kegs.push(new Keg(name, brand, price, alcContent))
  //   console.log(this.kegs);
  // }



}
