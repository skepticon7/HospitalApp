const Doctor = require("../Models/doctor.model.js");

const doctorSettingsController = async (req,res)=>{
    const doctorInfo = req.body.doctorInfo;
    const doctorId = req.user._id;
    try {
        await Doctor.findByIdAndUpdate(doctorId , doctorInfo).then(()=>{
            return res.status(200).json({msg : "doctor info updated successfully"});
        }).catch(e=>{
            console.log("doctor data not updated");
            return res.status(500).status({error : "doctor data not updated"});
        })
    } catch (error) {
        console.log("error in update doc setting controller" , error.message);
        return res.status(500).json({error : "Internal Server Error"});
    }
}

module.exports = doctorSettingsController;