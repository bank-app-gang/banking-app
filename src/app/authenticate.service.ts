import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';


interface TokenResponse 
{
  token: string
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  returnMessage :any
  token :string
  
  constructor(private http: HttpClient) { }

  //save Function
  saveToken(token :string)
{
localStorage.setItem('usertoken', token)
this.token = token
}

//destroy user token


  //function that authenticate password at login page, username and password are passed in a json object (credential)
  verifyFullCredentials(credentials)
  {
    const base =  this.http.post('http://10.173.200.170:3000/axle/login',credentials)

    const request = base.pipe(
      map((data :TokenResponse)=> 
    {
      if (data.token)
      {
        this.saveToken(data.token)
        
      }
      return data
    })
    )
    return request
  }
}

