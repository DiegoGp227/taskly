import { Router } from "express";
import signup from "../controllers/auth/signup.controllers.js";
import login from "../controllers/auth/login.controllers.js";
import { getMyTopics, postMyTopics, putMyTopics, deleteMyTopics } from "../controllers/topics/topics.controllers.js"
import { getMyTasks, postMyTasks, putMyTasks, deleteMyTasks }  from "../controllers/tasks/tasks.controllers.js"



const router = Router();

// Routes Auth
router.post('/login', login);
router.post('/signup', signup);

// Router Topics
router.get("/topics/:id", getMyTopics);  //ok
router.post("/topics", postMyTopics); // ok
router.put("/topics/:id", putMyTopics); // ok
router.delete("/topics/:id", deleteMyTopics); //ok

// Router Task
router.get("/tasks/:topicId/:statusId", getMyTasks); // ok
router.post("/tasks", postMyTasks); //ok
router.put("/tasks/:id", putMyTasks); //ok
router.delete("/tasks/:id", deleteMyTasks); // ok

export default router;