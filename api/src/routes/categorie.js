const categorieController = require("../controllers/categorie");
const Joi = require("@hapi/joi");

module.exports = [
  {
    method: "POST",
    path: "/categorie",
    handler: categorieController.save,
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string(),
          unitprice: Joi.number(),
          sku: Joi.string(),
          description: Joi.string(),
        }),
        failAction: (request, h, error) => {
          return error.isJoi
            ? h.response(error.details[0]).takeover()
            : h.response(error).takeover();
        },
      },
    },


  },

  {
    method: "GET",
    path: "/categorie",
    handler: categorieController.find,
   
  },

  {
    method: "GET",
    path: "/categorie/{id}",
    handler: categorieController.findById,
  },

  {
    method: "PUT",
    path: "/categorie/{id}",
    handler: categorieController.findByIdAndUpdate,
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string(),
          unitprice: Joi.number(),
          sku: Joi.string(),
          description: Joi.string(),
        }),
        failAction: (request, h, error) => {
          return error.isJoi
            ? h.response(error.details[0]).takeover()
            : h.response(error).takeover();
        },
      },
    },
  },

  {
    method: "DELETE",
    path: "/categorie/{id}",
    handler: categorieController.findByIdAndDelete,
  },
];
