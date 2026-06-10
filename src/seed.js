const prisma = require("./prisma");

async function main() {
  await prisma.user.createMany({
    data: [{ name: "User 1" }, { name: "User 2" }],
  });

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
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
