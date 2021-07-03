import {Router} from "express";
import {IDriver} from "../../src/app/models/drivers/driver.interface";

declare function createAssignmentsRouter(driversData: IDriver[]): Router;
