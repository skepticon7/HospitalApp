const express = require("express");
const router = express.Router();
const {GetPayment , PostPayment} = require("../Controllers/payment.controller.js");
const ProtectionRoute = require("../Middleware/RouteProtection.js");

router.get("/GetPayment",ProtectionRoute,GetPayment);
// router.post("/PostPayment",ProtectionRoute,PostPayment);

module.exports = router;