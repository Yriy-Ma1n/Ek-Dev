import { AbstractControl, ValidatorFn } from "@angular/forms";

export const TheSamePasswordValidator = (): ValidatorFn => {
    return (control: AbstractControl) => {
        const passobj = control.value 
        console.log()
        return  passobj.password === passobj.confirmPassword ? null : {PasswordValidator:'Паролі мають збігатися'}
    }
}