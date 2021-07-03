import { Component, OnInit } from '@angular/core';
import {DriversService} from "../../services/drivers/drivers.service";
import {Driver} from "../../models/drivers/driver";
import {AssignmentsService} from "../../services/assignments/assignments.service";
import {IAssignment} from "../../models/assignment/assignment.interface";

@Component({
  selector: 'app-drivers-table',
  templateUrl: './drivers-table.component.html',
  styleUrls: ['./drivers-table.component.css']
})
export class DriversTableComponent implements OnInit {
  public drivers: Driver[] = [];
  public assignmentsByDriver: Map<string, IAssignment> = new Map<string, IAssignment>();

  constructor(private driversService: DriversService, private assignmentsService: AssignmentsService) {}

  ngOnInit(): void {
    this.driversService.getDrivers().subscribe(drivers => this.drivers = drivers);
    this.assignmentsService.getAssignments().subscribe(this.initializeAssignments);
  }

  private initializeAssignments = (assignments: IAssignment[]) => {
    this.assignmentsByDriver.clear();
    for (const assignment of assignments) {
      this.assignmentsByDriver.set(assignment.driverId, assignment);
    }
  }
}
