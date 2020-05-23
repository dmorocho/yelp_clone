const businessReviews = require("express").Router({ mergeParams: true });

const {
  fetchAllBizreviews,
  addReview,
} = require("../../queries/businesses/reviews");

businessReviews.get("/", fetchAllBizreviews); //Get all biz review based on id
businessReviews.post("/", addReview); //add review nested

module.exports = businessReviews;
