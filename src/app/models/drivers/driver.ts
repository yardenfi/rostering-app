import {IDriver} from "./driver.interface";

export class Driver implements IDriver {
  constructor(public id: string,
              public name: string,
              public phone: string,
              public group: string) {
  }

  static fromData(driverData: IDriver) {
    return new Driver(
      driverData.id,
      driverData.name,
      driverData.phone,
      driverData.group
    )
  }
}

