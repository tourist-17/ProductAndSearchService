const { CartRepository } = require("../repository/index");
const ProductService = require("./product-service");
const productService = new ProductService();
class CartService {
  constructor() {
    this.cartRepository = new CartRepository();
  }
  async createCart(data) {
    try {
        
      const cart = await this.cartRepository.createCart(data);
      return cart;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
  async deleteCart(cartId) {
    try {
      const responce = await this.cartRepository.deleteCart(cartId);
      return responce;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }

  async getCart(cartId) {
    try {
      const cart = await this.cartRepository.getCart(cartId);
      return cart;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
  async getAllWithUserId(filter) {
    try {
      const cart = await this.cartRepository.getAllWithUserId({
        userId: filter.user_id,
      });
      for (const element of cart) {
        const productDetail = await productService.get(
          element.dataValues.product_id
        );
        Object.assign(element.dataValues, productDetail.dataValues);
      }
      return cart;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
}

module.exports = CartService;
