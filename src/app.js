const express = require("express");
const cors = require("cors");
const prisma = require("./config/prisma");
require("dotenv").config();

const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", async (req, res) => {
  try {
    await prisma.$runCommandRaw({ ping: 1 });

    res.json({
      success: true,
      db: "connected",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

const venueRoutes = require("./routes/venue.routes");
app.use("/api/v1/venues", venueRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
