import { Component, OnInit } from '@angular/core';
import { fade, slide, todoAnimation } from './../../animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    fade,
    slide,
    todoAnimation
  ]
})
export class TodoComponent implements OnInit {
  todos: any[] = [
    'has breakfast',
    'watch anime',
    'read',
    'study'
  ];
  newTodo: string;
  constructor() { }

  ngOnInit() {
  }

  addToList () {
    if (!this.newTodo)
      return;
    this.todos.splice(0, 0, this.newTodo);
    this.newTodo = '';
  }

  deleteTodo (index) {
    this.todos.splice(index, 1);
  }

}
