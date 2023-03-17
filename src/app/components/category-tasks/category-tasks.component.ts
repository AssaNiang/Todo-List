import { Component } from '@angular/core';

@Component({
  selector: 'app-category-tasks',
  templateUrl: './category-tasks.component.html',
  styleUrls: ['./category-tasks.component.css']
})
export class CategoryTasksComponent {


categories: string[] = ["shopping", "health", "work", "bills", "cleaning", "other"];

changeCategory(){

}

}
