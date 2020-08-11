const db = require("../seeds/dbConfig");

module.exports = {
  get,
  getById,
};

function get() {
  return db("cars");
}

function getById(id) {
    return db('cars')
    .where({id})
    .first()
}
