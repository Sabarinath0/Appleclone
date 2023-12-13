const productModel = require("../models/productModel");

const productPage = async (req, res) => {
  try {
    const products = await productModel.find({});
    console.log(products);
    res.render("user/products", { products });
  } catch (error) {
    res.send("Error page");
  }
};
const addProduct = async (req, res) => {
  try {
    const images = req.files?.map((file) => {
      return file.filename;
    });

    const product =await new productModel({
      name: req.body.productName,
      image: images,
      price: req.body.productPrice,
      description: req.body.description,
    }).save();

    res.send("addProduct");
  } catch (error) {
    console.log(error);
    res.send("Error Page");
  }
};
const addProductPage = async (req, res) => {
  try {
    res.render("admin/addProduct");
  } catch (error) {
    console.log(error);
    res.send("Error Page");
  }
};

module.exports = {
  productPage,
  addProduct,
  addProductPage,
};
