export default {
  datasources: {
    db: {
      provider: "sqlite",
      // Prisma Migrate liest diese URL; hier ENV benutzen
      url: process.env.DATABASE_URL ?? "file:./dev.db",
    },
  },
};