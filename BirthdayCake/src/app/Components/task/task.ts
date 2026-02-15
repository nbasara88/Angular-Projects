import { Component, Input } from '@angular/core';
import { ITask } from '../../interfaces/i-task';
@Component({
  selector: 'task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
 @Input() task!:ITask ;
  constructor(){}

}
