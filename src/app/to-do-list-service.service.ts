import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { ToDoList } from './to-do-list';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ToDoListServiceService {
  list: any;
  constructor(private http: HttpClient) {}

  getList(): Observable<ToDoList[]> {
    return this.http.get<ToDoList[]>('http://localhost:8080/api/getAll');
  }
  addTask(todolist: ToDoList): Observable<Object> {
    return this.http.post('http://localhost:8080/api/tasks/add', todolist);
  }

  deleteTask(id: Number) {
    return this.http.delete('http://localhost:8080/api/delete/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getTaskById(id: Number): Observable<ToDoList> {
    return this.http.get<ToDoList>('http://localhost:8080/api/getBy/' + id);
  }

  updateTask(id: Number, todolist: ToDoList): Observable<Object> {
    return this.http.put('http://localhost:8080/api/update/' + id, todolist);
  }
}
