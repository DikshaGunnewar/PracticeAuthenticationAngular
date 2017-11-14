import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }
  
   url="http://localhost:55160/api/Account/Register/";
   // Add new User Service method
  public register(itemName): Observable<number> {
    debugger;
    console.log(itemName);
    return this.http.post(this.url, JSON.stringify(itemName));
  }
}
