const travellersRoutes = require("./travellers");

const router = require("express").Router();

router.use("/api/travellers", travellersRoutes);

module.exports = router;
