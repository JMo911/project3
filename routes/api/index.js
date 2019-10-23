const router = require("express").Router();
const userRoutes = require("./users");
const mechanicRoutes = require("./mechanics");

// user routes
router.use("/users", userRoutes);
router.use("/mechanics", mechanicRoutes);

module.exports = router;