import { ValidatorFn } from "@angular/forms";
import { AbstractControl } from "@angular/forms";

export function ValidatorUrl (): ValidatorFn {
    return (control: AbstractControl) => {
        const img = new Image();
        let skip = true;
        img.src = control.value;
        img.onerror = ()=>{
            console.log('err')
            skip = false
        };
        img.onload = ()=>{
            console.log('log')
            skip = true
        };
        return skip ? null : {ValidatorUrl:{value:false}}
    }
}