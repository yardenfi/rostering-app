import {ITaskItem} from "./task-item.interface";

export interface ITask {
  lineId: string,
  lineDisplayId: string,
  tasks: ITaskItem[]
}
