import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { ITask } from 'src/app/interface/todo';
import { TasksService } from 'src/app/services/tasks.service';

interface categoryType{
  id:number,
  title:string;
  img:string;

}

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit{

  loginForm!:FormGroup;
  currentTask!: ITask;
  taskList:ITask[]=[];


  constructor(private fb:FormBuilder,
    private taskservice:TasksService){

  }

  ngOnInit(): void {
    
      this.loginForm = this.fb.group({
        category:[null],
        content:[null],
        isUrgent:[null],
      });
     this.createNewTask();
      
  }
  // methode pour appeler lors du clic du formulaire
  validated(){
    // je vais affecter les données recupérer du formulaire à la todo que j'ai creer à vide
  this.changeCategory();
  this.changeContent();
  this.changeIsUrgent();
  console.log("la nouvelle tache Assa",this.loginForm.value)
  this.taskList.push(this.loginForm.value);
  console.log("le tableau tasklist",this.taskList);
    // console.log("les donnée du formulaire",this.loginForm.get('content')!.value);

  }
  // j'affecte la valeure que j'ai cliqué dans la categorie à la categorie de ma tache fictive dans le service 
  changeCategory(){
    this.currentTask.category=this.loginForm.get("category")!.value;
    
  }
  changeContent(){
    this.currentTask.content=this.loginForm.get("content")?.value;
  }
  changeIsUrgent(){
    this.currentTask.isUrgent=this.loginForm.get('isUrgent')?.value;
  }
 
  // je cree un component vide que je vais modifier apres
   createNewTask() {
    this.currentTask = this.taskservice. createTodo();
  console.log("la tache vide  créer",this.currentTask);
  }

  categories: categoryType[] = [

    {

      id:1,
      title:"shopping",
      img:"assets/img/shopping.png"},
    { 
      id:2,
      title:"health",
      img:"assets/img/health.png"},
      
    {
      id:3,
      title:"work",
      img:"assets/img/work.png"},
  
      {id:4,
      title:"bills",
      img:"assets/img/bills.png"},
  
      {id:5,
        title:"cleaning",
        img:"assets/img/cleaning.png"},
  
      {id:6,
          title:"other",
          img:"assets/img/other.png"
      },
   ];
}
