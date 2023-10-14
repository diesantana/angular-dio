  import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tarefas: Task[] = [];

  constructor() { }

  getTarefas(): Task[] {
    return this.tarefas;
  }

  addTarefa(task: Task):void{
    this.tarefas.push(task);
  }
  completeTarefa(task: Task):void{
    task.completed = true;
  }
  toggleComplete(task: Task):void{
    task.completed = !task.completed;
  }
}

export interface Task {
  title: string;
  completed: boolean;
}

// Este service está fazendo a gestão de dados e cuidando da lógica de negocios. 