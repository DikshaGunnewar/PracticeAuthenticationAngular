import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myform: FormGroup;
  constructor(private fb: FormBuilder,private _authservice:AuthService) { }

  ngOnInit() {
      this.myform = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
    })
  }

//Validation error Messages.
 get Email() {
    return this.myform.get('Email');
  }
  get Password() {
    return this.myform.get('Password');
  }

  get ConfirmPassword() {
    return this.myform.get('ConfirmPassword');
  }


//Register Method.
itemData:any;
  onRegister() {
    let item = this.myform.value;
    //console.log(item);
    debugger;
    this._authservice.register(item)
      .subscribe(data => {
        //this.itemData = data;
        item=data;
        console.log(data);
      })
}


}
