import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { HistoryComponent } from './pages/history/history.component';
import { CategoryTasksComponent } from './components/category-tasks/category-tasks.component';
import { DescriptionTaskComponent } from './components/description-task/description-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewTaskComponent,
    HistoryComponent,
    CategoryTasksComponent,
    DescriptionTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
