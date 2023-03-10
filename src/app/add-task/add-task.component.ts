import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../to-do-list';
import { ToDoListServiceService } from '../to-do-list-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  todolist: ToDoList = new ToDoList();
  constructor(private serv: ToDoListServiceService) {}

  ngOnInit(): void {}
  addTaskDetail() {
    this.serv.addTask(this.todolist).subscribe(
      (data) => {
        console.log(this.todolist);
      },
      (error) => console.log(error)
    );
  }
  onsubmit() {
    this.addTaskDetail();
  }
}
