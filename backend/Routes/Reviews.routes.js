const express = require("express");
const router = express.Router();
const {GetReview, PostReview} = require("../Controllers/reviews.controller.js");
const ProtectionRoute = require("../Middleware/RouteProtection.js");

router.get("/GetReview",ProtectionRoute,GetReview);
router.post("/PostReview",ProtectionRoute,PostReview);

module.exports = router;