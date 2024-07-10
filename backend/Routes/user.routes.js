const express = require("express");
const router = express.Router();
const {GetUser , GetHighestRated ,GetSpecific , searchDoc}= require("../Controllers/user.controller.js");
const UpdatePassword = require("../Controllers/UpdatePassword.controller.js");
const ProtectionRoute = require("../Middleware/RouteProtection.js");


router.get("/GetUser",ProtectionRoute,GetUser);
router.get("/GetHighestRated",GetHighestRated);
router.get("/GetSpecificDoctor",GetSpecific)
router.post("/UpdatePassword",ProtectionRoute,UpdatePassword);
router.post("/searchDoc" ,ProtectionRoute , searchDoc);

module.exports = router;