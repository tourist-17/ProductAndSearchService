const CategoryService = require("../services/category-service");
const categoryService = new CategoryService();
/**
 * POST
 * data -> req.body
 */
// console.log('ad jk');
const create = async (req, res) => {
  try {
    const category = await categoryService.createCategory(req.body);
    return res.status(201).json({
      data: category,
      success: true,
      message: "Successfully created a category",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a category",
      err: error,
    });
  }
};

// DELETE -> /category/:id
// so you will get id in request params
const destroy = async (req, res) => {
  try {
    await categoryService.deleteCategory(req.params.id);
    return res.status(200).json({
      data: [1],
      success: true,
      message: "Successfully deleted a category",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the category",
      err: error,
    });
  }
};
// PATCH ->/category/:id -> req.body
const update = async (req, res) => {
  try {
    const category = await categoryService.updateCategory(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      data: category,
      success: true,
      message: "Successfully updated a category",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the category",
      err: error,
    });
  }
};
// GET -> category/:id
const get = async (req, res) => {
  try {
    
    const response = await categoryService.getCategory(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a category",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the category",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories(req.query);
    return res.status(200).json({
      data: categories,
      success: true,
      message: "Successfully fetched filtered categories",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the categories",
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
