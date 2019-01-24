import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "volume",
  pure: false
})

export class VolumePipe implements PipeTransform{
  transform(input: Keg[], volumeRange){
    let output: Keg[] = [];
    if(volumeRange === "less than 10"){
      for(let i=0; i < input.length; i++){
          if(input[i].volume <= 10){
            output.push(input[i]);
          }
      }
      return output;
    } else {
      return input;
    }
  }
}
