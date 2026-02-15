import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITask } from '../interfaces/i-task';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http:HttpClient){}

  getTasks(){
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})
    const options = {headers}

    return this.http.get<{ tasks: ITask[] }>(`http://localhost:3000/tasks/get_all`,options)
  }
  
}
