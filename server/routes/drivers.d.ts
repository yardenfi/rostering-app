import {Router} from "express";
import {IDriver} from "../../src/app/models/drivers/driver.interface";

declare function createDriverRouter(driversData: IDriver[]): Router;
