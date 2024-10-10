import { Router } from "express"
import { login, logout, signup } from "../controllers/auth.controller.js"
import { validate, verifyJwt } from "../middleware/auth.middleware.js"
import { loginAuthentication, signupSchema } from "../validator/auth.validator.js"

const router=Router()


router.post("/signup",validate(signupSchema),signup);
router.route("/login").post(validate(loginAuthentication),login)
router.post("/logout",verifyJwt,logout)


export default router;