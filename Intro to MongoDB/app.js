const express = require("express");
const productRoutes = require("./productRoutes");
const app = express();
const {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require("./productsOperations");
const mongoose = require("mongoose");
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/mernstack")
  .then(async () => {
    console.log("connected to mongodb");

    // const product = await createProduct("laptop", 500, [
    //   "reliable",
    //   "electronics",
    // ]);

    // const allProducts = await getAllProducts();
    // console.log(allProducts);

    //console.log(await deleteProduct("6576b4415fb88b202e949db8"));
    let updatedProduct = await updateProduct(
      "6576ab5957dc9541f10b46a6",
      "Hewlet Packard",
      10202,
      ["reliable", "electronics"]
    );
  })
  .catch((err) => {
    console.log(err);
  });

// Use product routes
app.use("/api/products", productRoutes);
app.listen(3000);
