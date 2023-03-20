import { Injectable } from '@angular/core';
import {ITask} from 'src/app/interface/todo';
import { NewTaskComponent } from '../pages/new-task/new-task.component';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }
  createTodo(){
    const newTask:ITask = {
      id :1,
      content: "",
      category: "health" ,
      isUrgent: false,
      doneDate: null
      }
      console.log(newTask);
      return newTask;
     
  }
  


 
}
