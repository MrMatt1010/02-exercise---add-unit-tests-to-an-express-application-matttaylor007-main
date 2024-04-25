const express = require("express");
const cors = require("cors");
const app = express();
const properties = require("./properties.json");
const filterProperties = require("./filterProperties");

app.use(cors());
app.use(express.json());

// FIXME: Create an endpoint that returns all the properties that are not private
app.get("/properties", (request, response) => {
  response.send(filterProperties(properties));
});

module.exports = app;
