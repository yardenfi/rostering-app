import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ITask} from "../../models/tasks/task.interface";
import {environment} from "../../../environments/environment";
import {finalize, map, tap} from "rxjs/operators";
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

  getAssignmentByDriverId(driverId: string) {
    return this.assignments$.pipe(
      map(assignments => assignments.find(assignment => assignment.driverId === driverId))
    )
  }

  createAssignment(assignment: IAssignment): Observable<IAssignment> {
    return this.http.post<IAssignment>(environment.serverUrl + "/assignments", assignment).pipe(
      map(Assignment.fromData),
      tap(newAssignment => {
        this.assignments$.value.push(newAssignment);
        this.assignments$.next(this.assignments$.value);
      })
    );
  }

  updateAssignment(assignment: IAssignment): Observable<IAssignment> {
    return this.http.put<IAssignment>(`${environment.serverUrl}/assignments/${assignment.id}`, assignment).pipe(
      map(Assignment.fromData),
      tap(updatedAssignment => {
        const assignmentIndex = this.assignments$.value.findIndex(other => other.id === updatedAssignment.id)
        if (assignmentIndex > -1) {
          this.assignments$.value[assignmentIndex] = updatedAssignment;
        }
        this.assignments$.next(this.assignments$.value);
      })
    );
  }
}
