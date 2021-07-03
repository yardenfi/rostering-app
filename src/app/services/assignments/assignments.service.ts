import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Driver} from "../../models/drivers/driver";
import {IDriver} from "../../models/drivers/driver.interface";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {IAssignment} from "../../models/assignments/assignment.interface";
import {Assignment} from "../../models/assignments/assignment";

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private http: HttpClient) { }

  getAssignments(): Observable<IAssignment[]> {
    return this.http.get<IAssignment[]>(environment.serverUrl + "/assignments", {responseType: 'json'}).pipe(
      map<IAssignment[], Assignment[]>(assignments => assignments.map(Assignment.fromData))
    );
  }
}
