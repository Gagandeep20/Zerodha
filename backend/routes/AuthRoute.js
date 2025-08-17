const router = require("express").Router();
const AuthController = require("../controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");

router.post("/signup", AuthController.Signup);
router.post("/login", AuthController.Login);
router.post("/", userVerification);

module.exports = router;
