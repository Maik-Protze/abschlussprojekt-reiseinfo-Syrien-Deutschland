import { Request, Response } from "express";
import prisma from "../prisma/client";

export const getBookings = async (_req: Request, res: Response) => {
  try {
    const bookings = await prisma.booking.findMany({ include: { tour: true } });
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to fetch bookings" });
  }
};

export const createBooking = async (req: Request, res: Response) => {
  const { tourId, name, email, seats } = req.body;
  if (!tourId || !name || !email || !seats) {
    return res.status(400).json({ error: "Missing booking fields" });
  }

  try {
    // Transaction: check availability and create booking + update seats
    const result = await prisma.$transaction(async (tx) => {
      const tour = await tx.tour.findUnique({ where: { id: Number(tourId) } });
      if (!tour) throw new Error('Tour not found');
      if (tour.seatsBooked + Number(seats) > tour.seatsTotal) throw new Error('Not enough seats');

      const booking = await tx.booking.create({ data: { tourId: Number(tourId), name, email, seats: Number(seats) } });
      await tx.tour.update({ where: { id: Number(tourId) }, data: { seatsBooked: { increment: Number(seats) } } });
      return booking;
    });

    res.status(201).json(result);
  } catch (err: any) {
    console.error(err);
    const message = err.message ?? 'Unable to create booking';
    res.status(400).json({ error: message });
  }
};
