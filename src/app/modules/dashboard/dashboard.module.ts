import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeetingComponent } from './meeting/meeting.component';
import { AdminComponent } from './admin/admin.component';
import { VehicelComponent } from './vehicel/vehicel.component';
import { RoleComponent } from './role/role.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentComponent } from './payment/payment.component';
import { RateSchedulerComponent } from './rate-scheduler/rate-scheduler.component';

@NgModule({
  declarations: [
    DashboardContainerComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    MeetingComponent,
    AdminComponent,
    VehicelComponent,
    RoleComponent,
    EmployeeComponent,
    CustomerComponent,
    InvoiceComponent,
    PaymentComponent,
    RateSchedulerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
