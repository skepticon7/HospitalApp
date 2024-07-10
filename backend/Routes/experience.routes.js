const express = require("express");
const router = express.Router();
const {GetExperience , PostExperience} = require("../Controllers/experience.controller.js");
const ProtectionRoute = require("../Middleware/RouteProtection.js");

router.get("/GetExperience",ProtectionRoute,GetExperience);
router.post("/PostExperience",ProtectionRoute,PostExperience);

module.exports = router;