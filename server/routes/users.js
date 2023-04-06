import express from "express";
import {
  addRemoveFriends,
  getFriends,
  getLoggedUser,
  getLoggedUserFriends,
  getUser,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ ROUTES //
// represent routes where we grab info //
router.get("/me", getLoggedUser);
router.get("/me/friends", verifyToken, getLoggedUserFriends);

// UPDATE //
router.patch("/:id/:friendId", verifyToken, addRemoveFriends);

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getFriends);

export default router;
