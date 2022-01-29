import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../features/dashboard/dashboard.component';
import { AttendedEventsComponent } from '../features/event/attended-events/attended-events.component';
import { MyEventsComponent } from '../features/event/my-events/my-events.component';
import { UpcomingEventsComponent } from '../features/event/upcoming-events/upcoming-events.component';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  {
    path:'', 
    component:LayoutComponent,
    children:[
      {path:'dashboard', loadChildren: () => import('src/app/features/dashboard/dashboard-routing.module').then(m=>m.DashboardRoutingModule)},
      {path: 'dashboard', component: DashboardComponent,
        children: [
          {path: 'upcoming', component: UpcomingEventsComponent},
          {path: 'attended', component: AttendedEventsComponent},
          {path: 'my', component: MyEventsComponent}
        ]
      },
      {path:'create-event', loadChildren: () => import('src/app/features/event/event-routing.module').then(m=>m.EventRoutingModule)}
      // {path:'home', loadChildren: () => import('src/app/features/home/home-routing.module').then(m=>m.HomeRoutingModule)},
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
