import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import secureRoute from "../middleware/secureRoute.js";





const router = express.Router();
router.post("/send/:id", secureRoute, sendMessage);
router.post("/get/:id", secureRoute, getMessage);

export default router;
