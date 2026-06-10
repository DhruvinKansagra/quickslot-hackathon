const prisma = require("../config/prisma");

const getAllVenues = async (req, res) => {
  try {
    const venues = await prisma.venue.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return res.status(200).json({
      success: true,
      count: venues.length,
      data: venues,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch venues",
    });
  }
};

const getVenueSlots = async (req, res) => {
  try {
    const { venueId } = req.params;
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({
        success: false,
        message: "Date is required",
      });
    }

    const bookings = await prisma.booking.findMany({
      where: {
        venueId,
        date,
      },
    });

    const bookedTimes = bookings.map((booking) => booking.slotTime);

    const slots = [];
    const START_HOUR = 6;
    const END_HOUR = 22;

    for (let hour = START_HOUR; hour <= END_HOUR; hour++) {
      const time = `${hour.toString().padStart(2, "0")}:00`;

      slots.push({
        time,
        booked: bookedTimes.includes(time),
      });
    }

    return res.status(200).json({
      success: true,
      date,
      venueId,
      slots,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch slots",
    });
  }
};

module.exports = {
  getAllVenues,
  getVenueSlots,
};
