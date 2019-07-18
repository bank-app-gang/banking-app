import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthenticateService } from '../authenticate.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  type :string// account type ( checking or saving or other)
  @Input() Account :any;

  constructor() { 
    
  }

  ngOnInit()
   {
    if (this.Account)
    {
      //0 for checking and 1 for saving
     var typeNum=this.Account.account_number[4];
     switch (typeNum)
     {
      case "0":
        this.type="Checking Account";
        break;
      case "1":
        this.type="Saving Account";
        break;
      default:
        this.type="Other";

     }
     
     
    }
  }

}
