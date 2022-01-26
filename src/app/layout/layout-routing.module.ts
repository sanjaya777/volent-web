import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  {
    path:'', 
    component:LayoutComponent,
    children:[
      {path:'dashboard', loadChildren: () => import('src/app/features/dashboard/dashboard-routing.module').then(m=>m.DashboardRoutingModule)},
      //{path:'calender', loadChildren: () => import('src/app/features/calender/calender.module').then(m=>m.CalenderModule)},
      //{path:'training/program', loadChildren: () => import('src/app/features/program-modules/program-modules.module').then(m=>m.ProgramModulesModule)},
      //{path:'settings', loadChildren: () => import('src/app/features/settings/settings.module').then(m=>m.SettingsModule)},
      //{path:'profile', loadChildren: () => import('src/app/features/profile-management/profile-management.module').then(m=>m.ProfileManagementModule)},
      //{path:'auth',loadChildren:()=>import('src/app/features/auth/auth.module').then(m=>m.AuthModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
