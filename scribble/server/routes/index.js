const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth");

// Tell our express router to use the apiRoutes from the api folder
router.use("/api", apiRoutes);
// Tell our express router to use the authRoutes from the auth folder
router.use("/auth", authRoutes);

// Direct to the index.html page on load
router.use((req, res) =>
  res.sendFile(path.join(__dirname, '../../client/public', 'index.html'))
);

module.exports = router;
