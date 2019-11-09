// Require express.router so we can add our routes
const router = require("express").Router();
// Require our userController so we can use our database cud commands
const userController = require("../../controllers/userController");

// Fire on the "/" route
router.route("/")
.get(userController.test);

router.route("/test")
    .get(userController.test);


module.exports = router;