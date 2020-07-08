import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {


  constructor(private http:HttpClient){}
  private url='http://localhost:1234/forget';

  forgetlink(bodydata){
    return this.http.post(`${this.url}`,bodydata)
  }




}
