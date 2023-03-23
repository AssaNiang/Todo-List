import { Injectable } from '@angular/core';
import {ITask} from 'src/app/interface/todo';
import { NewTaskComponent } from '../pages/new-task/new-task.component';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }
  createTask(){
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
  // je cree le panier de tache ici TaskBasket
private createTaskBasket(){
  const newTaskBasket=JSON.stringify([]);
  localStorage.setItem('taskBasket',newTaskBasket);

}
// je recupere le panier et le creer s'il n'existe pas

getTaskBasket(){
  // je recupere le panier de tache par sa clé taskBasket 
  const taskList=localStorage.getItem("taskBasket");
//  s'il existe 
  if(taskList){
    // je le transforme en obj et le retourne
    return JSON.parse(taskList);
  }
  else{
    // sion je le cree en appelant la fonction createTaskBasket
    this.createTaskBasket();
    // je rappelle getTaskbasket pour le recupérer
    this.getTaskBasket();
  }
}
public saveTask(tasks:ITask[]){
  localStorage.setItem("taskBasket",JSON.stringify(tasks))

}
// ajouter un tache à mon panier TasBasket
public addTask(newtask:ITask){
  // on recupere le panier
  const taskList=this.getTaskBasket();
  // on incremente la valeur de l'id en prenant la longeur du tableau +1
  newtask.id=taskList.length+1;
  // j'ajoute la nouvelle tache au taslist
  taskList.push(newtask);
  // j'enregistre le panier tasklist
  this.saveTask(taskList);
}
 
}
