import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlaComponent } from './bla.component';



@NgModule({
  declarations: [BlaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BlaComponent
  ]
})
export class BlaModule { }
