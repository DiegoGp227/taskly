import { Router } from "express";
import signup from '../controllers/auth/signup.controllers.js';
import login from '../controllers/auth/login.controllers.js';



const router = Router();

// Routes Auth
router.post('/login', login);
router.post('/signup', signup);



export default router;