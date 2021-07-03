const express = require('express');


function createAssignmentsRouter(assignmentsData) {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.send(assignmentsData);
  })
    .get("/:assignmentId", (req, res) => {
      res.send(assignmentsData.find(otherAssignment => req.params.assignmentId === otherAssignment.id));
    });

  return router;
}

module.exports = {createAssignmentsRouter};
