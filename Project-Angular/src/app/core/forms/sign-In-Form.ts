import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { SignInInterface } from '../interfaces/request/sign-in.interface';


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

  public get username(): AbstractControl {
    return this.get('usename');
  }

  public get password(): AbstractControl {
    return this.get('usename');
  }

  public setValues(data: SignInInterface): void {
    this.username.setValue(data.username);
    this.password.setValue(data.password);
  }

  public getValidatorsForm(controlName: string, label: string): string {
    return this._errorMessages[Object.keys(this.get(controlName).errors)[0]].replace('%s', label || controlName);
  }

  // public getDadosEnvioSingIn(): SingInInterface {
  //   const SingIn = new SingIn(this.value);
  //   return {
  //      username: SingIn.username,
  //      password: SingIn.password
  //   }
  // }

}
