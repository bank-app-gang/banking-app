import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../app.component';
import {UserComponent} from '../user/user.component';
import { HttpClient } from '@angular/common/http'
import { AuthenticateService } from '../authenticate.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
 
})



export class SignInFormComponent implements OnInit
{

logInForm: FormGroup;
signUpForm:FormGroup;

 @Input() userList: UserComponent[];
 @Output() addNewUser= new EventEmitter();

  showLogIn:boolean;
 showSignUp:boolean;
 returnMessage:any;
  
constructor(private formBuilder: FormBuilder, private http: HttpClient, private authenticateService: AuthenticateService, private router:Router)
{

}

  ngOnInit()
  {
  this.logInForm=this.formBuilder.group({
    username:[''],
    password: ['']
  });
  this.signUpForm=this.formBuilder.group({
  username:[''],
  password:[''],
  repassword:['']
  });
 this.showLogIn=true;
 this.showSignUp=false;
 this.returnMessage='';
  }

  get f(){return this.logInForm.controls;}// function that returns user inputs (login and password) in login form
  get g(){return this.signUpForm.controls;}

  
// function called when user click login button, makes api call to the server,
//server returns a string stored in class variable returnMessage 
  logInFormHandler(e)
 {

  var credentials={username: this.f.username.value, password:this.f.password.value}
  this.authenticateService.verifyFullCredentials(credentials).subscribe( data =>
    {
      this.returnMessage=data.returnMessage;
      if(localStorage.getItem('usertoken')) // check if token was created (meaning succesful login)
      {
        console.log(localStorage.getItem('usertoken'));
             //send to my account page
      this.router.navigate(['/accounts']);
      }

 
    }); 

  }



  signUpFormHandler(e)
  {

  this.returnMessage='';

  var newUsername=this.g.username.value;
  var newPassword=this.g.password.value;
  var newRePassword=this.g.repassword.value;

 
  if( (newUsername=="") || (newPassword=="") || (newRePassword==""))
  {
  this.returnMessage+='<p>Please complete all the sign up fields </p>';
  }

  for ( var i=0; i<this.userList.length;i++)
  {
    if (this.userList[i].username==newUsername )
    {
   this.returnMessage+='<p>"'+newUsername+'" is already taken, please choose a different username!</p>';
   
    }
  }
  if (newPassword!=newRePassword)
  {
    this.returnMessage+='<p>Passwords entered do not match, please enter matching password </p>';
  }

  if (this.returnMessage=="")
  {

    this.returnMessage="Registration succesful, you can now Log In!!";
    var userToAdd= new UserComponent(newUsername,newPassword);
    this.addNewUser.emit(userToAdd);

  }

  }
  

  switchFormDisplay()
  {
    if(this.showLogIn)
    {
      this.returnMessage='';
      this.showLogIn=false;
      this.showSignUp=true;
      
    }
    else
    {
     if(this.showSignUp)
    {
      this.showLogIn=true;
      this.showSignUp=false;
    }
    }
  }

  
}

