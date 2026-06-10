const express = require("express");
const router = express.Router();

const {
  createBooking,
  cancelBooking,
} = require("../controllers/booking.controller");

/**
 * @swagger
 * /api/v1/bookings:
 *   post:
 *     summary: Book a slot
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: header
 *         name: X-User-Id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - venueId
 *               - date
 *               - slotTime
 *             properties:
 *               venueId:
 *                 type: string
 *               date:
 *                 type: string
 *                 example: "2026-06-10"
 *               slotTime:
 *                 type: string
 *                 example: "08:00"
 *     responses:
 *       201:
 *         description: Slot booked successfully
 *       409:
 *         description: Slot already booked
 *       400:
 *         description: Invalid request
 */
router.post("/", createBooking);

/**
 * @swagger
 * /api/v1/bookings/{bookingId}:
 *   delete:
 *     summary: Cancel a booking
 *     description: Deletes an existing booking and frees the slot
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: bookingId
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking cancelled successfully
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:bookingId", cancelBooking);

module.exports = router;
