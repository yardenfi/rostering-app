import {TaskType} from "./task-type.enum";

export interface ITaskItem {
  taskID: string,
  type: TaskType
}
