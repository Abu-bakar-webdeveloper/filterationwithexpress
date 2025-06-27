import { Router } from "express";
import {addData} from "../controller/table.controller.js";

const router = Router();


router.route("/add-data").post(addData);

export default router;

