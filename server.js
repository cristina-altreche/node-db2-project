const express = require("express");
const helmet = require("helmet");
const carsRouter = require("./cars/carsRouter");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from server.js" });
});

server.use(helmet());
server.use(express.json());
server.use("/api/cars", carsRouter);

module.exports = server;
