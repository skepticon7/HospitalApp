const Doctor = require("../Models/doctor.model.js");
const Patient = require("../Models/patient.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const GenTokenAndSetCookie = require("../Utils/GenTokenAndSetCookie.js");
const login = async (req,res)=>{
    const {username , password , type} = req.body;
    try {
        if(type === "Patient"){
            const user = await Patient.findOne({username});
            if(user){
                const comparedPasswords = bcrypt.compare(password , user.password);
                if(!comparedPasswords)
                    return res.status(400).json({error : "invalid patient password"});
                GenTokenAndSetCookie(user._id,res);
                return res.status(200).json({msg : "token added" , id:user._id , type : type , profilePicture : user.photo , username : user.username});
            }else 
                return res.status(400).json({error : "error , invalid patient username"});
                
        }else{
            const user = await Doctor.findOne({username});
            if(user){
                const comparedPasswords = bcrypt.compare(password , user.password);
                if(!comparedPasswords)
                    return res.status(400).json({error : "invalid doctor password"});
                GenTokenAndSetCookie(user._id,res);
                return res.status(200).json({msg : "token added" , id:user._id , type : type , profilePicture : user.photo , username : user.username});
            }else 
                return res.status(400).json({error : "error , invalid doctor username"});
        }
    } catch (error) {
        console.log("error in login controller");
        return res.status(500).json({error : "internal server error"});
    }
}
const signup = async (req,res)=>{
    
    const {username , type ,email, password , gender , photo} = req.body;
    try{
        if(type === "Patient"){
            const user = await Patient.findOne({username})
            if(user)
                return res.status(400).json({error : "Patient already exists"});
            const hashedpassword = await bcrypt.hash(password , 10);
            const newPatient = new Patient({
                username : username,
                email : email,
                password : hashedpassword,
                gender : gender,
                photo : photo
            });
            await newPatient.save().then(()=>{
                return res.status(200).json({msg : "successfully added the patient to the DB"});
            }).catch((e)=>{
                console.log("error is : " + e.message);
                return res.status(500).json({error : "failed to save the patient to the DB"});
            })
        }else{
            const user = await Doctor.findOne({username})
            if(user)
                return res.status(400).json({error : "Doctor already exists"});
            const hashedpassword = await bcrypt.hash(password , 10);
            const newDoctor = new Doctor({
                username : username,
                email : email,
                password : hashedpassword,
                gender : gender,
                photo : photo
            });
            await newDoctor.save().then(()=>{
                return res.status(200).json({msg : "successfully added the doctor to the DB"});
            }).catch((e)=>{
                return res.status(500).json({error : "failed to save the doctor to the DB"});
            })
        }
    }catch(error){
        console.log("error in signup controller " + error.message);
        return res.status(500).json({error : "Internal server error"});
    }
}
const logout = (req,res)=>{
    try {
        res.cookie("jsonwebtoken",{maxAge : 0});
        return res.status(200).json({msg :"json web token removed"});
    } catch (error) {
        console.log("error in logout controller");
        return res.status(500).json({error : "internal server error"});
    }
}

const verifyCookie = (req,res)=>{
    const token  = req.cookies.jsonwebtoken;
    const UserId = req.query.UserId;
    try {
        if(!token)
            return res.status(401).json({error : "Anauthorized , No Token provided"});
        const decoded = jwt.verify(token , process.env.TOKEN_SIGNATURE);
        if(decoded.userId!==UserId)
            return res.status(401).json({error: "Unauthorized , wrong token provided"});
        return res.status(200).json({success:true});
    } catch (error) {
        console.log("error in token controller");
        return  res.status(500).json({error: "Internal Server Error"});
    }
}

module.exports = {login , signup , logout , verifyCookie};