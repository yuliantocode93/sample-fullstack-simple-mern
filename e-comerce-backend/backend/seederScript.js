require("dotenv").config();

const productData = require("./data/products");
const categoryData = require("./data/category");
const tagsData = require("./data/tags");
const { connectDB } = require("./config/db");
const Product = require("./models/Product");
const Category = require("./models/Category");
const Tags = require("./models/Tags");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productData);
    await Category.deleteMany({});
    await Category.insertMany(categoryData);
    await Tags.deleteMany({});
    await Tags.insertMany(tagsData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
