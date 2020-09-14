const db = require("../db/index");

const getHours = async (req, res, next) => {
  try {
    const hours = await db.any("SELECT * FROM operations WHERE id =$1", [
      req.params.id,
    ]);
    res.json({
      message: " success",
      payload: hours,
    });
  } catch (error) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  getHours,
};
