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

router.post("/", (req, res) => {
  const newCar = req.body;
  Cars.insert(newCar)
    .then((postCar) => {
      res.status(201).json(postCar);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: "There was an error while saving the post to the database",
      });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const car = req.body;
  if (!car.make || !car.model) {
    res.status(400).json({
      errorMessage: "Please provide make and model.",
    });
  } else {
    Cars.update(id, car)
      .then((item) => {
        if (item > 0) {
          res.status(200).json(car);
        } else {
          res.status(404).json({
            message: "The post with the specified ID does not exist.",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ error: "The posts information could not be retrieved." });
      });
  }
});

module.exports = router;
