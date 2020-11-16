const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

require("dotenv").config()
const process = require("process")

const app = express()

var corsOptions = {
  origin: "http://localhost:5000"
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

require("./src/routes/routes.js")(app)
const PORT = process.env.API_PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app
