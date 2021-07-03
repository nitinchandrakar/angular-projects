import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartTotal'
})
export class CartTotalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value){
      console.log(value)
      return 1;
    }else{
      return 0;
    }
  }

}
