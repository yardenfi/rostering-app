const express = require('express');
const driversData = require('./data/drivers');
const {createDriverRouter} = require("./routes/drivers");
const bodyParser = require('body-parser');
const cors = require('cors');


const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/drivers", createDriverRouter(driversData));


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});
