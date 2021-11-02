import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { SignInInterface } from '../interfaces/request/sign-in.interface';
import { SignIn } from '../models/sign-in'


export class SignInForm extends FormGroup {
  private _errorMessages = {
    required: 'O campo %s é obrigatorio.'
  };

  constructor(){
    super({
      username: new FormControl(null,
        [
        Validators.required
      ]),
      password: new FormControl(null,
        [
          Validators.required,
      ])
    });
  }

  public markAllAsTouched(): void {
    Object.keys(this.controls).map((control) => this.get(control).markAsDirty());
  }

  public getValidatorsForm(controlName: string, label: string): string {
    return this._errorMessages[Object.keys(this.get(controlName).errors)[0]].replace('%s', label || controlName);
  }

  public getPayload(): SignInInterface {
    return new SignIn(this.value);
  }
}
