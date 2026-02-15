import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iform } from '../Interfaces/iform';
import { ResponseObj } from '../Interfaces/response-obj';
@Injectable({
  providedIn: 'root',
})
export class Calls {
  
constructor(private http:HttpClient){}
  url = 'http://localhost:3000'

  registerCall(object:Iform): Observable<ResponseObj>{
    return this.http.post<ResponseObj>(`${this.url}/register`,object)
  }
   loginCall(object:Iform): Observable<ResponseObj>{
    return this.http.post<ResponseObj>(`${this.url}/login`,object)
  }


}
