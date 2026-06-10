const express = require("express");
const cors = require("cors");
const prisma = require("./prisma");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
