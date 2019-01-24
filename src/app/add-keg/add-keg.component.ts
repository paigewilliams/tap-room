import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent {
  @Output() sendKeg = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcContent: number){
    let newKeg: Keg = new Keg(name, brand, price, alcContent);
    this.sendKeg.emit(newKeg);
  }

}
