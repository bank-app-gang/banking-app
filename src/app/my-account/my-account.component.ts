import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthenticateService } from '../authenticate.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})


export class MyAccountComponent implements OnInit {

  AccountList :any

  constructor(private http: HttpClient, private authenticateService: AuthenticateService, private router:Router) { }

  ngOnInit()
  {
    
    if(localStorage.getItem('usertoken')) // check if token was created (meaning succesful login
    {
     // console.log(localStorage.getItem('usertoken'));
      this.authenticateService.getAccounts(localStorage.getItem('usertoken')).subscribe((data)=>{
        console.log(data);
        this.AccountList=data;
      });
      
    }
    
  }

}
