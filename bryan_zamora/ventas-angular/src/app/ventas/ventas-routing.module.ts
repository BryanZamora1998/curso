import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VentasComponent } from './ventas.component';

const routes: Routes = [
  {
     path: '', component: VentasComponent, children: [
      { 
        path: 'login',  component: LoginComponent 
      },
      { 
        path: 'home',  component: HomeComponent 
      },
      {
        path: '', redirectTo: 'login', pathMatch: 'full'
      },
      { 
        path: '**', component: LoginComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
