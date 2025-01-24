import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator{
  constructor() { }
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors|null> ((subscriber) => {
      console.log({email});
      if(email === 'fernando@gmail.com') {
        subscriber.next({emailTaken: true});
        subscriber.complete();
      }
      subscriber.next(null);
      subscriber.complete();
    });
    return httpCallObservable;
  }
  /*validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log({email});

    return of({
      emailTaken: true
    }).pipe(
      delay(2000)
    )
  }*/

}
