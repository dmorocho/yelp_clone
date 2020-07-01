const businesses = require("express").Router();
const businessReviews = require("./reviews.js");

businesses.use("/:id/reviews", businessReviews);
// businesses.post("/:id/reviews", businessReviews);

const {
  getAllBusinesses,
  getBusiness,
  addBusiness,
  updateBusiness,
  deleteBusiness,
  searchTermBizreviews,
  quickSearchTermBizreviews,
} = require("../../queries/businesses/businesses");

businesses.get("/", getAllBusinesses); //  Get all businesses
businesses.post("/search/", searchTermBizreviews); //
businesses.get("/search/", searchTermBizreviews); //
// businesses.get("/search/", searchTermBizreviews);
businesses.get("/:id", getBusiness); //Get single biz
businesses.get("/search/:search", quickSearchTermBizreviews); //quick live search
businesses.patch("/:id", updateBusiness); //Update single business
businesses.delete("/:id", deleteBusiness); //Delete single biz
module.exports = businesses;
