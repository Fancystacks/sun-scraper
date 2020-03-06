const router = require("express").Router();
const userRoutes = require("./users");
// const uploadRoutes = require("./uploads");
const pvWattsRoutes = require("./pvWatts");

// Book routes
router.use("/users", userRoutes);
router.use("/pvWatts", pvWattsRoutes);
// router.use("/uploads", uploadRoutes);

module.exports = router;
