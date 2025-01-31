import express from 'express';
import { register,getUserProfile, login, logout } from '../controllers/user.controller.js';
// import {  } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile").get(isAuthenticated, getUserProfile);
router.route("/logout").post(logout);

export default router;
