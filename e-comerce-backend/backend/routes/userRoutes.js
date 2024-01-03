const express = require("express");
const { signUpUser, signInUser, getUser } = require("../controller/usercontroller");
const { verifyUser } = require("../middleware/middleware");
const router = express.Router();

router.post("/signup", signUpUser);
router.post("/signin", signInUser);

router.route("/me").get([verifyUser], getUser);

module.exports = router;
