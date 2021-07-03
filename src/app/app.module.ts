import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DriversService} from "./services/drivers.service";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { DriversTableComponent } from './components/drivers-table/drivers-table.component';
import { TasksTableComponent } from './components/tasks-table/tasks-table.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    DriversTableComponent,
    TasksTableComponent
  ],
  providers: [DriversService],
  bootstrap: [AppComponent]
})
export class AppModule { }
