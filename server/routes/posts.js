import express from "express";
import {getFeedPosts, getUserPosts, likePost} from "../controllers/posts.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router()


// READ // 
//grab the user feed when on homepage (take posts from db)
router.get("/", verifyToken,getFeedPosts)
// only grabs user posts
router.get("/:userId/posts", verifyToken, getUserPosts)



// UPDATE // 
router.patch("/:id/like", verifyToken, likePost)

export default router