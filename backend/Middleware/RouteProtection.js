const jwt = require("jsonwebtoken");
const Doctor = require("../Models/doctor.model.js");
const Patient = require("../Models/patient.model.js");
const ProtectionRoute = async (req,res ,next)=>{
    try {
        const type = req.query.type;
        const token = req.cookies.jsonwebtoken;
        if(!token)
            return res.status(401).json({error : "unauthorized access , no token available"});
        const decoded = jwt.verify(token , process.env.TOKEN_SIGNATURE);
        if(!decoded)
            return res.status(401).json({error : "unauthorized access , token is invalid"});
        if(type === "Patient") {

            const user = await Patient.findById(decoded.userId);
            if(!user)
                return res.status(404).json({error:"User not found!"});

            req.user = user;
        }else if(type === "Doctor") {
            const user = await Doctor.findById(decoded.userId);
            if(!user)
                return res.status(404).json({error:"User not found!"});
            req.user = user;
        }

        next();
    } catch (error) {
        console.log("error in protection route middlware " + error.message);
        return res.status(500).json({error : "internal server error"});
    }
}

module.exports = ProtectionRoute;