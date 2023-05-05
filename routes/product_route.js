const express = require("express");
const router = express.Router();
const { getProducts } = require("../controller/product_controller");

router.route("/").get(getProducts);
module.exports = router;
