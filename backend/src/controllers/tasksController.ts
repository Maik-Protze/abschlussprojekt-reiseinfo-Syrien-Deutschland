import { Request, Response } from "express";
import prisma from "../prisma/client";

export const getTasks = async (_req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { title, done } = req.body;
  if (!title) return res.status(400).json({ error: "title is required" });
  const task = await prisma.task.create({ data: { title, done: !!done } });
  res.status(201).json(task);
};
