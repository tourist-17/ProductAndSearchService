const CrudService = require("./crud-service");
// const { crudRepository } = require("../repository/crud-repo");
const { ProductRepository } = require("../repository/index");
class ProductService extends CrudService {
  constructor() {
    const productRepository = new ProductRepository();
    super(productRepository);
  }
}

module.exports = ProductService;
