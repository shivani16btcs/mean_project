import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { ResetComponent } from './reset/reset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import{RegisterService} from './shared/register.service';
import {LoginService} from './shared/login.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ForgetPopupComponent } from './forget-popup/forget-popup.component';
import {ForgetService} from './shared/forget.service';
import { HomeComponent } from './home/home.component';
import { DummyComponent } from './dummy/dummy.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import { CookieService } from 'ngx-cookie-service';
import { HeaderNotLoginComponent } from './header-not-login/header-not-login.component';
import { HomeSidebarComponent } from './home-sidebar/home-sidebar.component';
import { PostcreateComponent } from './postcreate/postcreate.component';
import { PostListComponent } from './post-list/post-list.component';
import {PostCreateService} from './shared/post-create.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ForgetComponent,
    ResetComponent,
    ForgetPopupComponent,
    HomeComponent,
    DummyComponent,
    HeaderNotLoginComponent,
    HomeSidebarComponent,
    PostcreateComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
   
     ],
  providers: [
    RegisterService,
    LoginService,
    ForgetService,
    PostCreateService,
    CookieService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
