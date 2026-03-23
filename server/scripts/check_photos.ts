import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('--- Provider Profiles ---');
  const providerProfiles = await prisma.providerProfile.findMany({
    select: {
      userId: true,
      businessName: true,
      photoUrl: true,
    },
  });
  console.table(providerProfiles);

  console.log('\n--- Vehicles ---');
  const vehicles = await prisma.vehicle.findMany({
    select: {
      id: true,
      make: true,
      model: true,
      photoUrl: true,
    },
  });
  console.table(vehicles);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
