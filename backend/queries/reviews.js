const db = require("../db/index");

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

//delete a review
const deleteReview = async (req, res, next) => {
  try {
    const deletedReview = await db.any(
      "DELETE FROM reviews WHERE id = ${req.params.id} RETURNING *"
    );
    res.json({
      message: "Deleted has been deleted",
      deletedReview,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  fetchAllreviews,
  getReview,
  // updatereview,
  deleteReview,
};
