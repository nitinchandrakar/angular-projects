import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

let TODOS: any = [
  { title: 'Install Angular CLI', isDone: true },
  { title: 'Style app', isDone: true },
  { title: 'Finish service functionality', isDone: false },
  { title: 'Setup API', isDone: false },
];

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private subject = new BehaviorSubject<any>(null);

  todoService$: Observable<any> = this.subject.asObservable();

  constructor() {}

  get(query = '') {
    let data;

    if (query === 'completed' || query === 'active') {
      const isCompleted = query === 'completed';
      data = TODOS.filter(
        (todo: { isDone: boolean }) => todo.isDone === isCompleted
      );
    } else {
      data = TODOS;
    }

    this.subject.next(data);
  }

  add(data: any) {
    TODOS.push(data);
    this.subject.next(TODOS);
  }

  put(changed: any) {
    const index = TODOS.findIndex((todo: any) => todo === changed);
    TODOS[index].title = changed.title;
    TODOS[index].editing = changed.editing;
    this.subject.next(TODOS);
  }

  delete(selected: { title: string; isDone: boolean }) {
    const index = TODOS.findIndex(
      (todo: { title: string; isDone: boolean }) => todo === selected
    );
    TODOS.splice(index, 1);
    this.subject.next(TODOS);
  }

  deleteCompleted() {
    TODOS = TODOS.filter((todo: { isDone: any }) => !todo.isDone);
    this.subject.next(TODOS);
  }

  toggle(selected: { isDone: boolean }) {
    const index = TODOS.findIndex((todo: any) => todo === selected);
    TODOS[index].isDone = !selected.isDone;
    this.subject.next(TODOS);
  }
}
