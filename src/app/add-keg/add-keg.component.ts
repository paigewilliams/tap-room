import { Component, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent {

  kegs: Keg[] = [];
  selectedKeg: Keg = null;
  addKeg(name, brand, price, alcContent){
    this.kegs.push(new Keg(name, brand, price, alcContent))
    console.log(this.kegs);
  }

  editKeg(currentKeg){
    this.selectedKeg = currentKeg;
  }

  finishedEditing(){
    this.selectedKeg = null;
  }

  decreaseVolume(currentKeg){
    currentKeg.volume --;
  }

  decreaseVolumeBy2(currentKeg){
    currentKeg.volume = currentKeg.volume - 2;
  }

  lowVolume(currentKeg){
    if (currentKeg.volume <= 10){
      return "bg-danger"
    }
  }

}
