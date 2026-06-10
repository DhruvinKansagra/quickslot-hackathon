const prisma = require("./prisma");

async function main() {
  // Clear old data
  await prisma.booking.deleteMany();
  await prisma.user.deleteMany();
  await prisma.venue.deleteMany();

  // Users
  const user1 = await prisma.user.create({
    data: {
      name: "User 1",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "User 2",
    },
  });

  // Venues
  await prisma.venue.createMany({
    data: [
      {
        name: "Badminton Court A",
        location: "Ahmedabad",
      },
      {
        name: "Badminton Court B",
        location: "Ahmedabad",
      },
      {
        name: "Football Turf",
        location: "Ahmedabad",
      },
    ],
  });

  console.log("Seed completed");
  console.log("User1:", user1.id);
  console.log("User2:", user2.id);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
