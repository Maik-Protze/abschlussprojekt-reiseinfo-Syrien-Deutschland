export default {
  datasources: {
    db: {
      provider: "postgresql",
      // PostgreSQL connection string from environment
      url: process.env.DATABASE_URL ?? "postgresql://postgres:password@localhost:5432/reiseinfo_db",
    },
  },
};