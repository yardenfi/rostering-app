import { Component, OnInit } from '@angular/core';
import {AssignmentsService} from "../../services/assignments/assignments.service";
import {IAssignment} from "../../models/assignments/assignment.interface";

@Component({
  selector: 'app-assignments-table',
  templateUrl: './assignments-table.component.html',
  styleUrls: ['./assignments-table.component.css']
})
export class AssignmentsTableComponent implements OnInit {
  assignments: IAssignment[] = [];

  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {
    this.assignmentsService.getAssignments().subscribe(assignments => this.assignments = assignments);
  }

}
