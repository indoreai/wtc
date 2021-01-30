import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeetingComponent } from './meeting/meeting.component';


const routes: Routes = [{
  path: '', component: DashboardContainerComponent, children: [
    {
       path: '' , component: AdminComponent, children:[
        {
          path: 'dashboard' , component: DashboardComponent
       },
        {
          path: 'meeting' , component: MeetingComponent
       }
       ]
    },

    
  ]
}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
