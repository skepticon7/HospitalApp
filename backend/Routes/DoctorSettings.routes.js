const express = require("express");
const router = express.Router();
const doctorSettingsController = require("../Controllers/doctorSettingsController.js");
const ProtectionRoute = require("../Middleware/RouteProtection.js");

router.patch("/updateDoctorSettings",ProtectionRoute,doctorSettingsController);


module.exports = router;