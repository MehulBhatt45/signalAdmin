import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { AdminService } from './admin.service';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import Swal from 'sweetalert2';
import { RecaptchaModule } from 'angular-google-recaptcha';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  DashboardComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  FilterPipeModule,
  NgxPaginationModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  RecaptchaModule.forRoot({
    siteKey: '6Lc_RJ8UAAAAAEmfVWODjvfVugo4TSB7iXruaDoj',
  }),
  ToastrModule.forRoot({
    timeOut: 1000,
  }),
  ],
  providers: [LoginService,
    AuthGuard,
    AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
