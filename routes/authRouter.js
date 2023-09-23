import { Router } from "express";
import rateLimiter from "express-rate-limit";
import { login, register, logout } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";

const router = Router();

const apiLimier = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: { msg: "IP rate limit exceeded. Retry in 15 minutes" },
});

router.post("/login", apiLimier, validateLoginInput, login);
router.post("/register", apiLimier, validateRegisterInput, register);
router.get("/logout", logout);

export default router;
