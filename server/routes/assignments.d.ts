import {Router} from "express";
import {IDriver} from "../../src/app/models/drivers/driver.interface";
import {IAssignment} from "../../src/app/models/assignment/assignment.interface";

declare function createAssignmentsRouter(assignmentsData: IAssignment[]): Router;
