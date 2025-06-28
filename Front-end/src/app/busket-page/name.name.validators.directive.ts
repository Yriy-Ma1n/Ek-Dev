import { AbstractControl} from "@angular/forms";

export const nameValidator = () => {
  return (control: AbstractControl) => {
    
    return control.value.trim().split(' ').length === 3 ? null : {isTrueName:false}
   
  };
}