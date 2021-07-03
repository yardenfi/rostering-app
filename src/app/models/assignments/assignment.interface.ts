import {ITask} from "./task.interface";

export interface IAssignment {
  lineId: string,
  lineDisplayId: string,
  tasks: ITask[]
}
