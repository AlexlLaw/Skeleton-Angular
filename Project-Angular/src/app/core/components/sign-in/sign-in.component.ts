import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { SignInForm } from '../../forms/sign-In-Form';
import { SignInInterface } from '../../interfaces/request/sign-in.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  @Input() public title: string = 'Entrar';
  @ViewChild('usernameInput')

  public userNameInput: ElementRef<HTMLInputElement>;
  private _signInForm: SignInForm;

  constructor(private authService: AuthService, private router: Router) {
    this._signInForm = new SignInForm();
  }

  ngOnInit(): void {}

  public get singInForm(): SignInForm {
    return this._signInForm;
  }

  public login(): void {
    this._signInForm.markAllAsTouched();
    if (this._signInForm.valid) {
      const dados = this._signInForm.getPayload();
      this.authService.postAuthenticate(dados).subscribe(
        (res) => {
          this.router.navigate(['/home']);
        },
        (err) => {
          this.userNameInput.nativeElement.focus();
          this._signInForm.reset();
        }
      );
    }
    this.userNameInput.nativeElement.focus();
  }

  public isFieldValid(form: FormGroup, field: string): boolean {
    return !form.get(field).valid && form.get(field).dirty;
  }
}
