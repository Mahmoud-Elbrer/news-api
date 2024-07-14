const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");


const URL = process.env.ROUTES_URL;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "News-Api",
      description: "News-Api Description",
      contact: {
        name: "Mahmoud Abdalla",
        email: "mahmoud.elbrer@gmail.com",
        // url: "https://github.com/DesmondSanctity/node-js-swagger",
      },
      version: "1.0.0",
    },
    servers: [
      {
        url: URL,
        description: "Local server",
      },
      {
        url: URL,
        description: "Live server",
      },
    ],
  },
  // looks for configuration in specified directories
  apis: ["./routes/*.js"],
};

module.exports = function (app) {
  const specs = swaggerJsDoc(options);
  app.use("/api-docs/", swaggerUI.serve, swaggerUI.setup(specs));
}