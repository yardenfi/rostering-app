import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ITask} from "../../models/tasks/task.interface";
import {environment} from "../../../environments/environment";
import {finalize, map} from "rxjs/operators";
import {IAssignment} from "../../models/assignment/assignment.interface";
import {Assignment} from "../../models/assignment/assignment";

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  private assignments$: BehaviorSubject<IAssignment[]> = new BehaviorSubject<IAssignment[]>([]);
  private hasRequestedAssignments: boolean = false;

  constructor(private http: HttpClient) { }

  getAssignments(): Observable<IAssignment[]> {
    if (!this.hasRequestedAssignments) {
      this.http.get<IAssignment[]>(environment.serverUrl + "/assignments", {responseType: 'json'}).pipe(
        map<IAssignment[], Assignment[]>(assignments => assignments.map(Assignment.fromData)),
        finalize(() => this.hasRequestedAssignments = true)
      ).subscribe(assignments => this.assignments$.next(assignments))
    }

    return this.assignments$;
  }
}
