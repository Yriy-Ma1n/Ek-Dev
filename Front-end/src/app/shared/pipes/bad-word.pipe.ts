import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badWord'
})
export class BadWordPipe implements PipeTransform {

  transform(value: string): string {
    const badWordReg = /(кокос|банан|плохой)/gi
    
    const valueWord = value.replace(badWordReg,(word)=>'*'.repeat(word.length))

    return valueWord.replaceAll('@', "*")
    
    
  }

}
