import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendedEventsComponent } from './attended-events/attended-events.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';

const routes: Routes = [
  {
    path : '',
    component : UpcomingEventsComponent
  },
  {
    path : '',
    component : AttendedEventsComponent
  },
  // {
  //   path : '',
  //   component : MyEventsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
