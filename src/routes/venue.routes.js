const express = require("express");
const router = express.Router();

const { getAllVenues } = require("../controllers/venue.controller");

/**
 * @swagger
 * /api/v1/venues:
 *   get:
 *     summary: Get all venues
 *     tags:
 *       - Venues
 *     responses:
 *       200:
 *         description: Venues fetched successfully
 */
router.get("/", getAllVenues);

module.exports = router;
