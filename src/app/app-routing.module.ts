import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', 
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren: () => import('src/app/features/home/home-routing.module').then(m=>m.HomeRoutingModule)
  },
  {
    path:'register',
    loadChildren: () => import('src/app/features/registration/registration-routing.module').then(m=>m.RegistrationRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
