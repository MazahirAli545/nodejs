import { registerUser, LoginUser} from "../controllers/user.controller.js"; 
import { generateotp } from "../controllers/otp.controller.js";  
import { verifyotp } from "../controllers/otp.controller.js";
import { someProtectedRoute } from "../controllers/protected.controllers.js";
import { verifyToken } from "../middlewares/jwt.js";
import profession from '../controllers/professionSeed.js';
// import contact from '../controllers/contactUs.controller.js'
import { contactForm } from "../controllers/contactUs.controller.js";
import pincodeController from '../controllers/pincode.controller.js';



import { Router } from "express";

const userRouter = Router()

userRouter.post("/register", registerUser)
userRouter.post("/protected", verifyToken, someProtectedRoute);
userRouter.post("/login", LoginUser)
userRouter.post("/generate-otp", generateotp)
userRouter.post("/verify-otp", verifyotp)
userRouter.get("/profession", profession)
userRouter.post("/contactUs", contactForm)
userRouter.get("/pincode", pincodeController)
export default userRouter;
