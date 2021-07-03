import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Driver} from "../../models/drivers/driver";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IDriver} from "../../models/drivers/driver.interface";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  constructor(private http: HttpClient) {}

  getDrivers(): Observable<IDriver[]> {
    return this.http.get<IDriver[]>(environment.serverUrl + "/drivers", {responseType: 'json'}).pipe(
      map<IDriver[], Driver[]>(drivers => drivers.map(Driver.fromData))
    );
  }
}
