const Category = require("../models/Category");
const { sendResponseError } = require("../middleware/middleware");

const getCategory = async (req, res) => {
  try {
    const category = await Category.find({ userId: req.user._id }).populate("productId");
    // console.log(category)
    res.status(200).send({ status: "ok", category });
  } catch (err) {
    console.log(err);
    sendResponseError(500, `Error ${err}`, res);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const categoryById = await Category.findById({ userId: req.user._id }).populate("productId");
    // console.log(carts)
    res.status(200).send({ status: "ok", categoryById });
  } catch (err) {
    console.log(err);
    sendResponseError(500, `Error ${err}`, res);
  }
};

module.exports = {
  getCategory,
  getCategoryById,
};
