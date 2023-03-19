import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-description-task',
  templateUrl: './description-task.component.html',
  styleUrls: ['./description-task.component.css']
})
export class DescriptionTaskComponent {
  list:any[]=[];
  addtask(item:string){
    console.log("la valeur :",item);
    this.list.push({id:this.list.length,content:item});
    console.log(this.list);
    
  }
removeTask(id:number){
  console.log(" le id est de la tache à supprimer est :",id);
  this.list=this.list.filter(item=>item.id!==id);
}
}
