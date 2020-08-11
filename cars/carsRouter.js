const express = require("express");
const knex = require("knex");
const Cars = require("../cars/carsDb");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.status(200).json({ message: "Success from router!" });
// });

router.get("/", (req, res) => {
  Cars.get()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Cars.getById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((data) => {
      res.status(500).json({ error: "Something went wrong" });
    });
});

module.exports = router;
