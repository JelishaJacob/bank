import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  data="data inside serivce file"

  serviceMethod(){
    alert("Service Method")
  }
}
