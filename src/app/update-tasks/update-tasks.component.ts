import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoList } from '../to-do-list';
import { ToDoListServiceService } from '../to-do-list-service.service';

@Component({
  selector: 'app-update-tasks',
  templateUrl: './update-tasks.component.html',
  styleUrls: ['./update-tasks.component.css'],
})
export class UpdateTasksComponent implements OnInit {
  todolist: ToDoList = new ToDoList();
  id!: Number;

  constructor(
    private service: ToDoListServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getTaskById(this.id).subscribe((data) => {
      this.todolist = data;
    });
  }
  onsubmit() {
    this.service.updateTask(this.id, this.todolist).subscribe((data) => {
      this.goToTaskList();
    });
  }
  goToTaskList() {
    this.router.navigate(['/toDoList']);
  }
}
