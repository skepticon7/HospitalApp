const express = require("express");
const router = express.Router();
const {GetEducation , PostEducation} = require("../Controllers/education.controller.js");
const ProtectionRoute = require("../Middleware/RouteProtection.js");

router.get("/GetEducation",ProtectionRoute,GetEducation);
router.post("/PostEducation",ProtectionRoute,PostEducation);

module.exports = router;