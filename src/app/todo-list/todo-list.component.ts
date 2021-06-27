import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoStore$ = Subscription;

  public activeTasks: any;
  public newTodo: any;
  public path: string | undefined;

  constructor(public todoService: TodoService, private route: ActivatedRoute) {}

  getTodos(query = '') {
    this.todoService.get(query);
  }

  getActiveList(todos: any) {
    return todos.filter((todo: any) => !todo.isDone).length;
  }

  addTodo() {
    this.todoService.add({ title: this.newTodo, isDone: false });
  }

  updateTodo(todo: { title: any; editing: boolean }, newValue: any) {
    todo.title = newValue;
    todo.editing = false;
    this.todoService.put(todo);
  }

  destroyTodo(todo: { title: string; isDone: boolean }) {
    this.todoService.delete(todo);
  }

  clearCompleted() {
    this.todoService.deleteCompleted();
  }

  toggleTodo(todo: { isDone: boolean }) {
    this.todoService.toggle(todo);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.path = params['status'];
      this.getTodos(this.path);
    });
  }
}
