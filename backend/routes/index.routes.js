import { Router } from "express";
import signup from "../controllers/auth/signup.controllers.js";
import login from "../controllers/auth/login.controllers.js";
import { getMyTopics, postMyTopics, putMyTopics, deleteMyTopics } from "../controllers/Topics/topics.controllers.js"



const router = Router();

// Routes Auth
router.post('/login', login);
router.post('/signup', signup);

// Router Topics
router.get("/topics", getMyTopics )
router.post("/topics", postMyTopics )
router.put("/topics/:id", putMyTopics )
router.delete("/topics/:id", deleteMyTopics )

export default router;