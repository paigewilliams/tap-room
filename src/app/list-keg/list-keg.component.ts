import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-list-keg',
  templateUrl: './list-keg.component.html',
  styleUrls: ['./list-keg.component.css']
})
export class ListKegComponent  {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(kegToEdit: Keg){
    this.clickSender.emit(kegToEdit);
  }

  decreaseVolume(currentKeg: Keg){
    currentKeg.volume--;
  }

  decreaseVolumeBy2(currentKeg: Keg){
    currentKeg.volume = currentKeg.volume - 2;
  }

 }
