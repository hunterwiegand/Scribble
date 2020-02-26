const path = require("path");

const router = require("express").Router();
// Require routes from other .js files
const userRoutes = require("./users");

// tell the router to use the userRoutes as routes to use in the app
router.use("/users", userRoutes);

//Export router with new uses
module.exports = router;
