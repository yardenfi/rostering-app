import {Router} from "express";
import {IDriver} from "../../src/app/models/drivers/driver.interface";

declare function createTasksRouter(driversData: IDriver[]): Router;
