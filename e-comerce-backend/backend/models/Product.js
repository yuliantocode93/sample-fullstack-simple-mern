const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // //* Relasi
  // category: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Category",
  // },
  // tags: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Tags",
  // },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
