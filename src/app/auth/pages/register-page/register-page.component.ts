import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name:['', [ Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern) ]],
    //email:['', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [new EmailValidator()]],
    email:['', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidator]],
    username:['', [ Validators.required, this.validatorsService.cantBeStrider ]],
    password:['', [ Validators.required, Validators.minLength(6) ]],
    password2:['', [ Validators.required ]],
  }, {
    Validators: [
      this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2'),
    ]
  })

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator
  ){}

  isValidField( field: string){
    return this.validatorsService.isValidField( this.myForm, field);
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}
