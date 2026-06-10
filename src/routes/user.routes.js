const express = require("express");
const router = express.Router();

const { getUserBookings } = require("../controllers/booking.controller");

/**
 * @swagger
 * /api/v1/users/{userId}/bookings:
 *   get:
 *     summary: Get all bookings for a user
 *     description: Returns all bookings created by a specific user
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User bookings fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get("/:userId/bookings", getUserBookings);

module.exports = router;
