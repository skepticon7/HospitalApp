const Doctor = require("../Models/doctor.model.js");
const Patient = require("../Models/patient.model.js");
const bcrypt = require('bcrypt');
const UpdatePassword = async (req,res)=>{
    const type = req.query.type;
    const UserId = req.user._id;
    const newPassword = req.body.newPassword;
    const oldPassword = req.body.oldPassword
    console.log(req.body.newPassword);
    console.log(req.body.oldPassword);
    try {
        if(type === "Patient"){
            const data  = await Patient.findById(UserId);
            const result = await bcrypt.compare(oldPassword , data.password);
            
            if(result){
                const newEncryptedPassword = await bcrypt.hash(newPassword , 10);
                await Patient.findByIdAndUpdate(UserId , {password : newEncryptedPassword}).then(()=>{
                    return res.status(200).json({msg : "Password has been updated"});
                }).catch(e=>{
                    return res.status(500).json({msg : "Error in updating password"});
                })
            }else{
                return res.status(200).json({error : "Old password is incorrect"});
            }
        }else if(type === "Doctor") {
            const data  = await Doctor.findById(UserId);
            const result = await bcrypt.compare(oldPassword , data.password);
            if(result){
                const newEncryptedPassword = await bcrypt.hash(newPassword , 10);
                await Doctor.findByIdAndUpdate(UserId , {password : newEncryptedPassword}).then(()=>{
                    return res.status(200).json({msg : "Password has been updated"});
                }).catch(e=>{
                    return res.status(500).json({msg : "Error in updating password"});
                })
            }else{
                return res.status(200).json({error : "Old password is incorrect"});
            }
        }
    } catch (error) {
        console.log("error in update password controller : " + error);
        return res.status(500).json({error : "Internal Server Error"});
    }
}


module.exports = UpdatePassword;