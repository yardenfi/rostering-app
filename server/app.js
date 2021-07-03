const express = require('express');
const driversData = require('./data/drivers');
const tasksData = require('./data/tasks');
const {createDriverRouter} = require("./routes/drivers");
const {createTasksRouter} = require("./routes/tasks");
const bodyParser = require('body-parser');
const cors = require('cors');


const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/drivers", createDriverRouter(driversData));
app.use("/tasks", createTasksRouter(tasksData));


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});
