const express = require("express");
const router = express.Router();
const {GetTime , PostTime} = require("../Controllers/time.controller.js");
const ProtectionRoute = require("../Middleware/RouteProtection.js");

router.get("/GetTime",ProtectionRoute,GetTime);
router.post("/PostTime",ProtectionRoute,PostTime);

module.exports = router;