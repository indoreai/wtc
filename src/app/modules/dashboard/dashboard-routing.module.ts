import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeetingComponent } from './meeting/meeting.component';
import { OrdersComponent } from './orders/orders.component';
import { VehicelComponent } from './vehicel/vehicel.component';
import { RoleComponent } from './role/role.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentComponent } from './payment/payment.component';
import { RateSchedulerComponent } from './rate-scheduler/rate-scheduler.component';

const routes: Routes = [{
  path: '', component: DashboardContainerComponent, children: [
    {
      path: '', component: AdminComponent, children: [
        {
          path: 'dashboard', component: DashboardComponent
        },
        {
          path: 'orders', component: OrdersComponent
        },
        {
          path: 'vehicel', component: VehicelComponent
        },
        {
          path: 'role', component: RoleComponent
        },
        {
          path: 'employee', component: EmployeeComponent
        },
        {
          path: 'customer', component: CustomerComponent
        },
        {
          path: 'invoice', component: InvoiceComponent
        },
        {
          path: 'payment', component: PaymentComponent
        },
        {
          path: 'rate', component: RateSchedulerComponent
        },
        { path: '**', redirectTo: '', pathMatch: 'full' }

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
