const reviews = require("express").Router();

const {
  fetchAllreviews,
  getReview,
  // addReview,
  deleteReview,
} = require("../queries/reviews");

reviews.get("/", fetchAllreviews); //  Get all reviews
reviews.get("/:id", getReview); //Get single review
// reviews.patch("/:id", updatereview); //Update single review
reviews.delete("/:id", deleteReview); //Delete single review
module.exports = reviews;
