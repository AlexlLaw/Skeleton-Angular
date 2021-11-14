import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternoComponent } from '../interno.component';
import { TesteComponentComponent } from '../../../components/teste-component/teste-component.component';

const routes: Routes = [
 {
   path: '',
   component: InternoComponent,
   children: [
     {
      path: 'teste',
      component: TesteComponentComponent,
     },

    ]
 }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternoRoutingModule { }
