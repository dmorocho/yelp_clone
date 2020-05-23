const users = require("express").Router();
const {
  createUser,
  featchAllUsers,
  getUser,
  deleteUser,
} = require("../queries/users");

//create a user
users.post("/", createUser);

// get all users
users.get("/", featchAllUsers);
//create a user
users.get("/:id", getUser);
// get all users
users.delete("/:id", deleteUser);

module.exports = users;
