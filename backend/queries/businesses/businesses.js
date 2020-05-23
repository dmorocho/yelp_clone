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
    let business = await dataBase.one("SELECT * FROM businesses WHERE id =$1", [
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

module.exports = {
  getAllBusinesses,
  getBusiness,
  addBusiness,
  updateBusiness,
  deleteBusiness,
};
