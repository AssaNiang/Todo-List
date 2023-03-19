import { Component } from '@angular/core';
interface categoryType{
  id:number,
  title:string;
  img:string;

}

@Component({
  selector: 'app-category-tasks',
  templateUrl: './category-tasks.component.html',
  styleUrls: ['./category-tasks.component.css']
})
export class CategoryTasksComponent {


// categories: string[] = ["shopping", "health", "work", "bills", "cleaning", "other"];

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
        img:"assets/img/other.png"},
 ];

 chooseCategory(categoryselected:string){
  const newCategory= categoryselected as string

 }


}
