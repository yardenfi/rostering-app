import { Component, OnInit } from '@angular/core';
import {AssignmentsService} from "../../services/assignments/assignments.service";

@Component({
  selector: 'app-assignments-table',
  templateUrl: './assignments-table.component.html',
  styleUrls: ['./assignments-table.component.css']
})
export class AssignmentsTableComponent implements OnInit {

  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {
    this.assignmentsService.getAssignments().subscribe(console.log);
  }

}
