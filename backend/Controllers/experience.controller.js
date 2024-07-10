const Experience = require("../Models/experience.model.js")
const PostExperience = async (req,res)=>{
    const experience = req.body.experience;

    try {
        if(experience._id) {
            await Experience.findByIdAndUpdate(experience._id , experience).sort({StartExperience : 1}).then(()=>{
                return res.status(200).json({msg : "experience updated"});
            }).catch(e=>{
                return res.status(500).json({error:"error updating experience"});
            })
        } 
        else {
            const newExperience = new Experience({
                Doctor : req.user._id,
                StartExperience:experience.startDate,
                EndExperience : experience.endDate,
                Position : experience.position,
                Location: experience.institute
            });
            newExperience.save().then(()=>{
                return res.status(200).json({msg : "experience added"});

            });
        }
        
    } catch (error) {
        console.log("error in post experience middlware" + error.message);
        return res.status(500).json({error:"Internal server error"});
    }
}

const GetExperience = async (req,res)=>{
    const DoctorId = req.user._id;
    try {
        const experience = await Experience.find({Doctor:DoctorId});

        return res.status(200).json(experience);
    } catch (error) {
        console.log("error in get experience controller " + error.message);
        return res.status(500).json({error:"internal server error"});
    }
}

module.exports = {PostExperience , GetExperience}