import express from "express";
import { addPost, getAll } from "../ctrl/postCtrl.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", addPost);

export default router;