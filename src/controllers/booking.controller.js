const prisma = require("../config/prisma");

const createBooking = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];

    const { venueId, date, slotTime } = req.body;

    if (!userId || !venueId || !date || !slotTime) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const booking = await prisma.booking.create({
      data: {
        venueId,
        userId,
        date,
        slotTime,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Slot booked successfully",
      data: booking,
    });
  } catch (error) {
    // Prisma Unique Constraint Error
    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        message: "Slot already booked",
      });
    }

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Booking failed",
    });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const { userId } = req.params;

    const bookings = await prisma.booking.findMany({
      where: {
        userId,
      },
      include: {
        venue: true,
      },
    });

    return res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
    });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;

    await prisma.booking.delete({
      where: {
        id: bookingId,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Booking cancelled",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to cancel booking",
    });
  }
};

module.exports = {
  createBooking,
  getUserBookings,
  cancelBooking,
};
