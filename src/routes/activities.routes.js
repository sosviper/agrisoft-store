import { Router } from "express";
import {
  getActivities,
  createNewActivity,
  getActivityById,
  deleteActivityById,
  getTotalActivities,
  updateActivityById,
} from "../controllers/activities.controller";

const router = Router();

router.get("/activities", getActivities);

router.post("/activities", createNewActivity);

router.get("/activities/count", getTotalActivities);

router.get("/activities/:id", getActivityById);

router.delete("/activities/:id", deleteActivityById);

router.put("/activities/:id", updateActivityById);

export default router;