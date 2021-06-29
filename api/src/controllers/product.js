const Product = require("../models/product");

const save = async (request, h) => {
  try {
    const product = new Product(request.payload);
    const productSaved = await product.save();

    return h.response(productSaved);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const find = async (request, h) => {
  try {
    const products = await Product.find();
    return h.response(products);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const findById = async (request, h) => {
  try {
    const product = await Product.findById(request.params.id);
    return h.response(product);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const findByIdAndUpdate = async (request, h) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      request.params.id,
      request.payload,
      {
        new: true,
      }
    );
    return h.response(updatedProduct);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const findByIdAndDelete = async (request, h) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(
      request.params.id
    );
    return h.response(deletedProduct);
  } catch (error) {
    return h.response(error).code(500);
  }
};

module.exports = {
  save,
  find,
  findById,
  findByIdAndUpdate,
  findByIdAndDelete,
};
