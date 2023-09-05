import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data1="Happy Banking with SBI"
  data2="Enter Account No."

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    alert("Welcome to SBI")
  }
  
  acChange(event:any){
    console.log(event.target.value); 
  }

  pwdChange(event:any){
    console.log(event.target.value);
  }
  // login(){    //(a:any,b:any)
  //   // console.log(a.value);
  //   // console.log(b.value);
  // }

}
