const productModel = require("./models/productModel");
const createProduct = async (title, price, tags) => {
  console.log("create Product");
  let product = new productModel();
  product.title = title;
  product.price = price;
  product.tags = tags;
  await product.save();
  return product;
};

const updateProduct = async (_id, title, price, tags) => {
  console.log("Updated Product");
  let product = await productModel.findById(_id);
  product.title = title;
  product.price = price;
  product.tags = tags;
  await product.save();
  return product;
};

const getAllProducts = async () => {
  const products = await productModel.find();
  return products;
};
const deleteProduct = async (_id) => {
  const product = await productModel.findOneAndDelete({ _id });
  return product;
};

module.exports.createProduct = createProduct;
module.exports.getAllProducts = getAllProducts;
module.exports.deleteProduct = deleteProduct;
module.exports.updateProduct = updateProduct;
