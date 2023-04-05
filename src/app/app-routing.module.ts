import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
    
  },
  {
    path:"new-task",
  component:NewTaskComponent

  },
  {
    path:"history",
    component:HistoryComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
