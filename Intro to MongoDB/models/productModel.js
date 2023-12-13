const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  title: String,
  price: Number,
  tags: [String],
  slug: {
    type: String,
    lowerCase: true,
  },
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
