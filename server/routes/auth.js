import express from "express";
import { login } from "../controllers/auth.js";

//all routes configured on different files
const router = express.Router("/login", login);

router.post("/login", login);

export default router;
