import {ITask} from "./task.interface";
import {ITaskItem} from "./task-item.interface";
import {TaskItem} from "./task-item";

export class Task implements ITask {
  constructor(public lineId: string,
              public lineDisplayId: string,
              public tasks: ITaskItem[]) {
  }

  static fromData(taskData: ITask) {
    const tasks = taskData.tasks.map(TaskItem.fromData);
    return new Task(taskData.lineId, taskData.lineDisplayId, tasks);
  }
}
