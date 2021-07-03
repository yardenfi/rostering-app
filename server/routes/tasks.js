const express = require('express');


function createTasksRouter(tasksData) {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.send(tasksData);
  })
    .get("/:taskId", (req, res) => {
      res.send(tasksData.find(othertask => req.params.taskId === othertask.id));
    });

  return router;
}

module.exports = {createTasksRouter};
