import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignInRoutingModule,
    RouterModule,
    FormsModule
  ], exports: [
    SignInComponent
  ]
})
export class SignInModule { }
