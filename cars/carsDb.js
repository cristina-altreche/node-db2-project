const db = require("../seeds/dbConfig");

module.exports = {
  get,
};

function get() {
  return db("cars");
}
