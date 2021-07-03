const express = require('express');
const uuid = require("uuid");

/**
 *
 * @param {IAssignment[]} assignmentsData
 * @returns {Router}
 */
function createAssignmentsRouter(assignmentsData = []) {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.send(assignmentsData);
  })
    .get("/:assignmentId", (req, res) => {
      res.send(assignmentsData.find(otherAssignment => req.params.assignmentId === otherAssignment.id));
    })
    .post("/", (req, res) => {
      const assignment = req.body;
      const isAssignmentInvalid = !!assignmentsData.find(otherAssignment =>
        otherAssignment.driverId === assignment.driverId ||
        otherAssignment.taskLineId === assignment.taskLineId
      );
      if (isAssignmentInvalid) {
        res.status(409).send({error: "The task or driver specified is already assigned"})
      } else {
        assignment.id = uuid.v4();
        assignmentsData.push(assignment);
        res.send(assignment);
      }
    })
    .put("/:assignmentId", (req, res) => {
      const assignment = {
        id: req.params.assignmentId,
        driverId: req.body.driverId,
        taskLineId: req.body.taskLineId
      };

      const assignmentIndex = assignmentsData.findIndex(otherAssignment => otherAssignment.id === assignment.id);
      if (assignmentIndex === -1) {
        res.status(404);
        res.send({error: "Assignment not found"});
        return;
      }

      if (assignment.id !== req.params.assignmentId) {
        res.status(409).send({error: "The assignment id in the body and in the params do not match"})
        return;
      }

      const isAssignmentInvalid = !!assignmentsData.find(otherAssignment =>
        (otherAssignment.driverId === assignment.driverId ||
        otherAssignment.taskLineId === assignment.taskLineId) && otherAssignment.id !== req.params.assignmentId
      );
      if (isAssignmentInvalid) {
        res.status(409).send({error: "The task or driver specified is already assigned"})
      } else {
        assignmentsData[assignmentIndex] = assignment;
        res.send(assignment);
      }
    })
    .delete("/:assignmentId", (req, res) => {
      const assignmentId = req.params.assignmentId;
      const assignmentIndex = assignmentsData.findIndex(otherAssignment => otherAssignment.id === assignmentId);
      if (assignmentIndex === -1) {
        res.status(404);
        res.send({error: "Assignment not found"});
        return;
      }

      assignmentsData.splice(assignmentIndex, 1);
      res.send({message: `Assignment #${assignmentId} deleted`})
    });

  return router;
}

module.exports = {createAssignmentsRouter};
