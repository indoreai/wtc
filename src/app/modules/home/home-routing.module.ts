import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeLoaderComponent } from './home-loader/home-loader.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: HomeLoaderComponent, children: [

      {
        path: '', component: HomeComponent
      },
      {
        path: 'contact', component: ContactComponent
      },
      {
        path: 'login', component: LoginComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
