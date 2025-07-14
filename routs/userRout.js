import express from "express";
import { getAll, addUser } from "../ctrl/UserCtrl.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", addUser)

export default router;
