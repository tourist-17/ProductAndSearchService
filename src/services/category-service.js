const CategoryRepository = require("../repository/category-repo");

class CategoryService {
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }
  async createCategory(data) {
    try {
      const category = await this.categoryRepository.createCategory(data);
      return category;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
  async deleteCategory(categoryId) {
    try {
      const responce = await this.categoryRepository.deleteCategory(categoryId);
      return responce;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }

  async updateCategory(categoryId, data) {
    try {
      const category = await this.categoryRepository.updateCategory(
        categoryId,
        data
      );
      return category;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }

  async getCategory(categoryId) {
    try {
      const category = await this.categoryRepository.getCategory(categoryId);
      return category;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }

  async getAllCategories(filter) {
    try {
      const category = await this.categoryRepository.getAllCategories({
        name: filter.name,
      });
      return category;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
}

module.exports = CategoryService;
