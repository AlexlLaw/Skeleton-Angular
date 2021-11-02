import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InternoComponent } from '../interno.component';
import { SignInComponent } from 'src/app/core/components/sign-in/sign-in.component';

const routes: Routes = [
 {
   path: '',
   component: InternoComponent,
  //  children: [{
  //    path: 'bla',
  //    component:
  //  }
  //   ]

 }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternoRoutingModule { }
