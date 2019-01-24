import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "price",
  pure: false
})

export class PricePipe implements PipeTransform{
  transform(input: Keg[], priceRange){
    let output: Keg[] = [];
    if(priceRange === "less than 7"){
      for(let i=0; i < input.length; i++){
          if(input[i].price < 7){
            output.push(input[i]);
          }
      }
      return output;
    }else if(priceRange === "greater than 7"){
      for(let i=0; i < input.length; i++){
        if(input[i].price >= 7){
          output.push(input[i])
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
