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
    path:'login',
    loadChildren: () => import('src/app/features/auth/auth-routing.module').then(m=>m.AuthRoutingModule)
  },
  {
    path:'',
    loadChildren: () => import('src/app/layout/layout-routing.module').then(m=>m.LayoutRoutingModule)
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
