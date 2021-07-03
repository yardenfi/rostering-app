import {Component, OnInit} from '@angular/core';
import {DriversService} from "../../services/drivers/drivers.service";
import {Driver} from "../../models/drivers/driver";
import {AssignmentsService} from "../../services/assignments/assignments.service";
import {IAssignment} from "../../models/assignment/assignment.interface";
import {TasksService} from "../../services/tasks/tasks.service";
import {ITask} from "../../models/tasks/task.interface";

@Component({
  selector: 'app-drivers-table',
  templateUrl: './drivers-table.component.html',
  styleUrls: ['./drivers-table.component.css']
})
export class DriversTableComponent implements OnInit {
  public drivers: Driver[] = [];
  public tasks: ITask[] = [];

  constructor(private driversService: DriversService, private assignmentsService: AssignmentsService,
              private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.driversService.getDrivers().subscribe(drivers => this.drivers = drivers);
    this.tasksService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
}
