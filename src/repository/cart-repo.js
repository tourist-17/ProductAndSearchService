const { Cart } = require("../models/index.js");
class CartRepository {
  async createCart({ product_id, user_id }) {
    try {
      const cart = await Cart.create({ product_id, user_id });
      return cart;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }

  async deleteCart(cartId) {
    try {
      await Cart.destroy({
        where: {
          id: cartId,
        },
      });
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }

  async getCart(cartId) {
    try {
      const cart = await Cart.findByPk(cartId);
      return cart;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }

  async getAllWithUserId(data) {
    // userId can be empty also
    try {
      if (data) {
        const cart = await Cart.findAll({
          where: {
            user_id: data.userId,
          },
        });
        return cart;
      }
      const cart = await Cart.findAll();
      return cart;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
}
module.exports = CartRepository;
