const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "QuickSlot API",
      version: "1.0.0",
      description: "Sports Slot Booking API",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

module.exports = swaggerJsDoc(options);
