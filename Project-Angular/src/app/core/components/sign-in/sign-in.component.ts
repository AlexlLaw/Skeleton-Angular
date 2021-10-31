import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { SignInForm } from '../../forms/sign-In-Form';
import { SignInInterface } from '../../interfaces/request/sign-in.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @Input() public title: string = 'Entrar';
  private _singInForm: SignInForm;
  private _singIn: SignInInterface;
  @ViewChild('usernameInput') public userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this._singInForm = new SignInForm();
  }

  ngOnInit(): void {
  }

  public get singInForm(): SignInForm {
    return this._singInForm;
  }

  public login() {
    const username = this.singInForm.value.username;
    const password = this.singInForm.value.password;
    this.authService.postAuthenticate(username, password).subscribe(
      (res) => {
        this.router.navigate(['/home']);
      },
      err => {
        this.userNameInput.nativeElement.focus();
        this._singInForm.reset();
      }
    );
  }

  public isFieldValid(form: FormGroup, field: string): boolean {
    return !form.get(field).valid &&  form.get(field).dirty;
  }

}
