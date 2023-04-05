import { Component } from '@angular/core';
import { ITask } from 'src/app/interface/todo';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 AllTask:ITask[]=[];
  // je cree une variable de taskList qui contient toutes mes taches
 
  taskUrgent:ITask[]=[];
  taskNoUrgent:ITask[]=[];
  constructor(private taskservice:TasksService){}

  ngOnInit(){
    
// this.getAllTask();
// this.getUrgentTask();
// this.getUrgentTask2(false);
this.taskUrgent=this.getUrgentTask();
this.taskNoUrgent=this.getNoUrgentTask();
  }

//  getAllTask(){
// const AllTask=this.taskservice.getTaskBasket();
// return AllTask;
//  }

getUrgentTask(){
  // const AllTask=this.taskservice.getTaskBasket();
  this.AllTask=this.taskservice.getTaskBasket();
let UrgentTask=this.AllTask.filter((UTask:ITask)=>UTask.isUrgent==true);
console.log("les taches urgentes",UrgentTask);
console.log("le tableau des taches",this.AllTask);
return UrgentTask;
 
}
// getNoUrgentTask(){
//   const AllTask=this.taskservice.getTaskBasket();
// let UrgentTask1=AllTask.filter((UTask:ITask)=>UTask.isUrgent===false);
// console.log("les taches non urgentes",UrgentTask1);
// return UrgentTask1;
 
// }
getNoUrgentTask(){
  this.AllTask=this.taskservice.getTaskBasket();
let UrgentTask1=  this.AllTask.filter((UTask:ITask)=>UTask.isUrgent===false);
console.log("les taches non urgentes",UrgentTask1);
return UrgentTask1;
 
}
// getUrgentTask(valid:boolean){
//   this.taskList=this.getAllTask();
//   let UrgentTask =this.taskList.filter((UTask)=>UTask.isUrgent===valid);
//  console.log("le tableau",this.taskList);
//  console.log("UrgentTask",UrgentTask);

// return UrgentTask;
// }

}
