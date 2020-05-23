const reviews = require("express").Router();

const {
  fetchAllreviews,
  getReview,
  addReview,
  //   updatereview,
  //   deletereview,
} = require("../queries/reviews");

reviews.get("/", fetchAllreviews); //  Get all reviews
reviews.get("/:id", getReview); //Get single review
reviews.post("/", addReview); //add review
// reviews.patch("/:id", updatereview); //Update single review
// reviews.delete("/:id", deletereview); //Delete single review
module.exports = reviews;
