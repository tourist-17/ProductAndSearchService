const CategoryController = require("../../controllers/category-controller");
const express = require("express");
const router = express.Router();
router.post("/category", CategoryController.create);
router.delete("/category/:id", CategoryController.destroy);
router.get("/category/:id", CategoryController.get);
router.get("/category", CategoryController.getAll);
router.patch("/category/:id", CategoryController.update);
module.exports = router;
