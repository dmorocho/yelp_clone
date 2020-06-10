const db = require("../db/index");

//create a user
const createUser = async (req, res, next) => {
  try {
    let newUser = await db.one(
      `INSERT INTO users ( id, email, first_name, last_name, DOB) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      [
        req.body.id,
        req.body.email,
        req.body.Firstname,
        req.body.Lastname,
        req.body.DOB,
      ]
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
