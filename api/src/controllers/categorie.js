const Categorie = require("../models/categorie");

const save = async (request, h) => {
  try {
    const categorie = new Categorie(request.payload);
    const categorieSaved = await categorie.save();

    return h.response(categorieSaved);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const find = async (request, h) => {
  try {
    const categories = await Categorie.find();
    return h.response(categories);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const findById = async (request, h) => {
  try {
    const categorie = await Categorie.findById(request.params.id);
    return h.response(categorie);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const findByIdAndUpdate = async (request, h) => {
  try {
    const updatedCategorie = await Categorie.findByIdAndUpdate(
      request.params.id,
      request.payload,
      {
        new: true,
      }
    );
    return h.response(updatedCategorie);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const findByIdAndDelete = async (request, h) => {
  try {
    const deletedCategorie = await Categorie.findByIdAndDelete(
      request.params.id
    );
    return h.response(deletedCategorie);
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
