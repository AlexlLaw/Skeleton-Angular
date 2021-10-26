import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternoComponent } from './interno.component';
import { MenuModule } from '../../../../core/components/menu/menu.module';



@NgModule({
  declarations: [InternoComponent],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [InternoComponent]
})
export class InternoModule { }
