import { Component, Input } from '@angular/core';


import { TasksService } from '../../Services/tasks-service';
import { ITask } from '../../interfaces/i-task';

@Component({
  selector: 'tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
tasks!:ITask[];

constructor(private service: TasksService) {}

ngOnInit() {
  this.service.getTasks().subscribe((result: { tasks:ITask[] }) => {
    this.tasks = result.tasks;
  });
}}
