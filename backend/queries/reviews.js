const db = require("../db/index");

//create a review
const addReview = async (req, res, next) => {
  try {
    let review = await db.one(
      `INSERT INTO reviews (user_id,image,business_id,rating,body) VALUES (${user_id},'${image}',${business_id},'${rating}','${body}')`,
      req.body
    );
    res.json({
      message: "NEW REVIEW CREATED",
      payload: review,
    });
  } catch (err) {
    next(err);
  }
};

//get all reviews
const fetchAllreviews = async (req, res, next) => {
  try {
    const reviews = await db.any("SELECT * FROM reviews");
    res.json({
      message: "ALL reviews",
      payload: reviews,
    });
  } catch (err) {
    next(err);
  }
};

const getReview = async (req, res, next) => {
  try {
    const review = await db.any("SELECT * FROM reviews WHERE id =$1", [
      req.params.id,
    ]);
    res.json({
      message: " success",
      payload: review,
    });
  } catch (error) {
    console.log(err);
    next(err);
  }
};

//delete a user
const deleteReview = async (req, res, next) => {
  try {
    const users = await db.any("SELECT * FROM reviews");
    res.json({
      message: "Deleted USERS",
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
module.exports = {
  fetchAllreviews,
  getReview,
  addReview,
  // updatereview,
  // deletereview,
};
