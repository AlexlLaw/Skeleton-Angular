import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuComponent } from './menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    FontAwesomeModule

  ], exports: [
    MenuComponent
  ]
})
export class MenuModule { }
