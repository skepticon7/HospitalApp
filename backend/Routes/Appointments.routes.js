const express = require("express");
const router = express.Router();
const ProtectiouRoute = require("../Middleware/RouteProtection.js");
const {MakeAppointment , GetAppointment , AcceptAppointment , RejectAppointment} = require("../Controllers/appointments.controller.js");
const ProtectionRoute = require("../Middleware/RouteProtection.js");


router.get("/GetAppointment",ProtectiouRoute,GetAppointment);
router.post("/MakeAppointment",ProtectiouRoute,MakeAppointment);
router.post("/AcceptAppointment",ProtectionRoute,AcceptAppointment);
router.post("/RejectAppointment",ProtectionRoute,RejectAppointment);


module.exports = router;