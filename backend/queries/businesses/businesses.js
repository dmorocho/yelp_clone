const db = require("../../db/index");

//get all businesses
const getAllBusinesses = async (req, res, next) => {
  try {
    let businesses = await db.any("SELECT * FROM businesses");
    res.status(200).json({
      status: "success",
      message: "retrieved all businesses",
      payload: businesses,
    });
  } catch (err) {
    res.status(555).json({
      status: err,
      message: "Get All businesses failed",
      payload: null,
    });

    next(err);
  }
};

// //get single businesses based on id
const getBusiness = async (req, res, next) => {
  try {
    let business = await db.one("SELECT * FROM businesses WHERE id= $1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      message: "retrieved single business",
      payload: business,
    });
  } catch (err) {
    res.status(555).json({
      status: err,
      message: "business not found",
      payload: null,
    });

    next(err);
  }
};
// add biz
const addBusiness = async (req, res, next) => {
  try {
    let businessAdded = await db.one(
      `INSERT INTO businesses (name, address, owner, bizType, offer, images) VALUES ('${req.body.name}','${req.body.address}','${req.body.owner}','${req.body.bizType}','${req.body.offer}','${req.body.images}') RETURNING *`
    );
    res.status(200).json({
      status: "success",
      message: "adding new business",
      payload: businessAdded,
    });
  } catch (err) {
    res.status(555).json({
      status: err,
      message: "business not added",
      payload: null,
    });
    next(err);
  }
};

const updateBusiness = async (req, res, next) => {
  try {
    let updatedBusiness = await db.one(
      `UPDATE businesses SET name = '${req.body.name}',address = '${req.body.address}' WHERE id=${req.params.id} RETURNING *`
    );
    res.status(200).json({
      status: "success",
      message: "Business updated",
      payload: updatedBusiness,
    });
  } catch (err) {
    res.status(555).json({
      status: err,
      message: "Business could not be updated",
      payload: null,
    });
    next(err);
  }
};

//Delete single business
const deleteBusiness = async (req, res, next) => {
  try {
    let deletedBusiness = await db.any(
      `DELETE FROM businesses WHERE id = ${req.params.id} RETURNING *`
    );
    res.status(200).json({
      status: "success",
      message: "Business Deleted",
      payload: deletedBusiness,
    });
  } catch (error) {
    res.status(555).json({
      status: err,
      message: "business could not be deleted",
      payload: null,
    });
    next(error);
  }
};

const searchTermBizreviews = async (req, res, next) => {
  try {
    // ("%${req.body.search}%");
    let businesses = await db.any(
      `SELECT DISTINCT name,
      AVG(rating) AS rating, 
      ARRAY_AGG(businesses.id) AS bizid,
      ARRAY_AGG(businesses.images) AS images,
      ARRAY_AGG(businesses.address) AS address,
      ARRAY_AGG(businesses.phone_number) AS phone_number,
      ARRAY_AGG(businesses.categories) AS categories,
      ARRAY_AGG(businesses.url) AS url,
      ARRAY_AGG(businesses.latitude) AS latitude,
      ARRAY_AGG(businesses.longitude) AS longitude,
      ARRAY_AGG(businesses.budget) AS budget
       FROM businesses
      LEFT JOIN reviews ON reviews.businessid = businesses.id  
      /*WHERE UPPER(businesses.name) LIKE UPPER('%food%') 
      OR UPPER(businesses.categories) LIKE UPPER('%food%')*/
      /*WHERE latitude BETWEEN  (40.7365401 - .002) AND (40.7365401 + .002)
      AND longitude BETWEEN  (-73.9192648 - .002) AND (-73.9192648 + .002)*/
      WHERE UPPER(businesses.name) LIKE UPPER('%${req.body.search}%') 
      OR UPPER(businesses.categories) LIKE UPPER('%${req.body.search}%')
      GROUP BY businesses.name`
    );
    res.status(200).json({
      status: "success",
      message: "retrieved all businesses",
      payload: businesses,
    });
  } catch (err) {
    res.status(555).json({
      status: err,
      message: "Get All businesses failed",
      payload: null,
    });

    next(err);
  }
};

const quickSearchTermBizreviews = async (req, res, next) => {
  try {
    // ("%${req.body.search}%");
    let businesses = await db.any(
      `SELECT DISTINCT name, id
      FROM businesses
      WHERE UPPER(businesses.name) LIKE UPPER('%${req.params.search}%') 
      OR UPPER(businesses.categories) LIKE UPPER('%${req.params.search}%')
      LIMIT 5`
    );
    res.status(200).json({
      status: "success",
      message: "retrieved all businesses",
      payload: businesses,
    });
  } catch (err) {
    res.status(555).json({
      status: err,
      message: "Get All businesses failed",
      payload: null,
    });

    next(err);
  }
};

module.exports = {
  getAllBusinesses,
  getBusiness,
  addBusiness,
  updateBusiness,
  deleteBusiness,
  searchTermBizreviews,
  quickSearchTermBizreviews,
};
