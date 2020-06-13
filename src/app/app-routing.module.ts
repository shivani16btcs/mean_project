import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { ResetComponent } from './reset/reset.component';
import{HomeComponent} from './home/home.component'
import{DummyComponent} from './dummy/dummy.component'
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forget',component:ForgetComponent},
  {path:'reset/:token',component:ResetComponent},
  {path:'home',component:HomeComponent},

  {path:'ecoupons',component:HomeComponent},
  {path:'ebrands',component:HomeComponent},
  {path:'reusemarket',component:HomeComponent},
  {path:'lostandfound',component:HomeComponent}





//  {path:'',component:''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,RegisterComponent]


