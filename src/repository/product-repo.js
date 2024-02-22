const CrudRepository = require("./crud-repo");
const { Product } = require("../models/index.js");
class ProductRepository extends CrudRepository {
  constructor() {
    super(Product);
  }
}

module.exports = ProductRepository;
