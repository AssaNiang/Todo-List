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

  constructor(private fb:FormBuilder,
    private taskservice:TasksService){

  }

  ngOnInit(): void {
    
      this.loginForm = this.fb.group({
        category:[null, Validators.required],
        content:[null, Validators.required],
        isUrgent:[false],
      });
      this.createNewTask();
    
      
  }
  // methode pour appeler lors du clic du formulaire
  validated(){
    // je vais affecter les données recupérer du formulaire à la todo que j'ai creer à vide
  this.changeCategory();
  this.changeContent();
  this.changeIsUrgent();
//  this.ChangeID();
// je fais les modification en fonction de la categorie,contenu,urgence
 console.log("le id  de ma tache a été modifié",this.currentTask);


  // this.currentTask = this.taskservice.createTask();
  
  
  
// je vais ajouter la tache au localstorage
this.taskservice.addTask(this.currentTask);

//   console.log("les valeur du formulaire",this.loginForm.value)
//   this.taskList.push(this.currentTask);
//   console.log("longeur tableau",this.taskList.length +1)
//   console.log("le tableau tasklist",this.taskList);
    // console.log("les donnée du formulaire",this.loginForm.get('content')!.value);

  }
  // ChangeID(){
  //   this.currentTask.id=this.taskList.length+1;
  //   console.log("le id qui s'accremente", this.currentTask.id);
  // }
  // j'affecte la valeure que j'ai cliqué dans la categorie à la categorie de ma tache fictive dans le service 
  changeCategory(){
    this.currentTask.category=this.loginForm.get("category")!.value;
    console.log( "la category:",this.currentTask.category);
  }
  changeContent(){
    this.currentTask.content=this.loginForm.get("content")?.value;
    console.log("le contenu:", this.currentTask.content);
  }
  changeIsUrgent(){
    
    this.currentTask.isUrgent=this.loginForm.get('isUrgent')!.value;
    console.log("le isurgent:", this.currentTask.isUrgent);

  }
 
  // je cree un component vide que je vais modifier apres
   createNewTask() {
    this.currentTask = this.taskservice.createTask();
  console.log("une tache cree",this.currentTask);
  }

  categories: categoryType[] = [

    {

      id:1,
      title:"🛍️",
     img:"🛍️"
    },
    { 
      id:2,
      title:"💊",
      img:"💊"},
      
    {
      id:3,
      title:"💼",
      img:"💼"},
  
      {id:4,
      title:"🧾",
      img:"🧾"},
  
      {id:5,
        title:"🧽",
        img:"🧽"},
  
      {id:6,
          title:"🤷‍♀️",
          img:"🤷‍♀️"
      },
   ];
}
