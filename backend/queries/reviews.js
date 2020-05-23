const db = require("../db/index");

//create a user
const createUser = async (req, res, next) => {
  try {
    await db.none(
      "INSERT INTO users (id,email) VALUES (${id}, ${email}",
      req.body
    );
    res.json({
      message: "NEW USER CREATED",
    });
  } catch (err) {
    next(err);
  }
};

//get all users
const featchAllUsers = async (req, res, next) => {
  try {
    const users = await db.any("SELECT * FROM users");
    res.json({
      message: "ALL USERS",
      users,
    });
  } catch (err) {
    next(err);
  }
};
//delete a user
const deleteUser = async (req, res, next) => {
  try {
    const users = await db.any("SELECT * FROM users");
    res.json({
      message: "ALL USERS",
      users,
    });
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const users = await db.any("SELECT * FROM users where id LIKE ${id}");
    res.json({
      message: "ALL USERS",
      users,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { createUser, featchAllUsers, getUser, deleteUser };
