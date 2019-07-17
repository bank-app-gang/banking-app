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

  @Input() Account :any;

  constructor() { 
    console.log(this.Account);
  }

  ngOnInit()
   {
    
  }

}
