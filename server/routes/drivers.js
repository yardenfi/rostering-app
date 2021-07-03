const express = require('express');


function createDriverRouter(driversData) {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.send(driversData);
  })
    .get("/:driverId", (req, res) => {
      res.send(driversData.find(otherDriver => req.params.driverId === otherDriver.id));
    })
    .put("/:driverId", (req, res) => {
      let driverIndex = driversData.findIndex(otherDriver => req.params.driverId === otherDriver.id);
      driversData[driverIndex] = {...driversData[driverIndex], ...req.body};
      res.json(driversData[driverIndex]);
    });

  return router;
}

module.exports = {createDriverRouter};
