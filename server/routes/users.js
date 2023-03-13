import express from "express"
import { getUser,  getFriends, addRemoveFriends} from "../controllers/users.js"
import { verifyToken } from "../middleware/auth.js"


const router = express.Router()

// READ ROUTES //
// represent routes where we grab info //
router.get("/:id", verifyToken, getUser)
router.get("/:id/friends", verifyToken, getFriends)

// UPDATE // 
router.patch("/id/:friendId", verifyToken, addRemoveFriends);

export default router
 
