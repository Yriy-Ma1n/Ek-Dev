import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencySwitcher'
})
export class CurrencySwitcherPipe implements PipeTransform {

  transform(value: string, currency: string): string {
    if(!value){
      return '0';
    }

    let formattedValue = ''
    let num = Number(value.replace(' ',''))

    if(currency === "USD"){
      formattedValue = `${(num / 41.85).toFixed(2)}$`;
    }else if(currency === "EUR"){
      formattedValue = `${(num / 49.43).toFixed(2)}€`;
    }else if(currency === "UAH"){
      formattedValue = `${num.toFixed(0)} ₴`;
    }

    return formattedValue;
  }

}
