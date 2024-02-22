const { Category } = require("../models/index");
const { Op } = require("sequelize");
class CategoryRepository {
  async createCategory({ name }) {
    try {
      const category = await Category.create({ name });
      return category;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }

  async deleteCategory(categoryId) {
    try {
      await Category.destroy({
        where: {
          id: categoryId,
        },
      });
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
  async updateCategory(categoryId, data) {
    // data is object {name : "Electronics"}
    try {
      //   const category = await Category.update(data, {
      //     where: {
      //       id: categoryId,
      //     },
      //   });
      const category = await Category.findByPk(categoryId);
      category.name = data.name;
      await category.save();
      return category;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
  async getCategory(categoryId) {
    try {
      const category = await Category.findByPk(categoryId);
      return category;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
  async getAllCategories(filter) {
    // filter can be empty also
    try {
      if (filter.name) {
        const categories = await Category.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return categories;
      }
      const categories = await Category.findAll();
      return categories;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
}
module.exports = CategoryRepository;
