import {ITaskItem} from "./task-item.interface";
import {TaskType} from "./task-type.enum";

export class TaskItem implements ITaskItem {
  constructor(public taskID: string,
              public type: TaskType) {
  }

  static fromData(taskData: ITaskItem): TaskItem {
    return new TaskItem(taskData.taskID, taskData.type);
  }
}
