import { Component, OnInit } from '@angular/core';
import {DriversService} from "../../services/drivers/drivers.service";
import {Driver} from "../../models/drivers/driver";

@Component({
  selector: 'app-drivers-table',
  templateUrl: './drivers-table.component.html',
  styleUrls: ['./drivers-table.component.css']
})
export class DriversTableComponent implements OnInit {
  public drivers: Driver[] = [];

  constructor(private driversService: DriversService) {

  }

  ngOnInit(): void {
    this.driversService.getDrivers().subscribe(drivers => this.drivers = drivers);
  }

}
