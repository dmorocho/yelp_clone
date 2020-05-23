const db = require("../../db/index");

const fetchAllBizreviews = async (req, res, next) => {
  try {
    const reviews = await db.any(
      "SELECT * FROM reviews JOIN businesses ON reviews.businessid = businesses.id WHERE reviews.businessid =$1 ",
      [req.params.id]
    );
    res.json({
      message: " success",
      payload: reviews,
    });
  } catch (error) {
    console.log(err);
    next(err);
  }
};

//create a review
const addReview = async (req, res, next) => {
  try {
    let review = await db.any(
      `INSERT INTO reviews (userid,imageUrl,businessid,rating,body) VALUES (${req.body.userid},'${req.body.imageUrl}','${req.params.id}','${req.body.rating}','${req.body.body}') RETURNING *`
    );
    res.json({
      message: "NEW REVIEW CREATED",
      payload: review,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  fetchAllBizreviews,
  addReview,
};
