import { Request, Response } from "express";
import prisma from "../prisma/client";

export const getDestinations = async (_req: Request, res: Response) => {
  try {
    const destinations = await prisma.destination.findMany({ include: { tours: true } });
    res.json(destinations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to fetch destinations" });
  }
};

export const getDestinationById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const destination = await prisma.destination.findUnique({
      where: { id },
      include: { tours: true },
    });
    if (!destination) return res.status(404).json({ error: "Destination not found" });
    res.json(destination);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to fetch destination" });
  }
};
