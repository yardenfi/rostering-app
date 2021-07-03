import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DriversService} from "./services/drivers/drivers.service";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { DriversTableComponent } from './components/drivers-table/drivers-table.component';
import { TasksTableComponent } from './components/tasks-table/tasks-table.component';
import {TasksService} from "./services/tasks/tasks.service";
import {NgxRangeModule} from "ngx-range";
import {AssignmentsService} from "./services/assignments/assignments.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgxRangeModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    DriversTableComponent,
    TasksTableComponent
  ],
  providers: [DriversService, TasksService, AssignmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
