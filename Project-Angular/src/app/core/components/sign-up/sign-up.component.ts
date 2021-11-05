import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { SignUpForm } from '../../forms/sign-up-form';
import { AlertService } from '../../../shared/components/alert/alert.service';
import { SignUpService } from '../../services/sign-up.service';
import { MethodsEnum } from '../../enums/methods.enum';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private _signUpForm: SignUpForm;

  constructor(private router: Router, private signUpService: SignUpService, private alertService: AlertService) {
    this._signUpForm = new SignUpForm();
  }

  ngOnInit(): void {
  }

  public get SignUp(): SignUpForm {
    return this._signUpForm;
  }

  public save(): void {
    this.SignUp.markAllAsTouched();
    if (this.SignUp.valid) {
      this.signUpService.postPut(this.SignUp.getPayload(), MethodsEnum.POST).subscribe(
        (res) => {
          this.alertService.openModal('Cadastro', 'Cadastro realizado com sucesso', 'success');
          this.router.navigate(['/login']);
        }
      );
    }
  }

  public isFieldValid(form: FormGroup, field: string): boolean {
    return !form.get(field).valid && form.get(field).dirty;
  }
}
