import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { SignInComponent } from './core/components/sign-in/sign-in.component';
import { InternoComponent } from './features/featuresInterna/pages/interno/interno.component';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
        import('./core/components/sign-in/sign-in.module').then(
          (m) => m.SignInModule
        ),
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
        import('./features/featuresInterna/pages/interno/interno.module').then(
          (m) => m.InternoModule
        ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
