const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./routes/users");
const reviewsRouter = require("./routes/reviews");
const businessesRouter = require("./routes/businesses/businesses");
// const businessesRouter = require("./routes/businesses/reviews");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//All routes redirection
app.use("/api/users", userRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/businesses", businessesRouter);
// app.use("/api/businesses/reviews/:id");

app.use((err, req, res, next) => {
  console.log(err);
  if (err.status) {
    res.status(err.status).json(err);
  } else {
    res.status(500).json(err);
  }
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
