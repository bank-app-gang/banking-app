import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';
import {Router} from '@angular/router'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  transferForm: FormGroup;
  AccountList :any;
  returnMessage:any;
  

  ngOnInit()
  {
  this.transferForm=this.formBuilder.group({
    sender_account_number:[''],
    recipient_account_number: [''],
    amount:[''],
    note:[''],
  });

  if(localStorage.getItem('usertoken')) // check if token was created (meaning succesful login
  {
  
    this.authenticateService.getAccounts(localStorage.getItem('usertoken')).subscribe( (data)=>{
      
      this.AccountList=data;
      });
  }
 this.returnMessage='';
  }

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private authenticateService: AuthenticateService, private router:Router) { }


  get f(){return this.transferForm.controls;}// function that returns user inputs (sender, recipient,amount and note ) from transfer form
 

  
  // function called when user click login button, makes api call to the server,
  //server returns a string stored in class variable returnMessage 
    transferFormHandler(e)
   {
  
    var transfer={sender_account_number: this.f.sender_account_number.value, recipient_account_number: this.f.recipient_account_number.value,
      amount: this.f.amount.value, note:this.f.note.value };
    this.authenticateService.transfer(transfer,localStorage.getItem('usertoken')).subscribe( data =>
      {
        if(data.transferId)
        {
          console.log(data.transferId);
        }
        else if (data.returnMessage)
        {
          console.log(data.returnMessage);
          this.returnMessage=data.returnMessage;
        }
        else
        {
          console.log(data);
        }
  
   
      }); 
  
    }
}
