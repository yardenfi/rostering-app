import {IAssignment} from "./assignment.interface";
import {ITask} from "./task.interface";
import {Task} from "./task";

export class Assignment implements IAssignment {
  constructor(public lineId: string,
              public lineDisplayId: string,
              public tasks: ITask[]) {
  }

  static fromData(assignmentData: IAssignment) {
    const tasks = assignmentData.tasks.map(Task.fromData);
    return new Assignment(assignmentData.lineId, assignmentData.lineDisplayId, tasks);
  }
}
