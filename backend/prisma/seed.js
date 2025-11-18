const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Destinations
  const syria = await prisma.destination.create({
    data: {
      country: 'Syrien',
      city: 'Damaskus',
      description: 'Historische Städte und Kultur in Syrien',
    },
  });

  const germany = await prisma.destination.create({
    data: {
      country: 'Deutschland',
      city: 'Berlin',
      description: 'Moderne Stadt mit reicher Geschichte',
    },
  });

  // Tours
  await prisma.tour.createMany({
    data: [
      {
        destinationId: syria.id,
        title: 'Damaskus Kulturreise',
        description: '5-tägige Stadttour durch Damaskus',
        price: 499.0,
        seatsTotal: 20,
      },
      {
        destinationId: syria.id,
        title: 'Historische Stätten Syriens',
        description: '9-tägige Rundreise',
        price: 899.0,
        seatsTotal: 15,
      },
      {
        destinationId: germany.id,
        title: 'Berlin Highlights',
        description: '3-tägige Stadtbesichtigung in Berlin',
        price: 299.0,
        seatsTotal: 30,
      },
      {
        destinationId: germany.id,
        title: 'Deutsche Kultur & Geschichte',
        description: '7-tägige Reise durch Deutschland',
        price: 799.0,
        seatsTotal: 20,
      },
    ],
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
