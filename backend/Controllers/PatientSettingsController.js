const Patient = require("../Models/patient.model.js");
const patientSettingsController  = async (req,res)=>{
    const patientInfo = req.body.patientInfo;
    const patientId = req.user._id;
    console.log("reached");
    try{
        await Patient.findByIdAndUpdate(patientId , patientInfo).then(()=>{
            console.log("patient data updated");
            return res.status(200).json({msg : "successfully updated patient information"});
        }).catch(e=>{
            console.log("patient data not updated");
            return res.status(500).json({error : "failed to update patient information"});
        })
    }catch (error){
        console.log("error in update patient controller");
        return res.status(500).json({error : "Internal Server Error"});
    }
}



module.exports = patientSettingsController;