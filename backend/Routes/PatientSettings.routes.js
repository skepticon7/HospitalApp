const patientSettingsController = require('../Controllers/PatientSettingsController.js');
const express = require('express');
const router = express.Router();
const ProtectionRoute = require("../Middleware/RouteProtection.js");

router.patch("/updatePatientSettings",ProtectionRoute,patientSettingsController);

module.exports = router;