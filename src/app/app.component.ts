import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-List';
  constructor(
    private taskservice:TasksService){

  }
  ngOnInit(){
    this.taskservice.getTaskBasket();
  }
}
