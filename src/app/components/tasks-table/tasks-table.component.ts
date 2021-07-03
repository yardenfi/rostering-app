import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks/tasks.service";
import {ITask} from "../../models/tasks/task.interface";
import {IDriver} from "../../models/drivers/driver.interface";
import {DriversService} from "../../services/drivers/drivers.service";

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent implements OnInit {
  tasks: ITask[] = [];
  public drivers: IDriver[] = [];

  constructor(private tasksService: TasksService, private driversService: DriversService) { }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe(tasks => this.tasks = tasks);
    this.driversService.getDrivers().subscribe(drivers => this.drivers = drivers);
  }

}
