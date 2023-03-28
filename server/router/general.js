import express from "express";
import { getUsers, getUserDashboard } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUsers);
router.get("/dashboard", getUserDashboard);

export default router;
