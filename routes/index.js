const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// Catch-all handler for any other route
router.use((req, res) => {
  res.status(404).send("The requested route does not exist!");
});

module.exports = router;
