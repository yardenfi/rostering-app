import {Component, Input, OnInit} from '@angular/core';
import {IDriver} from "../../../models/drivers/driver.interface";
import {ITask} from "../../../models/tasks/task.interface";
import {AssignmentsService} from "../../../services/assignments/assignments.service";
import {Assignment} from "../../../models/assignment/assignment";

@Component({
  selector: 'td[app-driver-cell]',
  templateUrl: './driver-cell.component.html',
  styleUrls: ['./driver-cell.component.css']
})
export class DriverCellComponent implements OnInit {
  @Input() drivers: IDriver[] = [];
  @Input() task!: ITask;
  public lastChosenDriver?: IDriver;

  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {
  }

  onDriverChange(driver: IDriver) {
    if (this.lastChosenDriver && driver) {
      console.log("update assignment");
    } else {
      console.log("create assignment");
      // const assignment = new Assignment(null, this.task.lineId, driver.id);
      // this.assignmentsService.createAssignment(assignment).subscribe(console.log);
    }
  }
}
