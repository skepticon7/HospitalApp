const Doctor = require("../Models/doctor.model.js");
const Patient = require("../Models/patient.model.js");
const Time = require("../Models/time.model.js");
const Experience = require("../Models/experience.model.js");
const Education = require("../Models/education.model.js");
const GetUser = async (req,res)=>{
    const type = req.query.type;
    const UserId = req.user._id.toString();
    try {
        
        if(type === "Doctor") {
            const data = await Doctor.findById(UserId)
                .populate({
                    path: 'reviews',
                    populate: {
                        path: 'Patient', // Assuming 'Patient' is the field in the review schema
                        model: 'Patient' // Adjust model name if necessary
                    }
                });
            return res.status(200).json(data);
        }else if(type === "Patient") {
            
            const data = await Patient.findById(UserId);
            return res.status(200).json(data);
        }
        
    } catch (error) {
        console.log("error in get user controller : " + error);
        return res.status(500).json({error:"internal server error"});
    }
  
}


const GetHighestRated = async (req,res)=>{
    try{
        const topDoctor = await Doctor.find({Approved : true}).sort({averageRating : -1}).limit(3);
        return res.status(200).json(topDoctor);
    }catch (error){
        console.log("error in get highest rated controller " + error);
        return res.status(500).json({error:"internal server error"});
    }
}

const GetSpecific= async (req,res)=>{
    const DocName = req.query.doctorName;
    try {
        const data = await Doctor.findOne({username : DocName , Approved:true})
            .populate({
            path: 'reviews',
            populate: {
                path: 'Patient', // Assuming 'Patient' is the field in the review schema
                model: 'Patient' // Adjust model name if necessary
            }
        });
        ;
        if(data){
            const time = await Time.findOne({Doctor : data._id});
            const Exp = await Experience.find({Doctor : data._id}).sort({StartExperience:1});
            const Edu = await Education.find({Doctor : data._id}).sort({StartEducation:1});
            return res.status(200).json({Exp , Edu , time , data});
        }else
            return res.status(404).json({error:"doctor not found"});

    } catch (error) {
        console.log("error in get specific controller " + error);
        return res.status(500).json({error:"internal server error"});
    }
}

const searchDoc = async (req,res)=>{
    const keyword = req.body.keyword;
    try{
        const data = await Doctor.find({
            $or : [
                {username : {$regex : keyword , $options :'i'}},
                {speciality : {$regex : keyword , $options :'i'}},
            ]
        });
        if(data.length > 0)
            return res.status(200).json(data);
        return res.json({error : "doctor or speciality not found"});
    }catch(error){
        console.log("error in searchDoc controller " + error);
        return res.status(500).json({error : "internal server error"});
    }
}

module.exports = {GetUser , GetHighestRated , GetSpecific , searchDoc} ;