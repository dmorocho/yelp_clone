const db = require("../db/index");

//create a user
const createUser = async (req, res, next) => {
  try {
    // await db.none('INSERT INTO users (id, username, profile_pic, password,email) VALUES ('${req.body.username}','${req.body.profile_pic}', '${req.body.password}', '${req.body.email}');
    let newUser = await db.one(
      `INSERT INTO users ( username, profile_pic, password, email) VALUES ('${req.body.username}','${req.body.profile_pic}', '${req.body.password}', '${req.body.email}')RETURNING *`
    );
    res.status(200).json({
      message: "NEW USER CREATED",
      newUser,
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
    let deleteduser = await db.any(
      `DELETE FROM users WHERE id = ${req.params.id} RETURNING *`
    );
    res.status(200).json({
      status: "success",
      message: "User Deleted",
      payload: deleteduser,
    });
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const users = await db.any("SELECT * FROM users WHERE id =$1", [
      req.params.id,
    ]);
    res.json({
      message: "ALL USERS",
      users,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { createUser, featchAllUsers, getUser, deleteUser };
