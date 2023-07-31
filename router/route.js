import { Router } from "express";
// import all controllers
import * as controller from "../controllers/appController.js";
const router = Router();

//POST Methods
router.route("/register").post((req, res) => res.json(controller.register)); //register user
router.route("/registerMail").post(); //send the email
router.route("/authenticate").post((res, req) => res.end()); // authenticate user
router.route("/login").post(controller.login); // login in app

//GET Methods
router.route("/user/:username").get(controller.getUser); // get user with username
router.route("/generateOTP").get(controller.generateOTP); // generate random OTP
router.route("/verifyOTP").get(controller.verifyOTP); // verify generated OTP
router.route("/createResetSession").get(controller.createResetSession); // reset all the variables

//PUT Methods
router.route("/updateuser").put(controller.updateUser); // Use to update the profile
router.route("/resetPassword").put(controller.resetPassword); // use to reset password

export default router;