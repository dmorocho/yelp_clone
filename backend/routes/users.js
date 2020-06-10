const users = require("express").Router();
const {
  createUser,
  featchAllUsers,
  getUser,
  deleteUser,
} = require("../queries/users");

const { checkFirebaseToken } = require("../middleware/auth");

//create a user
users.post("/", createUser);

// get all users
users.get("/", checkFirebaseToken, featchAllUsers);
//create a user
users.get("/:id", getUser);
// get all users
users.delete("/:id", deleteUser);

module.exports = users;
