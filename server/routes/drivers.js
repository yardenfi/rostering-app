const express = require('express');


function createDriverRouter(driversData) {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.send(driversData);
  })
    .get("/:driverId", (req, res) => {
      res.send(driversData.find(otherDriver => req.params.driverId === otherDriver.id));
    });

  return router;
}

module.exports = {createDriverRouter};
