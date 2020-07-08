import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient){}
  private url='http://localhost:1234/login';

  DoLogin(bodydata){
    return this.http.post(`${this.url}`,bodydata)
  }



}
