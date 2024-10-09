import { Router } from "express"
import { login, signup } from "../controllers/authController.js"
import { validate } from "../middleware/authMiddleware.js"
import { loginAuthentication, signupSchema } from "../validater/authValidater.js"

const router=Router()


router.post("/signup",validate(signupSchema),signup);
router.route("/login").post(validate(loginAuthentication),login)
// router.post("/logout",logout)


export default router;