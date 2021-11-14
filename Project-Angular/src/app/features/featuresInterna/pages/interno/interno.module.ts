import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternoComponent } from './interno.component';
import { MenuModule } from '../../../../core/components/menu/menu.module';
import { RouterModule } from '@angular/router';
import { InternoRoutingModule } from './interno-routing/interno-routing.module';
import { TesteComponentModule } from '../../components/teste-component/teste-component.module';



@NgModule({
  declarations: [InternoComponent],
  imports: [
    CommonModule,
    MenuModule,
    RouterModule,
    InternoRoutingModule,
    TesteComponentModule
  ],
  exports: [InternoComponent]
})
export class InternoModule { }
