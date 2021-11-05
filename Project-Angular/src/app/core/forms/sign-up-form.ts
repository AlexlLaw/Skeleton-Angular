import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { SignUpInterface } from '../interfaces/request/sign-up.interface';
import { SignUp } from '../models/sign-up';
import { clearMask } from '../utils/regex/regexClearMask';

export class SignUpForm extends FormGroup {
  private _errorMessages = {
    required: 'O campo %s é obrigatorio.',
    valorInvalido: 'Quantidade de caracteres no campo %s é inválido',
  };

  constructor(){
    super({
      username: new FormControl(null,
        [
        Validators.required,
        SignUpForm.validaQuantidaDeDigito(50)
      ]),
      password: new FormControl(null,
        [
          Validators.required,
          SignUpForm.validaQuantidaDeDigito(50)
      ]),
      role: new FormControl(null,
        [
          Validators.required
        ])
    });
  }

  private static validaQuantidaDeDigito(quantidade: number): ValidatorFn {
    return (control: AbstractControl): Record<string, true> => {

        const conteudo = control.value ? control.value.replace(clearMask, '') : '';

        if (conteudo.length > 0 && conteudo.length > quantidade) {
            return { valorInvalido: true };
        }
    };
  }

  public markAllAsTouched(): void {
    Object.keys(this.controls).map((control) => this.get(control).markAsDirty());
  }

  public getValidatorsForm(controlName: string, label: string): string {
    return this._errorMessages[Object.keys(this.get(controlName).errors)[0]].replace('%s', label || controlName);
  }

  public getPayload(): SignUpInterface {
    const dados =  new SignUp(this.value);
    return {
      username: dados.username,
      password: dados.password,
      role: dados.role
    }
  }


}
