const { Category } = require("../models/index");

class CategoryRepository {
  async createCategory({ name }) {
    try {
      const category = await Category.create({ name });
      return category;
    } catch (error) {
      throw error;
    }
  }

  async deleteRepository({ categoryId }) {
    try {
      await Category.destroy({
        where: {
          id: categoryId,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
module.exports = CategoryRepository;
