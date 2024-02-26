const CategoryController = require("../../controllers/category-controller");
const ProductController = require("../../controllers/product-controller");
const CartController = require("../../controllers/cart-controller");

const express = require("express");
const router = express.Router();
router.post("/category", CategoryController.create);
router.delete("/category/:id", CategoryController.destroy);
router.get("/category/:id", CategoryController.get);
router.get("/category", CategoryController.getAll);
router.patch("/category/:id", CategoryController.update);

router.post("/product", ProductController.create);
router.get("/product", ProductController.getAll);
router.get("/product/:id", ProductController.get);
router.patch("/product/:id", ProductController.update);
router.delete("/product/:id", ProductController.destroy);


router.post("/cart", CartController.create);
router.get("/cartWithUserId", CartController.getAllWithUserId);
router.get("/cart/:id", CartController.get);
router.delete("/cart/:id", CartController.destroy);
module.exports = router;
