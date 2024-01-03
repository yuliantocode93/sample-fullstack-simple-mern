const Tags = require("../models/Tags");
const { sendResponseError } = require("../middleware/middleware");

const getTags = async (req, res) => {
  try {
    const tags = await Tags.find({ userId: req.user._id }).populate("productId");
    // console.log(category)
    res.status(200).send({ status: "ok", tags });
  } catch (err) {
    console.log(err);
    sendResponseError(500, `Error ${err}`, res);
  }
};

const getTagsById = async (req, res) => {
  try {
    const tagsById = await Tags.findById({ userId: req.user._id }).populate("productId");
    // console.log(carts)
    res.status(200).send({ status: "ok", tagsById });
  } catch (err) {
    console.log(err);
    sendResponseError(500, `Error ${err}`, res);
  }
};

module.exports = {
  getTags,
  getTagsById,
};
