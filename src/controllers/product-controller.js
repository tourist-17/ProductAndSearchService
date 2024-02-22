const { ProductService } = require("../services/index");

const productService = new ProductService();
const create = async (req, res) => {
  try {
    const response = await productService.create(req.body);
    return res.status(201).json({
      data: response,
      message: "Successfully created the product",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Cannot create a new product",
    });
  }
};

// DELETE -> /product/:id
// so you will get id in request params
const destroy = async (req, res) => {
  try {
    await productService.destroy(req.params.id);
    return res.status(200).json({
      data: [1],
      success: true,
      message: "Successfully deleted a product",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the product",
      err: error,
    });
  }
};

// PATCH ->/product/:id -> req.body
const update = async (req, res) => {
  try {
    const product = await productService.update(req.params.id, req.body);
    return res.status(200).json({
      data: product,
      success: true,
      message: "Successfully updated a product",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the product",
      err: error,
    });
  }
};

// GET -> product/:id
const get = async (req, res) => {
  try {
    const response = await productService.get(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a product",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the product",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  // with or without filter
  try {
    const products = await productService.getAll(req.query);
    return res.status(200).json({
      data: products,
      success: true,
      message: "Successfully fetched filtered products",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the products",
      err: error,
    });
  }
};
module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
