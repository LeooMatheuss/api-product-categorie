const productController = require("../controllers/product");
const Joi = require("@hapi/joi");

module.exports = [
  ({
    method: "POST",
    path: "/product",
    handler: productController.save,
 
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
}),




  {
    method: "GET",
    path: "/product",
    handler: productController.find,
  
  },

  {
    method: "GET",
    path: "/product/{id}",
    handler: productController.findById,
  },

  ({
    method: "PUT",
    path: "/product/{id}",
    handler: productController.findByIdAndUpdate,
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string().optional(),
          unitprice: Joi.number().optional(),
          sku: Joi.string().required(),
          description: Joi.string().optional(),
        }),
        failAction: (request, h, error) => {
          return error.isJoi
            ? h.response(error.details[0]).takeover()
            : h.response(error).takeover();
        },
      },
    },
  }),

  {
    method: "DELETE",
    path: "/product/{id}",
    handler: productController.findByIdAndDelete,
  },
];
