import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { UserComponent } from './user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import{AuthenticateService } from './authenticate.service'
import { MyAccountComponent } from './my-account/my-account.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
<<<<<<< HEAD
import { AccountComponent } from './account/account.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
>>>>>>> 72fc5d0b13ac763609eab9f2d5c4ba8217892c03


@NgModule({
  declarations: [
    AppComponent,
    SignInFormComponent,
    UserComponent,
    MyAccountComponent,
    RegistrationComponent,
    PageNotFoundComponent,
<<<<<<< HEAD
    AccountComponent,
   
=======

>>>>>>> 72fc5d0b13ac763609eab9f2d5c4ba8217892c03
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [HttpClientModule,AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
