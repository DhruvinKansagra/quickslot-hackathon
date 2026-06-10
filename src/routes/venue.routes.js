const express = require("express");
const router = express.Router();
const prisma = require("../config/prisma");

/**
 * @swagger
 * /venues:
 *   get:
 *     summary: Get all venues
 *     tags:
 *       - Venues
 *     responses:
 *       200:
 *         description: List of venues
 */
router.get("/", async (req, res) => {
  try {
    const venues = await prisma.venue.findMany();

    res.status(200).json({
      success: true,
      data: venues,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
