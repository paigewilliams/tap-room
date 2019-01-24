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

  masterKegsList: Keg[] = [
    new Keg('Beer1', 'Beer2', 5, 6),
    new Keg('Beer3', 'Beer4', 6, 7),
    new Keg('Beer5', 'Beer6', 8, 9)
  ];

  addKeg(newKeg: Keg){
    this.masterKegsList.push(newKeg);
    console.log(this.masterKegsList);
  }

  editKeg(clickedKeg){
  this.selectedKeg = clickedKeg;
}

  finishedEditing(){
  this.selectedKeg = null;
  console.log(this.selectedKeg)
  }

}
