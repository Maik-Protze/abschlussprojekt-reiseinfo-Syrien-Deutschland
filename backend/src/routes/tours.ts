import { Router } from "express";
import { getTours, getTourById } from "../controllers/toursController";

const router = Router();

router.get("/", getTours);
router.get("/:id", getTourById);

export default router;
