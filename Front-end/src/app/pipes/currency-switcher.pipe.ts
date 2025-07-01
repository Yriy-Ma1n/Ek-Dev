import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencySwitcher'
})
export class CurrencySwitcherPipe implements PipeTransform {

  transform(value: number, currency: string): string {
    if(!value){
      return '0';
    }

    let formattedValue = ''

    if(currency === "USD"){
      formattedValue = `$${(value / 41.85).toFixed(2)}`;
    }else if(currency === "EUR"){
      formattedValue = `€${(value / 49.43).toFixed(2)}`;
    }else if(currency = "UAH"){
      formattedValue = `${value.toFixed(2)} ₴`;
    }

    return formattedValue;
  }

}
