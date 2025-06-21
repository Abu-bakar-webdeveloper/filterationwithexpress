import { Router } from "express";
import { addData } from "../controllers/table.controller.js";

const router = Router();


router.route("/add-data").post(addData);

export default router;

