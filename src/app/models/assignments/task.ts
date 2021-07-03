import {ITask} from "./task.interface";
import {TaskType} from "./task-type.enum";

export class Task implements ITask {
  constructor(public taskID: string,
              public type: TaskType) {
  }

  static fromData(taskData: ITask): Task {
    return new Task(taskData.taskID, taskData.type);
  }
}
