import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateTasksComponent } from './update-tasks/update-tasks.component';

const routes: Routes = [
  { path: 'toDoList', component: ToDoListComponent },
  { path: 'addList', component: AddTaskComponent },
  { path: 'updatingTheTask/:id', component: UpdateTasksComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    AddTaskComponent,
    UpdateTasksComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
