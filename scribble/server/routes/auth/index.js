const path = require("path");

const router = require("express").Router();
// Require routes from other .js files
const authRoutes = require("./auth");

// tell the router to use the userRoutes as routes to use in the app
router.use("/auth", authRoutes);

//Export router with new uses
module.exports = router;