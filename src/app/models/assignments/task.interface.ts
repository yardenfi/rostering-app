import {TaskType} from "./task-type.enum";

export interface ITask {
  taskID: string,
  type: TaskType
}
