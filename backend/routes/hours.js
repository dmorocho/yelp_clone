const hours = require("express").Router();
const { getHours } = require("../queries/hours");

hours.get("/:id", getHours); //  Get all hours

module.exports = hours;
