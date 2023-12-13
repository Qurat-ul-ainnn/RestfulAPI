const productOperations = require("./productOperations");

// Controller function to get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await productOperations.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// Controller function to create a new product
const createProduct = async (req, res) => {
  const { title, price, tags } = req.body;
  try {
    const newProduct = await productOperations.createProduct(
      title,
      price,
      tags
    );
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

// Controller function to delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await productOperations.deleteProduct(id);
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
};
