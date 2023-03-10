import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoList } from '../to-do-list';
import { ToDoListServiceService } from '../to-do-list-service.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  list!: ToDoList[];

  constructor(
    private service: ToDoListServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTasklist();
  }

  getTasklist() {
    this.service.getList().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    });
  }
  deleteTasks(row: any) {
    this.service.deleteTask(row.id).subscribe((res) => {
      alert('deleted succesfully');
      this.getTasklist();
    });
  }

  // getTaskById()
  // modifyTasks(row:any){

  // }
  updatingTask(id: Number) {
    this.router.navigate(['updatingTheTask', id]);
  }
}
