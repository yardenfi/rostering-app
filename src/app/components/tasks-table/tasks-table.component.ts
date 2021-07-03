import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks/tasks.service";
import {ITask} from "../../models/tasks/task.interface";

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

}
