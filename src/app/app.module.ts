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
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInFormComponent,
    UserComponent,
    MyAccountComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    AccountComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
