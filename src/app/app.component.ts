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

  editKeg(clickedKeg){
  this.selectedKeg = clickedKeg;
}

}
