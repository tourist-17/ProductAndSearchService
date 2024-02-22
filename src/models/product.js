"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.category, {
        foreignKey: "CategoryId",
        onDelete: "CASCADE", // when we delete a category then all products that belongs to that category will automatically deleted 
      });
    }
  }
  Product.init(
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      description: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      brand: { type: DataTypes.STRING, allowNull: false },
      availableOffer: DataTypes.INTEGER,
      quantity: { type: DataTypes.INTEGER, allowNull: false },
      rating: { type: DataTypes.STRING, allowNull: false },
      categoryId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
