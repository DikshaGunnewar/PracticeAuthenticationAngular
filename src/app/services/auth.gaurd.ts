import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGaurd implements CanActivate{
    constructor(private router:Router){}

    canActivate(){
        if(localStorage.getItem('currentUser')){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}