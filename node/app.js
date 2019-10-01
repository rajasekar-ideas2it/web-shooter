const express = require("express");
const cors=require("cors")
const port = 8001

var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(cors())

app.get("/", (req, res) => {
    console.log("Greeting from get method service")
    res.status(200)
    res.json({ msg: "hello from service" })
})

app.post("/", (req, res) => {
    console.log("Greeting from post method service")
    console.log(req.body)
    res.status(200)
    res.json(req.body)
})

app.listen(port, (req, res) => {
    console.log("Running on port "+port);
    console.log('---------------');
})


// curl --header "Content-Type: application/json" \
//   --request POST \
//   --data '{"username":"xyz","password":"xyz"}' \
//   http://localhost:8001

//   curl --request POST \
//   --data '{"username":"xyz","password":"xyz"}' \
//   http://localhost:8001