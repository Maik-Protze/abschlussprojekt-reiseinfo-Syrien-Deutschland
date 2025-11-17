import express from "express";
import cors from "cors";
import tasksRouter from "./routes/tasks";

const app = express();

app.use(cors());
app.use(express.json());

// API-Routen
app.use("/api/tasks", tasksRouter);

// Root-Route
app.get("/", (_req, res) => {
  res.send("Task Manager API is running. Use /api/tasks");
});

// Error-Handler (muss als letzte Middleware registriert sein)
app.use((err: any, _req: any, res: any, _next: any) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;