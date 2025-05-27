import { AbstractControl, ValidatorFn } from "@angular/forms";

export const PasswordValidator = (adminPassword:string): ValidatorFn => {
    return (control: AbstractControl) => {
        return control.value === adminPassword
        ? null
        : {PasswordValidator: {value: false}}
    }
}