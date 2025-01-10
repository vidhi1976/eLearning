import express from 'express';
import { login } from '../controllers/user.controller.js';
import { register } from '../controllers/user.controller.js';
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);

export default router;
