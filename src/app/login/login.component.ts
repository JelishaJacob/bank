import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data1="Happy Banking with SBI"
  data2="Enter Account No."

  acno:string=""
  psw:string=""

  constructor(private rout:Router) { }

  ngOnInit(): void {
    
  }

  login(){
    alert("Welcome to SBI")
    // 2 way binding - below 2 lines 
    console.log(this.acno);
    console.log(this.psw);
    this.rout.navigateByUrl("home")
  }
  
  acChange(event:any){
    this.acno=event.target.value; 
    console.log(this.acno);
  }

  pwdChange(event:any): void{
    console.log(event.target.value);
  }
  // login(a:any,b:any){    
  //       this.acno=a.value
  //       this.psw=b.value
  //   console.log(this.acno);
  //   console.log(this.psw);
  // }

}
