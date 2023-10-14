import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from 'src/app/services/task.service'; 


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tarefas: Task[] = [];
  novaTarefaTitulo: string = '';

  constructor(private taskService: TaskService) { 
    this.tarefas = taskService.getTarefas();
  }

  ngOnInit(): void {
  }

  adicionaTarefa():void{
    if(this.novaTarefaTitulo){ // verifica se novaTarefaTitulo NÃO está vazio 
      const novaTarefa: Task = {
        title: this.novaTarefaTitulo,
        completed: false,
      };
      this.taskService.addTarefa(novaTarefa);
      this.novaTarefaTitulo = '';
    }
  }
  toggleCompleted(task: Task): void{
    this.taskService.toggleComplete(task);
  }

}
