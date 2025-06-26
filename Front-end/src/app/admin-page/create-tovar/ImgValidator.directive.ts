import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

export const imageUrlValidator = () => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const url = control.value;

    if (!url) {
      return of(null);
    }

    return new Observable(observer => {
      const img = new Image();

      img.onload = () => {
        observer.next(null);
        observer.complete();
      };

      img.onerror = () => {
        observer.next({ imageNotFound: true });
        observer.complete();
      };

      img.src = url;
    });
  };
}
