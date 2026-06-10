const express = require("express");
const router = express.Router();

const {
  getAllVenues,
  getVenueSlots,
} = require("../controllers/venue.controller");

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

/**
 * @swagger
 * /api/v1/venues/{venueId}/slots:
 *   get:
 *     summary: Get slots by venue and date
 *     tags:
 *       - Venues
 *     parameters:
 *       - in: path
 *         name: venueId
 *         required: true
 *         schema:
 *           type: string
 *         description: Venue ID
 *       - in: query
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *           example: 2026-06-10
 *         description: Booking date
 *     responses:
 *       200:
 *         description: Slots fetched successfully
 */
router.get("/:venueId/slots", getVenueSlots);

module.exports = router;
