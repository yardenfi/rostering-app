import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {ITask} from "../../models/tasks/task.interface";
import {Task} from "../../models/tasks/task";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(environment.serverUrl + "/tasks", {responseType: 'json'}).pipe(
      map<ITask[], Task[]>(tasks => tasks.map(Task.fromData))
    );
  }
}
