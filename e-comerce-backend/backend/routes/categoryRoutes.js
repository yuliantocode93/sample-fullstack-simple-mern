const express = require("express");
const router = express.Router();
const { getCategory, getCategoryById } = require("../controller/categoryController");

router.get("/categories", getCategory);
router.get("/categories/:id", getCategoryById);

module.exports = router;
