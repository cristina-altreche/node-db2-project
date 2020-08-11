const express = require("express");
const knex = require("knex");
const Cars = require("../cars/carsDb");

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./data/car-dealer.db3",
  },
  useNullAsDefault: true,
});

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Success!" });
});

module.exports = router;
