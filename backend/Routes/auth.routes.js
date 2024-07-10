const express = require("express");
const {login , signup , logout , verifyCookie} = require("../Controllers/Auth.controller.js");
const router = express.Router();



router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.get("/verify",verifyCookie);

module.exports = router;