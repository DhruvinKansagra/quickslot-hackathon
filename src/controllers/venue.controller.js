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

module.exports = {
  getAllVenues,
};
