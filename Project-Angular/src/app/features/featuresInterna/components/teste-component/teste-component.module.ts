import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponentComponent } from './teste-component.component';
import { BlaModule } from '../bla/bla.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TesteComponentComponent],
  imports: [
    CommonModule,
    RouterModule,
    BlaModule
  ],
  exports: [TesteComponentComponent]
})
export class TesteComponentModule { }
