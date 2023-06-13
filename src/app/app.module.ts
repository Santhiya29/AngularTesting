import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { FormComponent } from './form/form.component';
import { Store, StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
  ],
  providers: [Store,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
