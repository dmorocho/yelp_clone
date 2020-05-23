const db = require("../db/index");

//get all
const getAllposts = async (req, res, next) => {
  try {
    let animals = await db.any("SELECT * FROM animals");
    res.status(200).json({
      status: "success",
      message: "retrieved all animals",
      payload: animals,
    });
  } catch (err) {
    res.status(555).json({
      status: err,
      message: "Get All Animals failed",
      payload: null,
    });

    next(err);
  }
};

// //get single animal based on id
const getpost = async (req, res, next) => {
  try {
    let animal = await dataBase.one("SELECT * FROM animals WHERE id =$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      message: "retrieved single species",
      payload: animal,
    });
  } catch (err) {
    res.status(555).json({
      status: err,
      message: "animal not found",
      payload: null,
    });

    next(err);
  }
};
const addAnimal = async (req, res, next) => {
  try {
    let animalAdded = await dataBase.one(
      `INSERT INTO animals (species_id, nickname) VALUES ('${req.body.species_id}','${req.body.nickname}')RETURNING *`
    );
    res.status(200).json({
      status: "success",
      message: "adding new species",
      payload: animalAdded,
    });
  } catch (err) {
    res.status(555).json({
      status: err,
      message: "animal not added",
      payload: null,
    });
    next(err);
  }
};
const updateAnimal = async (req, res, next) => {
  try {
    let updatedAnimal = await dataBase.any(
      `UPDATE animals SET species_id = '${req.body.species_id}',nickname = '${req.body.nickname}' WHERE id=${req.params.id} RETURNING *`
    );
    res.status(200).json({
      status: "success",
      message: "Animal updated",
      payload: updatedAnimal,
    });
  } catch (err) {
    res.status(555).json({
      status: err,
      message: "animal could not be updated",
      payload: null,
    });
    next(err);
  }
};
//Delete single animal.
const deleteAimal = async (req, res, next) => {
  try {
    let deletedAnimal = await dataBase.any(
      `DELETE FROM animals WHERE id = ${req.params.id} RETURNING *`
    );
    res.status(200).json({
      status: "success",
      message: "Animal Deleted",
      payload: deletedAnimal,
    });
  } catch (error) {
    res.status(555).json({
      status: err,
      message: "animal could not be deleted",
      payload: null,
    });
    next(error);
  }
};

module.exports = { getAllposts, getpost, addpost, updatepost, deletepost };
