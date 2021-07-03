import {IAssignment} from "./assignment.interface";

export class Assignment implements IAssignment {
  constructor(public id: string | null,
              public taskLineId: string,
              public driverId: string) {
  }

  static fromData(assignmentData: IAssignment): Assignment {
    return new Assignment(assignmentData.id, assignmentData.taskLineId, assignmentData.driverId);
  }
}
