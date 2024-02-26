const { CartService } = require("../services/index");
const cartService = new CartService();
/**
 * POST
 * data -> req.body
 */
// console.log('ad jk');
const create = async (req, res) => {
  try {
    const cart = await cartService.createCart(req.body);
    return res.status(201).json({
      data: cart,
      success: true,
      message: "Successfully created a cart",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a cart",
      err: error,
    });
  }
};

// DELETE -> /cart/:id
// so you will get id in request params
const destroy = async (req, res) => {
  try {
    await cartService.deleteCart(req.params.id);
    return res.status(200).json({
      data: [1],
      success: true,
      message: "Successfully deleted a cart",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the cart",
      err: error,
    });
  }
};
// GET -> cart/:id
const get = async (req, res) => {
  try {
    const response = await cartService.getCart(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a cart",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the cart",
      err: error,
    });
  }
};

const getAllWithUserId = async (req, res) => {
  try {
    const carts = await cartService.getAllWithUserId(req.query);

    return res.status(200).json({
      data: carts,
      success: true,
      message: "Successfully fetched filtered carts",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the carts",
      err: error,
    });
  }
};
module.exports = {
  create,
  destroy,
  get,
  getAllWithUserId,
};
