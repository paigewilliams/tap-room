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
  // kegs: Keg[] = [];
  // selectedKeg: Keg = null;
  // addKeg(name, brand, price, alcContent){
  //   this.kegs.push(new Keg(name, brand, price, alcContent))
  //   console.log(this.kegs);
  // }
  //
  // editKeg(currentKeg){
  //   this.selectedKeg = currentKeg;
  // }
  //
  // finishedEditing(){
  //   this.selectedKeg = null;
  // }
  //
  // decreaseVolume(currentKeg){
  //   currentKeg.volume --;
  // }
  //
  // decreaseVolumeBy2(currentKeg){
  //   currentKeg.volume = currentKeg.volume - 2;
  // }
  //
  // lowVolume(currentKeg){
  //   if (currentKeg.volume <= 10){
  //     return "bg-danger"
  //   }
  // }

}
